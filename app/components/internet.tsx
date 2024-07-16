import Sheet from '@mui/joy/Sheet';
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RadioGroup from '@mui/joy/RadioGroup';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';


import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

// import Person from '@mui/icons-material/Person';
// import People from '@mui/icons-material/People';
// import Apartment from '@mui/icons-material/Apartment';
export default function Home() {
  return (
    <>
    <Sheet variant="outlined" color="neutral" sx={{ p: 2,
    //  borderRadius: "lg",
    //         boxShadow: "xl",
            
           }}>
 <RadioGroup
      aria-label="platform"
      defaultValue="Website"
      overlay
      name="platform"
      sx={{
        flexDirection: 'row',
        gap: 2,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: '3px solid',
            borderColor: 'primary.500',
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: 'contents',
          '& > svg': {
            zIndex: 2,
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            bgcolor: 'background.surface',
            borderRadius: '50%',
          },
        },
      }}
    >
      {['PPPoE', 'Dynamic IP ', 'Static IP'].map((value) => (
        <Sheet
          key={value}
          variant="outlined"
          sx={{
            borderRadius: 'md',

            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            p: 2,
            minWidth: 120,
          }}
        >
          <Radio id={value} value={value} checkedIcon={<CheckCircleRoundedIcon />} />
        
          <FormLabel htmlFor={value}>{value}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
    </Sheet>
    
    </>
  );
}