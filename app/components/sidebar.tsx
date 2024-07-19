"use client"
import * as React from 'react';

import SvgIcon from '@mui/joy/SvgIcon';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses }  from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RouterIcon from '@mui/icons-material/Router';
import LanguageIcon from '@mui/icons-material/Language';
import WifiIcon from '@mui/icons-material/Wifi';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CellTowerIcon from '@mui/icons-material/CellTower';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import ConstructionIcon from '@mui/icons-material/Construction';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StatusTab from "./status"
import AdminTab from "./administration"
import BandwidthTab from "./bandwidth"
import ControlTab from "./control"
import InternetTab from "./internet"
import RepeatingTab from "./repeating"
import WirelessTab from "./wireless"
import AdvanceTab from "./advance"
export default function TabsVertical() {

  return (
    <Tabs
    
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{  minHeight: 700 }}
      size="lg"
    >
   
      <TabList
       sx={{
        // pt: 1,
        // justifyContent: 'center',
        [`&& .${tabClasses.root}`]: {
        //   flex: 'initial',
        //   bgcolor: 'transparent',
        //   '&:hover': {
        //     bgcolor: 'transparent',
        //   },
          [`&.${tabClasses.selected}`]: {
            color: 'primary.plainColor',
            '&::after': {
              // height: 40,
              width:5,
              borderRadius: 8,
              // borderTopLeftRadius: 3,
              // borderTopRightRadius: 3,
              bgcolor: 'primary.500',
            },
          },
        },
      }}
      
      
      >
        <Tab><ListItemDecorator>
        <img src="rou.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Status</Tab>
        <Tab><ListItemDecorator>
        <img src="internet2.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Internet Settings</Tab>
        <Tab><ListItemDecorator>
        <img src="wireless.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Wireless Settings</Tab>
        <Tab><ListItemDecorator>
        <img src="bandwidth.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Bandwidth Control</Tab>
        <Tab><ListItemDecorator>
             <img src="rep.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Wireless Repeating</Tab>
        <Tab><ListItemDecorator>
        <img src="control.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Parental Control</Tab>
        <Tab><ListItemDecorator>
        <img src="construction.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Advanced</Tab>
        <Tab><ListItemDecorator>
        <img src="settings.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Administration</Tab>
      </TabList>
      <TabPanel value={0}>
       <StatusTab/>
      </TabPanel>
      <TabPanel value={1}>
      <InternetTab/>
      </TabPanel>
      <TabPanel value={2}>
      <WirelessTab/>
      </TabPanel>
      <TabPanel value={3}>
        <BandwidthTab/>
      </TabPanel>
      <TabPanel value={4}>
      <RepeatingTab/>
      </TabPanel>
      <TabPanel value={5}>
       <ControlTab/>
      </TabPanel>
      <TabPanel value={6}>
     <AdvanceTab/>
      </TabPanel>
      <TabPanel value={7}>
<AdminTab/>
      </TabPanel>
     
    </Tabs>
  
  );
}






 