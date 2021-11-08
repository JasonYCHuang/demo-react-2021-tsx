import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import GalleryCtrl from './gallery_ctrl';
import GalleryList from './gallery_list';
import HudMain from './hud_main';
import HudCtrl from './hud_ctrl';

const leftStyle = {
  borderRight: '1px solid #ccc',
};

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} style={leftStyle}>
          <GalleryCtrl />
          <GalleryList />
        </Grid>
        <Grid item xs={6}>
          <HudCtrl />
          <HudMain />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
