"use client"
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
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
<RadioGroup defaultValue="2" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
      <Typography level="body-lg">Connection Type</Typography>
      </Grid>
      <Grid xs={3}>
        <Radio value="1" label="PPPoE" color="primary" defaultChecked/>
        </Grid>
        <Grid xs={3}>
        <Radio value="2" label="Dynamic IP" color="primary"  />
        </Grid>
        <Grid xs={3}>
        <Radio value="3" label="Static IP" color="primary"  />
        </Grid>
    
        </Grid>
      </RadioGroup>
    </FormControl>
    <Typography level="body-sm">Select Dynamic IP if your Internet can be auto-connected with no account or static IP info set.</Typography>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
      <Typography level="body-lg">Connection Status</Typography>
      </Grid>
      <Grid xs={3}>
      <Typography sx={{ color: "#00c853" }} level="body-lg">You can surf the Internet</Typography>
        </Grid>
      
    
        </Grid>
    
    </Sheet>
    </Fade>
    }
    </>
  );
}