/* eslint-disable react/jsx-props-no-spreading */
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { useAppDispatch } from '../reducers/hooks';
import { addPhotos } from '../actions/photoSlice';

const Input = styled('input')({
  display: 'none',
});

const DzUploadImgs = () => {
  const dispatch = useAppDispatch();
  const onDrop = (files: any) => dispatch(addPhotos(files));
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="contained-button-file" {...getRootProps()}>
      <Input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        {...getInputProps()}
      />
      <Button variant="contained" component="span" onClick={onClick}>
        載入圖片
      </Button>
    </label>
  );
};

const Operation = () => {
  return (
    <Stack spacing={2} direction="row">
      <DzUploadImgs />
      <Button variant="outlined">全自動預測</Button>
    </Stack>
  );
};

export default Operation;
