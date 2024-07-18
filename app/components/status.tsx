"use client";
import Sheet from "@mui/joy/Sheet";
import DevicesIcon from "@mui/icons-material/Devices";
import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import RouterIcon from "@mui/icons-material/Router";
import LanguageIcon from "@mui/icons-material/Language";
import LinearProgress from "@mui/joy/LinearProgress";
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import Grid from "@mui/joy/Grid";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
export default function Home() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 300);
  });
  return (
    <>
      {loading ? (
        <LinearProgress variant="solid" />
      ) : (
        <Fade duration={200}>
          <Typography level="body-sm">Internet Connection Status</Typography>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{
              p: 2,
              borderRadius: "lg",
              // boxShadow: "xl",
            }}
          >
            <Stepper
              // size="lg"
              sx={{
                width: "100%",
                "--StepIndicator-size": "9rem",
                "--Step-connectorInset": "0px",
                [`& .${stepIndicatorClasses.root}`]: {
                  borderWidth: 4,
                },
                [`& .${stepClasses.root}::after`]: {
                  height: 4,
                },
                [`& .${stepClasses.completed}`]: {
                  [`& .${stepIndicatorClasses.root}`]: {
                    borderColor: "primary.300",
                    color: "primary.300",
                  },
                  "&::after": {
                    bgcolor: "primary.300",
                  },
                },
                [`& .${stepClasses.active}`]: {
                  [`& .${stepIndicatorClasses.root}`]: {
                    borderColor: "currentColor",
                  },
                },
                [`& .${stepClasses.disabled} *`]: {
                  color: "neutral.outlinedDisabledColor",
                },
              }}
            >
              <Step
                orientation="vertical"
                indicator={
                  <StepIndicator variant="plain" color="neutral">
                    {/* <DevicesIcon/> */}
                    <img
                      src="devices.svg"
                      alt="devices"
                      width="160"
                      height="160"
                    />
                  </StepIndicator>
                }
              >
                Devices
              </Step>
              <Step
                orientation="vertical"
                indicator={
                  <StepIndicator variant="plain">
                    <img
                      src="router.svg"
                      alt="devices"
                      width="140"
                      height="140"
                    />
                  </StepIndicator>
                }
              >
                Router
              </Step>
              <Step
                orientation="vertical"
                indicator={
                  <StepIndicator variant="plain">
                    <img
                      src="internet.svg"
                      alt="devices"
                      width="100"
                      height="100"
                    />
                  </StepIndicator>
                }
              >
                Internet
              </Step>
            </Stepper>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={3}>
                <Typography level="body-lg">Connection Status</Typography>
              </Grid>
              <Grid xs={3}>
                <Typography sx={{ color: "#4caf50" }} level="body-lg">
                  You can surf the Internet
                </Typography>
              </Grid>
            </Grid>
          </Sheet>

          <Typography level="body-sm">
            Attached Devices and Real-time Statistics
          </Typography>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{
              p: 2,
              borderRadius: "lg",
              // boxShadow: "xl",
            }}
          >
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={4}>
                <Typography level="h1" sx={{ color: "#2196f3" }}>
                  6
                </Typography>
              </Grid>

              <Grid xs={4}>
                <Typography level="h1" sx={{ color: "#4caf50" }}>
                  7.0
                  <Typography level="body-md" sx={{ color: "#9e9e9e" }}>
                    {" "}
                    KB/s
                  </Typography>
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography level="h1" sx={{ color: "#ff9800" }}>
                  0.0
                  <Typography level="body-md" sx={{ color: "#9e9e9e" }}>
                    {" "}
                    KB/s
                  </Typography>
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Typography level="body-md"><Groups2RoundedIcon  /> Attached Devices</Typography>
              </Grid>

              <Grid xs={4}>
                <Typography level="body-md" ><DownloadRoundedIcon/> Download Speed</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography level="body-md"><FileUploadRoundedIcon/> Upload Speed</Typography>
              </Grid>
            </Grid>
          </Sheet>

          <Typography level="body-sm">System Info</Typography>
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
            {/* <Grid container spacing={2} sx={{ flexGrow: 1 }}> */}
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid md={6} lg={3} >
                <Typography level="body-lg">Connection Type</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Dynamic IP</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">WAN IP</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">192.168.29.230</Typography>
              </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Connection Duration</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">1d 4h 1m 8s</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Subnet Mask</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">255.255.255.0</Typography>
                </Grid>
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">WAN MAC</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">04:95:E6:15:90:F8</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Default Gateway</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">192.168.29.1</Typography>
              </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">LAN IP</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">192.168.0.1</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Preferred DNS Server</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">192.168.29.1</Typography>
              </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Firmware Version</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">v23.05.3</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">Alternative DNS Server</Typography>
              </Grid>
              <Grid md={6} lg={3}>
                <Typography level="body-lg">8.8.8.8</Typography>
              </Grid>
              </Grid>
            {/* </Grid> */}
          </Sheet>
        </Fade>
      )}
    </>
  );
}
