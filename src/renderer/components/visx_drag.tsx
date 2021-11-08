import { useCallback, useState } from 'react';
import { useDrag } from '@visx/drag';
import { LinearGradient } from '@visx/gradient';

type TypRect = { xb: number; xe: number; yb: number; ye: number };

type TypSelectRegionProps = {
  width: number;
  height: number;
  rectData?: TypRect; // eslint-disable-line react/require-default-props
};

const SelectRegion = ({
  rectData = { xb: 0, xe: 0, yb: 0, ye: 0 },
  width = 600,
  height = 200,
}: TypSelectRegionProps) => {
  const [rect, setRect] = useState<TypRect>(rectData);
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
  const { isDragging, dragStart, dragEnd, dragMove } = useDrag({
    onDragStart,
    onDragMove,
    resetOnStart: true,
  });
  console.log('SelectRegion');

  return (
    <g id="visx-select-region">
      <LinearGradient id="stroke" from="#ff614e" to="#ffdc64" />
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
            strokeWidth={2}
            x={xp}
            y={yp}
            width={w}
            height={h}
            style={{ zIndex: 200 }}
          />
        );
      })}
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
        style={{ zIndex: 100 }}
      />
    </g>
  );
};

export default SelectRegion;
