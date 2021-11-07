import Box from '@mui/material/Box';

import { useAppSelector } from '../reducers/hooks';
import HudScreen from './hud_screen';

const hudRootStyle = {
  marginTop: '10px',
};

const getSelectedFile = (files: File[], selectedName: string) => {
  const candidates = files.filter((f) => f.name === selectedName) || [];
  if (candidates.length === 0) return null;
  return candidates[0];
};

const HudMain = () => {
  const { files, selectedName } = useAppSelector((state: any) => state.photo);
  if (!selectedName) {
    return <Box sx={{ flexGrow: 1 }} style={hudRootStyle} />;
  }
  const selectedFile = getSelectedFile(files, selectedName);
  if (!selectedFile) {
    return <Box sx={{ flexGrow: 1 }} style={hudRootStyle} />;
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={hudRootStyle}>
      <HudScreen file={selectedFile} key={selectedFile.name} />
    </Box>
  );
};

export default HudMain;
