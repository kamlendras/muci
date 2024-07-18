import * as React from 'react';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { Theme } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Box from '@mui/joy/Box';
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
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  const onClick2 = () => setShowResults(false)
  const [showWPS, setShowWPS] = React.useState(false)
  const onClick3 = () => setShowWPS(true)
  const onClick4 = () => setShowWPS(false)
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
    
      <RadioGroup defaultValue="n" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={4}>
        <Radio value="y" label="Enable" color="primary" onClick={onClick} />
     
        </Grid>
        <Grid xs={4}>
        <Radio value="n" label="Disable" color="primary" onClick={onClick2} defaultChecked/>
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>

       </Grid>
      </Grid>
       { showResults ? <Results /> : null }
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
    
      <RadioGroup defaultValue="n" name="radio-buttons-group">
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={4}>
        <Radio value="y" label="Enable" color="primary"  onClick={onClick3}/>
        </Grid>
        <Grid xs={4}>
        <Radio value="n" label="Disable" color="primary"  onClick={onClick4} defaultChecked/>
        </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>

       </Grid>
      </Grid>
      { showWPS ? <WPS /> : null }
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

const Results = () => (
 <>
 <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Turn WiFi off during</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Grid container spacing={0} sx={{ flexGrow: 1 }}>
             {/* <Grid xs={3}>
              </Grid> */}
             <Select defaultValue="00" variant="outlined">
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
      <Select defaultValue="07" variant="outlined">
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
      <Checkbox label="Mon" variant="solid"  defaultChecked />
      <Checkbox label="Tue" variant="solid"  defaultChecked/>
      <Checkbox label="Wed" variant="solid"   defaultChecked/>
      <Checkbox label="Thu" variant="solid"   defaultChecked/>
      <Checkbox label="Fri" variant="solid" defaultChecked />
      <Checkbox label="Sat" variant="solid" />
      <Checkbox label="Sun" variant="solid"  />
     
    </Box>
       </Grid>
      </Grid>
      {/* <Grid container spacing={2} sx={{ flexGrow: 1 }}>
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
      </Grid> */}
      
 </>
)


const WPS = () => (
  <>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">PBC</Typography>
             </Grid>
      
             <Grid xs={1}>
             <Button>PBC</Button>
       </Grid>
       <Typography level="body-sm">Click the PBC icon here or press the wps button on the router panel.</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WPS PIN Code</Typography>
             </Grid>
      
             <Grid xs={1}>
             95268231
       </Grid>
       <Typography level="body-sm">If a wireless device requires a PIN code to do WPS PIN, copy the code to it.</Typography>
      </Grid>

  </>
)