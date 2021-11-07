import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  src: HTMLImageElement['src'] | string;
}

const selectedSvgStyle = {
  border: '1px solid blue',
};

const loadImg = (
  img: HTMLImageElement,
  file: File,
  setImgSt: Dispatch<SetStateAction<TypeImgSt>>
) => {
  img.onload = () => {
    setImgSt({
      loaded: true,
      imgW: img.width,
      imgH: img.height,
      ratio: img.width / componentW,
      src: img.src,
    });
  };
  img.src = URL.createObjectURL(file);
};

const HudScreen = ({ file }: TypHudScreenProps) => {
  const [imgSt, setImgSt] = useState<TypeImgSt>({
    loaded: false,
    imgW: 0,
    imgH: 0,
    ratio: 0,
    src: '',
  });
  const img = new Image();
  useEffect(() => loadImg(img, file, setImgSt), [file.name]); // eslint-disable-line react-hooks/exhaustive-deps
  const width = componentW;
  const height = imgSt.loaded ? Math.round(imgSt.imgH / imgSt.ratio) : 200;
  console.log('HudScreen');

  return (
    <svg id="root-svg" width={width} height={height} style={selectedSvgStyle}>
      <image
        id="selected-image"
        x="0"
        y="0"
        width={width}
        xlinkHref={imgSt.src}
        style={{ display: imgSt.loaded ? 'block' : 'none', zIndex: 1 }}
      />
      <SelectRegion width={width} height={height} />
    </svg>
  );
};

export default HudScreen;
