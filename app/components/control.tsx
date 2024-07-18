"use client"
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import Switch from '@mui/joy/Switch'
import Input from '@mui/joy/Input';
import Divider from '@mui/joy/Divider';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';
import Option from '@mui/joy/Option';
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
     <Typography level="body-sm">Attached Devices</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",  }}>
     <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     Device Name
       </Grid>
       <Grid xs={3}>
       IP Address
       </Grid>
       <Grid xs={3}>
       Online Duration
       </Grid>
       <Grid xs={3}>
       Manage
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     
<Input defaultValue="Vivo" variant="outlined" />
       </Grid>
       <Grid xs={3}>
       192.168.0.135
       </Grid>
       <Grid xs={3}>
       52m 22s
       </Grid>
       <Grid xs={3}>
       <Switch />
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     
<Input defaultValue="pixel 8" variant="outlined" />
       </Grid>
       <Grid xs={3}>
       192.168.0.134
       </Grid>
       <Grid xs={3}>
       9m 28s
       </Grid>
       <Grid xs={3}>
       <Switch />
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     
<Input defaultValue="Mi 10" variant="outlined" />
       </Grid>
       <Grid xs={3}>
       192.168.0.174
       </Grid>
       <Grid xs={3}>
       15m 19s
       </Grid>
       <Grid xs={3}>
       <Switch />
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     
<Input defaultValue="gentoobox" variant="outlined" />
       </Grid>
       <Grid xs={3}>
       192.168.0.176
       </Grid>
       <Grid xs={3}>
       31m 16s
       </Grid>
       <Grid xs={3}>
       <Switch />
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     
<Input defaultValue="Galaxy s24" variant="outlined" />
       </Grid>
       <Grid xs={3}>
       192.168.0.134
       </Grid>
       <Grid xs={3}>
       17m 52s
       </Grid>
       <Grid xs={3}>
       <Switch />
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
     
<Input defaultValue="iphone" variant="outlined" />
       </Grid>
       <Grid xs={3}>
       192.168.0.189
       </Grid>
       <Grid xs={3}>
       46m 31s
       </Grid>
       <Grid xs={3}>
       <Switch />
       </Grid>
       </Grid>
    </Sheet>
    <Typography level="body-sm">Access Restrictions</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",  }}>
      <Typography level="body-sm">Settings below will be applied to all managed devices</Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Allow access during</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Grid container spacing={0} sx={{ flexGrow: 1 }}>
             {/* <Grid xs={3}>
              </Grid> */}
             <Select defaultValue="19" variant="outlined">
             <Option value="00">00</Option>
        <Option value="01">01</Option>
        <Option value="02">02</Option>
        <Option value="03">03</Option>
        <Option value="04">04</Option>
        <Option value="05">05</Option>
        <Option value="06">06</Option>
        <Option value="07">07</Option>
        <Option value="08">08</Option>
        <Option value="09">09</Option>
        <Option value="10">10</Option>
        <Option value="11">11</Option>
        <Option value="12">12</Option>
        <Option value="13">13</Option>
        <Option value="14">14</Option>
        <Option value="15">15</Option>
        <Option value="16">16</Option>
        <Option value="17">17</Option>
        <Option value="18">18</Option>
        <Option value="19">19</Option>
        <Option value="20">20</Option>
        <Option value="21">21</Option>
        <Option value="22">22</Option>
        <Option value="23">23</Option>
      </Select>
      <Typography sx={{m:0.5}} level="body-lg"> : </Typography>
      <Select defaultValue="00" variant="outlined">
        <Option value="00">00</Option>
        <Option value="05">05</Option>
        <Option value="10">10</Option>
        <Option value="15">15</Option>
        <Option value="20">20</Option>
        <Option value="25">25</Option>
        <Option value="30">30</Option>
        <Option value="35">35</Option>
        <Option value="40">40</Option>
        <Option value="45">45</Option>
        <Option value="50">50</Option>
        <Option value="55">55</Option>
        
        
      </Select>
      <Typography  sx={{m:0.5}} level="body-lg">~</Typography>
      <Select defaultValue="21" variant="outlined">
             <Option value="00">00</Option>
        <Option value="01">01</Option>
        <Option value="02">02</Option>
        <Option value="03">03</Option>
        <Option value="04">04</Option>
        <Option value="05">05</Option>
        <Option value="06">06</Option>
        <Option value="07">07</Option>
        <Option value="08">08</Option>
        <Option value="09">09</Option>
        <Option value="10">10</Option>
        <Option value="11">11</Option>
        <Option value="12">12</Option>
        <Option value="13">13</Option>
        <Option value="14">14</Option>
        <Option value="15">15</Option>
        <Option value="16">16</Option>
        <Option value="17">17</Option>
        <Option value="18">18</Option>
        <Option value="19">19</Option>
        <Option value="20">20</Option>
        <Option value="21">21</Option>
        <Option value="22">22</Option>
        <Option value="23">23</Option>
      </Select>
      <Typography  sx={{m:0.5}} level="body-lg">:</Typography>
      <Select defaultValue="00" variant="outlined">
        <Option value="00">00</Option>
        <Option value="05">05</Option>
        <Option value="10">10</Option>
        <Option value="15">15</Option>
        <Option value="20">20</Option>
        <Option value="25">25</Option>
        <Option value="30">30</Option>
        <Option value="35">35</Option>
        <Option value="40">40</Option>
        <Option value="45">45</Option>
        <Option value="50">50</Option>
        <Option value="55">55</Option>
        
        
      </Select>
      </Grid>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Repeat</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Box sx={{ display: 'flex', gap: 3 }}>
      <Checkbox label="Everyday" variant="solid"  />
      <Checkbox label="Mon" variant="solid"  />
      <Checkbox label="Tue" variant="solid" />
      <Checkbox label="Wed" variant="solid"  />
      <Checkbox label="Thu" variant="solid"  />
      <Checkbox label="Fri" variant="solid" defaultChecked />
      <Checkbox label="Sat" variant="solid" defaultChecked />
      <Checkbox label="Sun" variant="solid"  />
     
    </Box>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Website Restrictions</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">Disable</Option>
        <Option value="2">Only Permit</Option>
        <Option value="3">Only Forbit</Option>
      </Select>
       </Grid>
      </Grid>
      </Sheet>
      </Fade>
    }
    </>
  );
}