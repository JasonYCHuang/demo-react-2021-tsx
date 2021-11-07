import { useAppDispatch, useAppSelector } from '../reducers/hooks';
import { writeSelectedImageDim } from '../actions/screenSlice';
import type { AppDispatch } from '../reducers/store';

interface HudVisxProps {
  file: File;
}

const selectedSvgStyle = {
  border: '1px solid blue',
};

const setImg = (file: File, dispatch: AppDispatch) => {
  const img = new Image();
  img.onload = () => {
    dispatch(
      writeSelectedImageDim({
        imgW: img.width,
        imgH: img.height,
      })
    );
  };
  img.src = URL.createObjectURL(file);
  return img;
};

const HudScreen = ({ file }: HudVisxProps) => {
  const { imgW } = useAppSelector((state: any) => state.screen);
  console.log(imgW)
  const dispatch = useAppDispatch();

  const img = setImg(file, dispatch);

  return (
    <svg id="selected-svg" width={600} style={selectedSvgStyle}>
      <image id="selected-image" x="0" y="0" width={imgW} xlinkHref={img.src} />
    </svg>
  );
};

export default HudScreen;
