/* eslint-disable react/jsx-props-no-spreading */
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useAppSelector, useAppDispatch } from '../reducers/hooks';
import { toggleSemiAutoSelect, toggleMagnifty } from '../actions/ctrlSlice';

const HudControl = () => {
  const { isSemiAutoSelect, isMagnify } = useAppSelector(
    (state: any) => state.ctrl
  );
  const dispatch = useAppDispatch();
  const onClickSelect = () => dispatch(toggleSemiAutoSelect());
  const onClickMagnify = () => dispatch(toggleMagnifty());

  return (
    <Stack spacing={1} direction="row">
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          variant={isSemiAutoSelect ? 'contained' : 'outlined'}
          size="small"
          onClick={onClickSelect}
        >
          匡選
        </Button>
        <Button variant="outlined" size="small" disabled={!isSemiAutoSelect}>
          半自動預測
        </Button>
      </ButtonGroup>

      <Button
        variant={isMagnify ? 'contained' : 'outlined'}
        size="small"
        onClick={onClickMagnify}
      >
        手動微調
      </Button>
    </Stack>
  );
};

export default HudControl;
