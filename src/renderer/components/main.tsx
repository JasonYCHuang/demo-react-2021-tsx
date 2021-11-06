import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Operation from './operation';
import Gallery from './gallery';
import HudMain from './hud_main';

const leftStyle = {
  borderRight: '1px solid #ccc',
};

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} style={leftStyle}>
          <Operation />
          <Gallery />
        </Grid>
        <Grid item xs={6}>
          <HudMain />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
