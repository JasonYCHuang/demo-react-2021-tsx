import { useCallback, useState } from 'react';
import { useDrag } from '@visx/drag';
import { LinearGradient } from '@visx/gradient';

type Rect = { xb: number; xe: number; yb: number; ye: number };

export type DragIIProps = {
  width: number;
  height: number;
  data?: Rect;
};

export default function DragII({
  data = { xb: 0, xe: 0, yb: 0, ye: 0 },
  width,
  height,
}: DragIIProps) {
  const [rect, setRect] = useState<Rect>(data);
  const onDragStart = useCallback(
    (currDrag) => {
      setRect(() => ({
        xb: currDrag.x,
        xe: currDrag.x,
        yb: currDrag.y,
        ye: currDrag.y,
      }));
    },
    [setRect]
  );
  const onDragMove = useCallback(
    (currDrag) => {
      setRect((currRect) => {
        const nextRect = {
          ...currRect,
          ...{ xe: currDrag.x + currDrag.dx, ye: currDrag.y + currDrag.dy },
        };
        return nextRect;
      });
    },
    [setRect]
  );
  const {
    x = 0,
    y = 0,
    dx,
    dy,
    isDragging,
    dragStart,
    dragEnd,
    dragMove,
  } = useDrag({
    onDragStart,
    onDragMove,
    resetOnStart: true,
  });

  return width < 10 ? null : (
    <div className="DragII" style={{ touchAction: 'none' }}>
      <svg width={width} height={height}>
        <LinearGradient id="stroke" from="#ff614e" to="#ffdc64" />
        <rect fill="#04002b" width={width} height={height} rx={14} />
        {[rect].map((r) => {
          const { xb, xe, yb, ye } = r;
          const w = Math.abs(xe - xb);
          const h = Math.abs(ye - yb);
          const xp = xe < xb ? xe : xb;
          const yp = ye < yb ? ye : yb;
          return (
            <rect
              fill="transparent"
              stroke="url(#stroke)"
              strokeWidth={3}
              x={xp}
              y={yp}
              width={w}
              height={h}
            />
          );
        })}

        <g>
          {isDragging && (
            /* capture mouse events (note: <Drag /> does this for you) */
            <rect
              width={width}
              height={height}
              onMouseMove={dragMove}
              onMouseUp={dragEnd}
              fill="transparent"
            />
          )}
          {/* decorate the currently drawing line */}
          {isDragging && (
            <g>
              <rect
                fill="white"
                width={8}
                height={8}
                x={x + dx - 4}
                y={y + dy - 4}
                pointerEvents="none"
              />
              <circle
                cx={x}
                cy={y}
                r={4}
                fill="transparent"
                stroke="white"
                pointerEvents="none"
              />
            </g>
          )}
          {/* create the drawing area */}
          <rect
            fill="transparent"
            width={width}
            height={height}
            onMouseDown={dragStart}
            onMouseUp={isDragging ? dragEnd : undefined}
            onMouseMove={isDragging ? dragMove : undefined}
            onTouchStart={dragStart}
            onTouchEnd={isDragging ? dragEnd : undefined}
            onTouchMove={isDragging ? dragMove : undefined}
          />
        </g>
      </svg>
      <div className="deets">
        <div>
          Based on Mike Bostock's{' '}
          <a href="https://bl.ocks.org/mbostock/f705fc55e6f26df29354">
            Line Drawing
          </a>
        </div>
      </div>

      <style jsx>{`
        .DragII {
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        svg {
          margin: 1rem 0;
          cursor: crosshair;
        }

        .deets {
          display: flex;
          flex-direction: row;
          font-size: 12px;
        }
        .deets > div {
          margin: 0.25rem;
        }
      `}</style>
    </div>
  );
}
