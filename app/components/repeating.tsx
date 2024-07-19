"use client"
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Grid from '@mui/joy/Grid';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import { useEffect, useState } from 'react';
import Fade from "react-reveal/Fade";
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from "@mui/joy/Typography";
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
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={3}>
                <Typography level="body-lg">Base Station WiFi Name
                </Typography>
              </Grid>
              <Grid xs={3}>
              <Input defaultValue="GURCHARANAM" variant="outlined" />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={3}>
                <Typography level="body-lg">      WiFi Password</Typography>
              </Grid>
              <Grid xs={3}>
              <Input placeholder="Password of the base station WiFi" variant="outlined" />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={3}>
                <Typography level="body-lg">Connection Status</Typography>
              </Grid>
              <Grid xs={3}>
                <Typography sx={{ color: "#f44336" }} level="body-lg">
                Disconnect
                </Typography>
              </Grid>
            </Grid>
            
    </Sheet>



    <FormControl>
    <RadioGroup defaultValue="1" name="radio-buttons-group">
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",  }}>
      <LinearProgress variant="solid" sx={{mb:2}}/>
     <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     Select
       </Grid>
       <Grid xs={2}>
       WiFi Name
       </Grid>
       <Grid xs={2}>
       MAC Address
       </Grid>
       <Grid xs={1}>
       Channel
       </Grid>
       <Grid xs={2}>
       Security Mode
       </Grid>
       <Grid xs={2}>
       Signal Strength
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="1" color="primary" />
       </Grid>
       <Grid xs={2}>
       GURCHARANAM
       </Grid>
       <Grid xs={2}>
       B4:A7:C6:CC:A2:05
       </Grid>
       <Grid xs={1}>
     	9
       </Grid>
       <Grid xs={2}>
       WPA2/AES
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	100%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="2" color="primary" />
       </Grid>
       <Grid xs={2}>
       Airtel_somy_0014
       </Grid>
       <Grid xs={2}>
       32:4F:75:DE:4E:40
       </Grid>
       <Grid xs={1}>
     	2
       </Grid>
       <Grid xs={2}>
       WPAWPA2/AESTKIP
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	97%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="3" color="primary" />
       </Grid>
       <Grid xs={2}>
       Airtel_somyagupta
       </Grid>
       <Grid xs={2}>
       30:4F:75:EE:4E:40
       </Grid>
       <Grid xs={1}>
     	2
       </Grid>
       <Grid xs={2}>
       WPAWPA2/AESTKIP
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	97%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="4" color="primary" />
       </Grid>
       <Grid xs={2}>
       Vijayapharma
       </Grid>
       <Grid xs={2}>
       64:FB:92:37:AF:61
       </Grid>
       <Grid xs={1}>
     	11
       </Grid>
       <Grid xs={2}>
       WPAWPA2/AES
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	72%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="5" color="primary" />
       </Grid>
       <Grid xs={2}>
       Airtel_dhee_6193
       </Grid>
       <Grid xs={2}>
       E4:66:AB:7B:A1:2A
       </Grid>
       <Grid xs={1}>
     	1
       </Grid>
       <Grid xs={2}>
       WPAWPA2/AESTKIP
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	40%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="6" color="primary" />
       </Grid>
       <Grid xs={2}>
       JioFiber-fepC5
       </Grid>
       <Grid xs={2}>
       F0:ED:B8:AB:48:1F
       </Grid>
       <Grid xs={1}>
     	6
       </Grid>
       <Grid xs={2}>
       WPA2/AES
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	40%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="7" color="primary" />
       </Grid>
       <Grid xs={2}>
       Radinet_Ext
       </Grid>
       <Grid xs={2}>
       0C:F3:46:73:30:A7
       </Grid>
       <Grid xs={1}>
     	6
       </Grid>
       <Grid xs={2}>
       WPA2/AES
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	32%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="8" color="primary" />
       </Grid>
       <Grid xs={2}>
       AirtelXstream
       </Grid>
       <Grid xs={2}>
       E4:FA:C4:3C:D3:BE
       </Grid>
       <Grid xs={1}>
     	11
       </Grid>
       <Grid xs={2}>
       WPAWPA2/AESTKIP
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	24%
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={1}>
     <Radio size="md" value="9" color="primary" />
       </Grid>
       <Grid xs={2}>
       AKG
       </Grid>
       <Grid xs={2}>
       B4:3D:08:61:92:20
       </Grid>
       <Grid xs={1}>
    10
       </Grid>
       <Grid xs={2}>
       WPAWPA2/AESTKIP
       </Grid>
       <Grid xs={2}>
    <WifiRoundedIcon/> 	22%
       </Grid>
       </Grid>
       </Sheet>
       </RadioGroup>
            </FormControl>
    </Fade>
    }
    </>
  );
}