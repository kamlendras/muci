import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Stack from '@mui/joy/Stack';
import Option from '@mui/joy/Option';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Fade from "react-reveal/Fade";
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
export default function Home() {

  const [loading,setloading] = useState(true)
  useEffect(()=>{
  setTimeout(( )=>{
    setloading(false)
  },300);
})
  const [checked, setChecked] = React.useState<boolean>(true);
  return (
    <>
 {loading ?    <LinearProgress variant="solid" />  : 
     <Fade duration={200}>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WiFi ON/OFF</Typography>
             </Grid>
      
             <Grid xs={1}>
<Switch
      checked={checked}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
      }
      sx={(theme: Theme) => ({
        '--Switch-thumbShadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
        '--Switch-thumbSize': '27px',
        '--Switch-trackWidth': '51px',
        '--Switch-trackHeight': '31px',
        '--Switch-trackBackground': theme.vars.palette.background.level3,
        [`& .${switchClasses.thumb}`]: {
          transition: 'width 0.2s, left 0.2s',
        },
        '&:hover': {
          '--Switch-trackBackground': theme.vars.palette.background.level3,
        },
        '&:active': {
          '--Switch-thumbWidth': '32px',
        },
        [`&.${switchClasses.checked}`]: {
          '--Switch-trackBackground': '#03a9f4',
          '&:hover': {
            '--Switch-trackBackground': '#03a9f4',
          },
        },
      })}
    />     
       </Grid>
      </Grid>
    </Sheet>
    
    <Typography level="body-sm">WiFi Name and Password</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WiFi Name</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" defaultValue="penguins" variant="outlined" />
       </Grid>
       <Grid xs={1}>
       <Checkbox label="Hide" size="sm" />
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Security Mode</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="4" variant="outlined">
        <Option value="1">None</Option>
        <Option value="2">WPA-PSK</Option>
        <Option value="3">WPA2-PSK</Option>
        <Option value="4">WPA/WPA2-PSK Mixed</Option>
      </Select>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WiFi Password</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" defaultValue="o>3yJ&<!E0/0" variant="outlined" />
       </Grid>
      </Grid>
    </Sheet>
    <Typography level="body-sm">WiFi Schedule</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WiFi Schedule</Typography>
             </Grid>
      
             <Grid xs={6}>
             <FormControl>
    
      <RadioGroup defaultValue="medium" name="radio-buttons-group">
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
    <Typography level="body-sm">WPS</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WPS</Typography>
             </Grid>
      
             <Grid xs={6}>
             <FormControl>
    
      <RadioGroup defaultValue="medium" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={4}>
        <Radio value="y" label="Enable" color="primary" />
        </Grid>
        <Grid xs={4}>
        <Radio value="n" label="Disable" color="primary"  defaultChecked/>
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>

       </Grid>
      </Grid>
    </Sheet>
    <Typography level="body-sm">Wireless Parameters</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Network Option</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">11b/g/n</Option>
        <Option value="2">11b/g</Option>
        <Option value="3">11g</Option>
        <Option value="4">11b</Option>
      </Select>
       </Grid>
     
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Wireless Channel</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">Auto</Option>
        <Option value="2">Channel 1 (2412MHz)</Option>
        <Option value="3">Channel 2 (2417MHz)</Option>
        <Option value="4">Channel 3 (2422MHz)</Option>
        <Option value="5">Channel 4 (2427MHz)</Option>
        <Option value="6">Channel 5 (2432MHz)</Option>
        <Option value="7">Channel 6 (2437MHz)</Option>
        <Option value="8">Channel 7 (2442MHz)</Option>
        <Option value="9">Channel 8 (2447MHz)</Option>
        <Option value="10">Channel 9 (2452MHz)</Option>
        <Option value="11">Channel 10 (2457MHz)</Option>
        <Option value="12">Channel 11 (2462MHz)</Option>
      </Select>
       </Grid>
       <Typography level="body-sm">Current Channel:7</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Channel Width</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">Auto</Option>
        <Option value="2">20MHz</Option>
        <Option value="3">40MHz</Option>
      </Select>
       </Grid>
       <Typography level="body-sm">Current Channel Width:40MHz</Typography>
      </Grid>
    </Sheet>
    </Fade>
    }
    </>
  );
}