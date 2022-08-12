import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function Range() {

  return (
    <Box sx={{ width: 900 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={10}
        getAriaValueText={valuetext}
        step={10}
        marks
        min={10}
        max={999}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}