import { TypScreenState } from '../types/screen';
import { useAppSelector } from '../reducers/hooks';

interface HudVisxProps {
  img: HTMLImageElement;
}

const selectedSvgStyle = {
  border: '1px solid blue',
};

const HudVisx = ({ img }: HudVisxProps) => {
  const screenState = useAppSelector((state: any) => state.screen);
  console.log(screenState);

  return (
    <svg id="selected-svg" width={600} height={450} style={selectedSvgStyle}>
      <image
        id="selected-image"
        x="0"
        y="0"
        width={200}
        height={150}
        xlinkHref={img.src}
      />
    </svg>
  );
};

export default HudVisx;
