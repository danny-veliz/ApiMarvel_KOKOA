import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BackHand from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { StepIcon } from '@mui/material';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}  >
      <Button variant="contained" endIcon={<BackHand />} sx={{  backgroundColor: 'black'}}>
        Back
      </Button>
    </Stack>
  );
}