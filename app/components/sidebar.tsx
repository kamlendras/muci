"use client";
import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import StatusTab from "./status";
import AdminTab from "./administration";
import BandwidthTab from "./bandwidth";
import ControlTab from "./control";
import InternetTab from "./internet";
import RepeatingTab from "./repeating";
import WirelessTab from "./wireless";
import AdvanceTab from "./advance";
export default function TabsVertical() {
  return (
    <Tabs 
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minHeight: 700 }}
      size="lg"
    >
      <TabList
        sx={{
          [`&& .${tabClasses.root}`]: {
            [`&.${tabClasses.selected}`]: {
              color: "primary.plainColor",
              "&::after": {
                width: 5,
                borderRadius: 8,
                bgcolor: "primary.500",
              },
            },
          },
        }}
      >
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="rou.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          <span className="nav_title">Status</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="internet2.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          <span className="nav_title"> Internet Settings</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="wireless.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          <span className="nav_title">Wireless Settings</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="bandwidth.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          <span className="nav_title">Bandwidth Control</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="rep.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
         <span className="nav_title"> Wireless Repeating</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="control.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
       <span className="nav_title">   Parental Control</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="construction.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
       <span className="nav_title">   Advanced</span>
        </Tab>
        <Tab className="nowrap">
          <ListItemDecorator>
            <img src="settings.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
        <span className="nav_title">  Administration</span>
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <StatusTab />
      </TabPanel>
      <TabPanel value={1}>
        <InternetTab />
      </TabPanel>
      <TabPanel value={2}>
        <WirelessTab />
      </TabPanel>
      <TabPanel value={3}>
        <BandwidthTab />
      </TabPanel>
      <TabPanel value={4}>
        <RepeatingTab />
      </TabPanel>
      <TabPanel value={5}>
        <ControlTab />
      </TabPanel>
      <TabPanel value={6}>
        <AdvanceTab />
      </TabPanel>
      <TabPanel value={7}>
        <AdminTab />
      </TabPanel>
    </Tabs>
  );
}
