import { Dispatch, SetStateAction, useState } from 'react';
import SelectRegion from './visx_drag';

const componentW = 600;

interface TypHudScreenProps {
  file: File;
}

interface TypeImgSt {
  loaded: boolean;
  imgW: number;
  imgH: number;
  ratio: number;
}

const selectedSvgStyle = {
  border: '1px solid blue',
};

const loadImg = (file: File, setImgSt: Dispatch<SetStateAction<TypeImgSt>>) => {
  const img = new Image();
  img.onload = () => {
    setImgSt({
      loaded: true,
      imgW: img.width,
      imgH: img.height,
      ratio: img.width / componentW,
    });
  };
  img.src = URL.createObjectURL(file);
  return img;
};

const HudScreen = ({ file }: TypHudScreenProps) => {
  const [imgSt, setImgSt] = useState<TypeImgSt>({
    loaded: false,
    imgW: 0,
    imgH: 0,
    ratio: 0,
  });
  const img = loadImg(file, setImgSt);
  const width = componentW;
  const height = imgSt.loaded ? Math.round(imgSt.imgH / imgSt.ratio) : 200;

  return (
    <svg
      id="selected-svg"
      width={width}
      height={height}
      style={selectedSvgStyle}
    >
      <image
        id="selected-image"
        x="0"
        y="0"
        width={width}
        xlinkHref={img.src}
        style={{ display: imgSt.loaded ? 'block' : 'none' }}
      />
      <SelectRegion width={width} height={height} />
    </svg>
  );
};

export default HudScreen;
