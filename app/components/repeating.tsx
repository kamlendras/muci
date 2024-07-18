"use client"
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Grid from '@mui/joy/Grid';
import { useEffect, useState } from 'react';
import Fade from "react-reveal/Fade";
import LinearProgress from '@mui/joy/LinearProgress';
export default function Home() {
  const [loading,setloading] = useState(true)
  useEffect(()=>{
  setTimeout(( )=>{
    setloading(false)
  },300);
})
  return (
    <>
    {loading ?    <LinearProgress variant="solid" />  : 
     <Fade duration={200}>
    <Sheet  variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
            <FormControl>
<RadioGroup defaultValue="1" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Radio value="1" label="Disable" color="primary" defaultChecked/>
        </Grid>
        <Grid xs={3}>
        <Radio value="2" label="WISP" color="primary"  />
        </Grid>
        <Grid xs={3}>
        <Radio value="3" label="Universal Repeater" color="primary"  />
        </Grid>
        <Grid xs={3}>
        <Radio value="4" label="AP Mode" color="primary"  />
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
    </Sheet>
    </Fade>
    }
    </>
  );
}