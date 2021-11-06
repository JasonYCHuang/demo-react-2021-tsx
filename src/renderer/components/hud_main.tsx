import Box from '@mui/material/Box';

import HudVisx from './hud_visx';
import { useAppSelector, useAppDispatch } from '../reducers/hooks';
import { writeSelectedImageDim } from '../actions/screenSlice';

const hudRootStyle = {
  marginTop: '10px',
};

const getSelectedFile = (files: File[], selectedName: string) => {
  const candidates = files.filter((f) => f.name === selectedName) || [];
  if (candidates.length === 0) return null;
  return candidates[0];
};

const HudMain = () => {
  const dispatch = useAppDispatch();

  const { files, selectedName } = useAppSelector((state: any) => state.photo);
  if (!selectedName) {
    return <Box sx={{ flexGrow: 1 }} style={hudRootStyle} />;
  }
  const selectedFile = getSelectedFile(files, selectedName);
  if (!selectedFile) {
    return <Box sx={{ flexGrow: 1 }} style={hudRootStyle} />;
  }

  const img = new Image();
  img.onload = () => {
    dispatch(
      writeSelectedImageDim({
        imgW: img.width,
        imgH: img.height,
      })
    );
  };
  img.src = URL.createObjectURL(selectedFile);

  return (
    <Box sx={{ flexGrow: 1 }} style={hudRootStyle}>
      <HudVisx img={img} key={selectedFile.name} />
    </Box>
  );
};

export default HudMain;
