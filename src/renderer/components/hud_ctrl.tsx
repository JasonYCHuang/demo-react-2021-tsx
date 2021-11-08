/* eslint-disable react/jsx-props-no-spreading */
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useAppSelector, useAppDispatch } from '../reducers/hooks';
import { toggleSemiAutoSelect, toggleManualEdit } from '../actions/ctrlSlice';

const HudControl = () => {
  const { isSemiAutoSelect, isManualEdit } = useAppSelector(
    (state: any) => state.ctrl
  );
  const dispatch = useAppDispatch();
  const onClickSelect = () => dispatch(toggleSemiAutoSelect());
  const onClickManualEdit = () => dispatch(toggleManualEdit());

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
        variant={isManualEdit ? 'contained' : 'outlined'}
        size="small"
        onClick={onClickManualEdit}
        disabled
      >
        手動微調
      </Button>
    </Stack>
  );
};

export default HudControl;
