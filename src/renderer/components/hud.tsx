import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import { useAppSelector } from '../reducers/hooks';

interface MediaCardProps {
  file: File;
}

const MediaCard = ({ file }: MediaCardProps) => {
  // const img = new Image();
  // img.onload = () => {
  //   console.log(img.width);
  // };
  // img.src = URL.createObjectURL(file);
  return (
    <CardMedia
      component="img"
      image={URL.createObjectURL(file)}
      alt="green iguana"
    />
  );
};

const hudRootStyle = {
  marginTop: '10px',
};

const getSelectedFile = (files: File[], selectedName: string) => {
  const candidates = files.filter((f) => f.name === selectedName) || [];
  if (candidates.length === 0) return null;
  return candidates[0];
};

const Hud = () => {
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
      <MediaCard file={selectedFile} key={selectedFile.name} />
    </Box>
  );
};

export default Hud;
