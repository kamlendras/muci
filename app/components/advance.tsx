"use client"
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import { useEffect, useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Fade from "react-reveal/Fade";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import LinearProgress from '@mui/joy/LinearProgress';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
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
       <Typography level="body-lg">Static IP</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={3}>
IP Address
       </Grid>
   
       <Grid xs={3}>
       MAC Address
       </Grid>
       <Grid xs={3}>
     	Remark
       </Grid>
       <Grid xs={3}>
    Action
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
       <Grid xs={3}>
       <Input  variant="outlined" />
       </Grid>
       <Grid xs={3}>
       <Input  variant="outlined" />
       </Grid>
       <Grid xs={3}>
       <Input  variant="outlined" />
       </Grid>
       <Grid xs={3}>
       <AddCircleRoundedIcon />
       </Grid>
       
       
       </Grid>
       </Sheet>
       <Typography level="body-lg">Port Forwarding</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
     <Grid xs={2.4}>
     Internal IP
       </Grid>
   
       <Grid xs={2.4}>
       Internal Port
       </Grid>
       <Grid xs={2.4}>
       External Port
       </Grid>
       <Grid xs={2.4}>
       Protocol
       </Grid>
       <Grid xs={2.4}>
       Action
       </Grid>
       </Grid>
       <Divider />
       <Grid container spacing={2} sx={{ flexGrow: 1 }}>
       <Grid xs={2.4}>
       <Input  variant="outlined" />
       </Grid>
       <Grid xs={2.4}>
       <Select defaultValue="1">
        <Option value="1">21 (FTP)</Option>
        <Option value="2">23 (TELNET)</Option>
        <Option value="3">25 (SMTP)</Option>
        <Option value="4">53 (DNS)</Option>
        <Option value="5">88 (HTTP)</Option>
        <Option value="4">3389 (Remote Desktop)</Option>
        <Option value="4">9000</Option>
        <Divider/>
        <Option value="5">Manual</Option>
      </Select>
       </Grid>
       <Grid xs={2.4}>
       <Input  variant="outlined" />
       </Grid>
       <Grid xs={2.4}>
       <Select defaultValue="1">
        <Option value="1">Both</Option>
        <Option value="2">TCP</Option>
        <Option value="3">UDP</Option>
    
      </Select>
      </Grid>
       <Grid xs={2.4}>
       <AddCircleRoundedIcon />
       </Grid>
       
       
       </Grid>
       </Sheet>

       <Typography level="body-sm">DDNS</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">DDNS</Typography>
             </Grid>
      
             <Grid xs={6}>
             <FormControl>
    
      <RadioGroup defaultValue="n" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={4}>
        <Radio value="y" label="Enable" color="primary" />
        </Grid>
        <Grid xs={4}>
        <Radio value="n" label="Disable" color="primary" defaultChecked/>
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>

       </Grid>
      </Grid>
    </Sheet>
    <Typography level="body-sm">DMZ Host</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">DMZ Host</Typography>
             </Grid>
      
             <Grid xs={6}>
             <FormControl>
    
      <RadioGroup defaultValue="n" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={4}>
        <Radio value="y" label="Enable" color="primary" />
        </Grid>
        <Grid xs={4}>
        <Radio value="n" label="Disable" color="primary" defaultChecked/>
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>

       </Grid>
      </Grid>
    </Sheet>
    <Typography level="body-sm">UPNP</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">UPNP</Typography>
             </Grid>
      
             <Grid xs={6}>
             <FormControl>
    
      <RadioGroup defaultValue="y" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={4}>
        <Radio value="y" label="Enable" color="primary" />
        </Grid>
        <Grid xs={4}>
        <Radio value="n" label="Disable" color="primary" defaultChecked/>
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>

       </Grid>
      </Grid>
    </Sheet>
    </Fade>
}
    </>
  );
}