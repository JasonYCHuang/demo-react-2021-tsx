import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useAppSelector, useAppDispatch } from '../reducers/hooks';
import { rmPhoto, selectPhoto } from '../actions/photoSlice';

interface MediaCardProps {
  file: File;
}

const cctStyle = {
  padding: '4px',
};

const casStyle = {
  padding: '4px',
};

const MediaCard = ({ file }: MediaCardProps) => {
  const dispatch = useAppDispatch();
  const onEdit = () => dispatch(selectPhoto(file.name));
  const onDelete = () => dispatch(rmPhoto(file.name));

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        width="240"
        height="180"
        image={URL.createObjectURL(file)}
        alt="green iguana"
      />
      <CardContent style={cctStyle}>
        <Typography variant="body2" color="text.secondary">
          {file.name}
        </Typography>
      </CardContent>
      <CardActions style={casStyle}>
        <Button size="small" onClick={onEdit}>
          編輯
        </Button>
        <Button size="small" onClick={onDelete}>
          刪除
        </Button>
      </CardActions>
    </Card>
  );
};

const galleryRootStyle = {
  marginTop: '10px',
};

const GalleryList = () => {
  const { files } = useAppSelector((state: any) => state.photo);

  return (
    <Box sx={{ flexGrow: 1 }} style={galleryRootStyle}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 6, sm: 9, md: 12 }}
      >
        {files.map((file: File) => (
          <Grid item xs={2} sm={3} md={3} key={file.name}>
            <MediaCard file={file} key={file.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GalleryList;
