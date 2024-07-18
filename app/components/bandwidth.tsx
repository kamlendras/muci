"use client"
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Input from '@mui/joy/Input';
import Switch from '@mui/joy/Switch'
import Divider from '@mui/joy/Divider';
import Select from '@mui/joy/Select';
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
     <Typography level="body-lg">Attached Devices(8)</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     Device Name
       </Grid>
   
       <Grid xs={2}>
       Download Speed
       </Grid>
       <Grid xs={2}>
       Upload Speed
       </Grid>
       <Grid xs={2}>
       Download Limit
       </Grid>
       <Grid xs={2}>
       Upload Limit
       </Grid>
       <Grid xs={2}>
       Internet Access
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     
<Input defaultValue="Vivo" variant="outlined" />
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">128 KB/s(Web Browsing)</Option>
        <Option value="3">256 KB/s(SD Videos)</Option>
        <Option value="4">512 KB/s(HD Videos)</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">32KB/s</Option>
        <Option value="3">64KB/s</Option>
        <Option value="4">128KB/s</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       Native Device
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     
<Input defaultValue="pixel 8" variant="outlined" />
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">128 KB/s(Web Browsing)</Option>
        <Option value="3">256 KB/s(SD Videos)</Option>
        <Option value="4">512 KB/s(HD Videos)</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">32KB/s</Option>
        <Option value="3">64KB/s</Option>
        <Option value="4">128KB/s</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       Native Device
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     
<Input defaultValue="Mi 10" variant="outlined" />
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">128 KB/s(Web Browsing)</Option>
        <Option value="3">256 KB/s(SD Videos)</Option>
        <Option value="4">512 KB/s(HD Videos)</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">32KB/s</Option>
        <Option value="3">64KB/s</Option>
        <Option value="4">128KB/s</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       Native Device
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     
<Input defaultValue="gentoobox" variant="outlined" />
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">128 KB/s(Web Browsing)</Option>
        <Option value="3">256 KB/s(SD Videos)</Option>
        <Option value="4">512 KB/s(HD Videos)</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">32KB/s</Option>
        <Option value="3">64KB/s</Option>
        <Option value="4">128KB/s</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       Native Device
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     
<Input defaultValue="Galaxy s24" variant="outlined" />
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">128 KB/s(Web Browsing)</Option>
        <Option value="3">256 KB/s(SD Videos)</Option>
        <Option value="4">512 KB/s(HD Videos)</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">32KB/s</Option>
        <Option value="3">64KB/s</Option>
        <Option value="4">128KB/s</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       Native Device
       </Grid>
       </Grid>
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2}>
     
<Input defaultValue="iphone" variant="outlined" />
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       0KB/s
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">128 KB/s(Web Browsing)</Option>
        <Option value="3">256 KB/s(SD Videos)</Option>
        <Option value="4">512 KB/s(HD Videos)</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       <Select defaultValue="1">
        <Option value="1">No Limit</Option>
        <Option value="2">32KB/s</Option>
        <Option value="3">64KB/s</Option>
        <Option value="4">128KB/s</Option>
        <Divider/>
        <Option value="5">Manual(unit: KB/s)</Option>
      </Select>
       </Grid>
       <Grid xs={2}>
       Native Device
       </Grid>
       </Grid>
       
      
    </Sheet>
    




    <Typography level="body-lg">Blocked Devices(0)</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={4}>
     Device Name
       </Grid>
   
       <Grid xs={4}>
       MAC Address
       </Grid>
       <Grid xs={4}>
       Action
       </Grid>
       
       </Grid>
       <Divider />
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
       <Grid xs={2}>
       No device
       </Grid>
   
       
       </Grid>
       </Sheet>
       </Fade>
}
    </>
  );
}