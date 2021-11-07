import { Dispatch, SetStateAction, useState } from 'react';

const componentW = 600;

interface HudScreenProps {
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

const HudScreen = ({ file }: HudScreenProps) => {
  const [imgSt, setImgSt] = useState<TypeImgSt>({
    loaded: false,
    imgW: 0,
    imgH: 0,
    ratio: 0,
  });
  const img = loadImg(file, setImgSt);
  const height = imgSt.loaded ? Math.round(imgSt.imgH / imgSt.ratio) : 200;

  return (
    <svg
      id="selected-svg"
      width={componentW}
      height={height}
      style={selectedSvgStyle}
    >
      <image
        id="selected-image"
        x="0"
        y="0"
        width={componentW}
        xlinkHref={img.src}
        style={{ display: imgSt.loaded ? 'block' : 'none' }}
      />
    </svg>
  );
};

export default HudScreen;
