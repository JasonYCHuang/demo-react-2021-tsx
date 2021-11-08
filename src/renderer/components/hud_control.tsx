/* eslint-disable react/jsx-props-no-spreading */
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

const StySemiAutoText = {
  lineHeight: '2',
  padding: '0 5px 0 0',
};

const HudControl = () => {
  return (
    <Stack spacing={2} direction="row">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Typography variant="button" style={StySemiAutoText}>
          半自動
        </Typography>
        <Button variant="outlined" size="small">
          匡選
        </Button>
        <Button variant="outlined" size="small">
          預測
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default HudControl;
