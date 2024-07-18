"use client"
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Textarea from '@mui/joy/Textarea';
import Divider from '@mui/joy/Divider';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Checkbox from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { useEffect, useState } from 'react';
import Fade from "react-reveal/Fade";
import LinearProgress from '@mui/joy/LinearProgress';
import { styled } from '@mui/joy';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function Home() {
       const handleClick = async () => {
              await sleep(2000);
            };

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
      <Typography level="body-sm">Login Password</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
<Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">New Password</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" placeholder="Must be numbers and letters" variant="outlined" />
       </Grid>
       
      </Grid>
      
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Repeat New Password</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" placeholder="Repeat New Password" variant="outlined" />
       </Grid>
      </Grid>
    </Sheet>
    <Typography level="body-sm">WAN Parameters</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            // boxShadow: "xl",
            
           }}>
             <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">MTU</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="4" variant="outlined">
        <Option value="1">1400</Option>
        <Option value="2">1450</Option>
        <Option value="3">1480</Option>
        <Option value="4">1492</Option>
     
        <Divider/>
        <Option value="6">Manual</Option>
      </Select>
       </Grid>
       <Typography level="body-sm">Current MTU:1492</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Clone MAC</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">Restore Factory MAC</Option>
        <Option value="2">Manual</Option>
      </Select>
       </Grid>
       <Typography level="body-sm">
       Factory MAC: 04:95:E6:15:90:F8</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">WAN Speed</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">Auto</Option>
        <Option value="2">100M Full Duplex</Option>
        <Option value="3">100M Half Duplex</Option>
        <Option value="4">10M Full Duplex</Option>
        <Option value="5">10M Half Duplex</Option>
      </Select>
       </Grid>
       <Typography level="body-sm">Current Speed:100M Full Duplex</Typography>
      </Grid>
    </Sheet>
    <Typography level="body-sm">LAN Parameters</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
<Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">LAN IP</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" defaultValue="192.168.0.1" variant="outlined" />
       </Grid>
       
      </Grid>
      
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Subnet Mask</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" defaultValue="255.255.255.0" variant="outlined" />
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">DHCP Server</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Checkbox label="Enable" variant="solid"  defaultChecked/>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Start IP</Typography>

             </Grid>
             <Grid container spacing={0} sx={{ flexGrow: 1 }}>
             <Typography level="body-lg">192.168.0.</Typography> 
             <Grid xs={1}>
             <Input defaultValue="100" variant="outlined" />
       </Grid>
       </Grid>

      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">End IP</Typography>

             </Grid>
             <Grid container spacing={0} sx={{ flexGrow: 1 }}>
             <Typography level="body-lg">192.168.0.</Typography> 
             <Grid xs={1}>
             <Input defaultValue="200" variant="outlined" />
       </Grid>
       </Grid>

      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Preferred DNS Server</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" defaultValue="192.168.0.1" variant="outlined" />
       </Grid>
       
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Alternative DNS Server</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Textarea name="Outlined" defaultValue="8.8.8.8" variant="outlined" />
       </Grid>
       
      </Grid>
    </Sheet>
    <Typography level="body-sm">Remote Web Management</Typography>
    <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
<Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Remote Management</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Checkbox label="Enable" variant="solid"  defaultChecked/>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Allow Internet User(s)</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="1" variant="outlined">
        <Option value="1">Anyone</Option>
        <Option value="2">Custom</Option>
      </Select>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Port NO.</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             <Textarea name="Outlined" defaultValue="8080" variant="outlined" />
       </Grid>
       
      </Grid>
           </Sheet>
           <Typography level="body-sm">Date & Time</Typography>
           <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
           <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Time Zone</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Select defaultValue="49" variant="outlined">
 
       <Option value="0">(GMT-12:00)West of International Date Line</Option>
          <Option value="1">(GMT-11:00)Midway Island, Samoa</Option>
          <Option value="2">(GMT-10:00)Hawaii, Honolulu</Option>
          <Option value="3">(GMT-09:00)Alaska</Option>
          <Option value="4">(GMT-08:00)Pacific Time</Option>
          <Option value="5">(GMT-07:00)Mountain Time</Option>
          <Option value="6">(GMT-07:00)Chihuahua, La Paz, Mazatlan</Option>
          <Option value="7">(GMT-07:00)Arizona</Option>
          <Option value="8">(GMT-06:00)Central Time</Option>
          <Option value="9">(GMT-06:00)Guadalajara, Mexico City, Monterrey</Option>
          <Option value="10">(GMT-05:00)Eastern Time</Option>
          <Option value="11">(GMT-05:00)Indiana</Option>
          <Option value="12">(GMT-05:00)Bogota, Lima, Quito</Option>
          <Option value="13">(GMT-04:30)Caracas, La Paz</Option>
          <Option value="14">(GMT-04:00)Atlantic Time</Option>
          <Option value="15">(GMT-04:00)Manaus</Option>
          <Option value="16">(GMT-03:30)Newfoundland and Labrador</Option>
          <Option value="17">(GMT-03:00)Brasilia Asia</Option>
          <Option value="18">(GMT-03:00)Greenland</Option>
          <Option value="19">(GMT-03:00)Buenos Aires, Georgetown</Option>
          <Option value="20">(GMT-02:00)Atlantic</Option>
          <Option value="21">(GMT-01:00)Azores</Option>
          <Option value="22">(GMT-01:00)Cape Verde Islands</Option>
          <Option value="23">(GMT)Greenwich Mean Time</Option>
          <Option value="24">(GMT)Casablanca , Monrovia</Option>
          <Option value="25">(GMT+01:00)Belgrade, Bratislava, Budapest, Ljubljana, Prague</Option>
          <Option value="26">(GMT+01:00)Sarajevo, Skopje, Warsaw, Zagreb</Option>
          <Option value="27">(GMT+01:00)Brussels, Copenhagen, Madrid, Paris</Option>
          <Option value="28">(GMT+01:00)West Africa</Option>
          <Option value="29">(GMT+01:00)Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</Option>
          <Option value="30">(GMT+02:00)Athens, Bucharest, Istanbul</Option>
          <Option value="31">(GMT+02:00)Minsk</Option>
          <Option value="32">(GMT+02:00)Cairo</Option>
          <Option value="33">(GMT+02:00)Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</Option>
          <Option value="34">(GMT+02:00)Jerusalem</Option>
          <Option value="35">(GMT+02:00)Windhoek</Option>
          <Option value="36">(GMT+02:00)Harare, Pretoria</Option>
          <Option value="37">(GMT+03:00)Moscow, St. Petersburg, Volgograd</Option>
          <Option value="38">(GMT+03:00)Kuwait, Riyadh</Option>
          <Option value="39">(GMT+03:00)Baghdad</Option>
          <Option value="40">(GMT+03:00)Nairobi</Option>
          <Option value="41">(GMT+03:30)Tehran</Option>
          <Option value="42">(GMT+04:00)Abu Dhabi, Muscat</Option>
          <Option value="43">(GMT+04:00)Baku</Option>
          <Option value="44">(GMT+04:00)Yerevan</Option>
          <Option value="45">(GMT+04:00)Tbilisi</Option>
          <Option value="46">(GMT+04:30)Kabul</Option>
          <Option value="47">(GMT+05:00)Islamabad, Karachi, Tashkent</Option>
          <Option value="48">(GMT+05:00)Yekaterinburg</Option>
          <Option value="49">(GMT+05:30)Chennai, Kolkata, Mumbai, New Delhi</Option>
          <Option value="50">(GMT+05:45)Kathmandu</Option>
          <Option value="51">(GMT+06:00)Astana, Dhaka</Option>
          <Option value="52">(GMT+06:00)Almaty, Novosibirsk</Option>
          <Option value="53">(GMT+06:00)Colombo</Option>
          <Option value="54">(GMT+06:30)Yangon</Option>
          <Option value="55">(GMT+07:00)Krasnoyarsk</Option>
          <Option value="56">(GMT+07:00)Bangkok, Hanoi, Jakarta</Option>
          <Option value="57">(GMT+08:00)Beijing, Chongqing, Hong Kong, Urumqi</Option>
          <Option value="58">(GMT+08:00)Irkutsk grams, Ulaanbaatar</Option>
          <Option value="59">(GMT+08:00)Kuala Lumpur, Singapore</Option>
          <Option value="60">(GMT+08:00)Perth</Option>
          <Option value="61">(GMT+09:00)Yakutsk</Option>
          <Option value="62">(GMT+09:00)Osaka, Sapporo, Tokyo</Option>
          <Option value="63">(GMT+09:00)Seoul</Option>
          <Option value="64">(GMT+09:30)Darwin</Option>
          <Option value="65">(GMT+09:30)Adelaide</Option>
          <Option value="66">(GMT+10:00)Brisbane</Option>
          <Option value="67">(GMT+10:00)Canberra, Melbourne Sydney</Option>
          <Option value="68">(GMT+10:00)Guam, Port Moresby</Option>
          <Option value="69">(GMT+10:00)Vladivostok</Option>
          <Option value="70">(GMT+10:00)Hobart</Option>
          <Option value="71">(GMT+11:00)Magadan, Solomon Islands, New Caledonia and more</Option>
          <Option value="72">(GMT+12:00)Fiji Islands, Kamchatka Peninsula, the Marshall Islands</Option>
          <Option value="73">(GMT+12:00)Auckland , Wellington</Option>
          <Option value="74">(GMT+13:00)Nuku'alofa</Option>
        
       
      </Select>
       </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Current Time</Typography>
             </Grid>
      
             <Grid xs={5}>
             2024-07-18 08:11:21
       </Grid>
       <Typography level="body-sm">Current date and time has synced with the Internet.</Typography>
      </Grid>
    
      </Sheet>
      <Typography level="body-sm">Device Management</Typography>

      <Sheet variant="soft" color="neutral" sx={{ p: 2,
     borderRadius: "lg",
            
           }}>
 <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Reboot Router</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             {/* <Button
  disabled={false}
  loading={false}
  onClick={function(){}}
  size="lg"
  variant="solid"
  fullWidth
>Reboot</Button> */}
<AsyncLoadingButton onClick={handleClick}>
Reboot
      </AsyncLoadingButton>
       </Grid>
       
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Reset to Factory Defaults</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             <AsyncLoadingButton onClick={handleClick}>
Reset
      </AsyncLoadingButton>
       </Grid>
       
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Backup a Configuration File</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             <AsyncLoadingButton onClick={handleClick}>
Backup
      </AsyncLoadingButton>
       </Grid>
       
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Restore a Configuration File</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             <Button

disabled={false}
loading={false}
component="label"
    role={undefined}
    tabIndex={-1}
size="lg"
variant="solid"
fullWidth


>Restore
<VisuallyHiddenInput type="file" />
</Button>
       </Grid>
       
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Export Syslog</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             <AsyncLoadingButton onClick={handleClick}>
Export
      </AsyncLoadingButton>
       </Grid>
       
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Firmware Upgrade</Typography>
             </Grid>
      
             <Grid xs={1.5}>
             <Button

  disabled={false}
  loading={false}
  component="label"
      role={undefined}
      tabIndex={-1}
  size="lg"
  variant="solid"
  fullWidth

 
>Browse
<VisuallyHiddenInput type="file" />
</Button>
       </Grid>
       <Typography level="body-sm">Current Firmware Version:v23.05.3</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
             <Grid xs={3}>
             <Typography level="body-lg">Sys Auto Maintenance</Typography>
             </Grid>
      
             <Grid xs={5}>
             <Checkbox label="Enable" variant="solid"  defaultChecked/>
       <Typography level="body-sm">During 03:00~05:00 (a.m.) each day,if no one is using the router, the router will auto-reboot.</Typography>
       </Grid>
      </Grid>
      </Sheet>
      </Fade>
    }
    </>
  );
}

const AsyncLoadingButton = ({ onClick, disabled, loading, ...props }) => {
       const [isLoading, setIsLoading] = useState(false);
     
       const handleClick = async () => {
         setIsLoading(true);
         await onClick?.();
         setIsLoading(false);
       };
     
       return (
         <Button
         size='lg'
         fullWidth
           loading={isLoading || loading}
           disabled={disabled || isLoading}
           onClick={handleClick}
           {...props}
         />
       );
     };
     
     const sleep = (ms) => {
       return new Promise((resolve) => setTimeout(resolve, ms));
     };