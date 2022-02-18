import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function Tile({heading, value}) {

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {heading}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {value}
            </Typography>
          </CardContent>
        </React.Fragment>
      );
  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
