"use client";
import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography from "@mui/joy/Typography";
import LinearProgress from "@mui/joy/LinearProgress";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
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
              <Grid xs={5} sm={5} md={4} xl={3}>
                <Typography level="body-lg" className="nowrap">
                  Connection Status
                </Typography>
              </Grid>
              <Grid xs={7} sm={7} md={8} xl={9}>
                <Typography
                  sx={{ color: "#4caf50" }}
                  level="body-lg"
                  className="nowrap"
                >
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
            }}
          >
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={12} sm={4}>
                <Typography level="h1" sx={{ color: "#2196f3" }}>
                  6
                  <Typography level="body-md">
                    <Grid xs={12} sm={4}>
                      <Typography level="body-md" className="nowrap">
                        <Groups2RoundedIcon /> Attached Devices
                      </Typography>
                    </Grid>
                  </Typography>
                </Typography>
              </Grid>

              <Grid xs={12} sm={4}>
                <Typography level="h1" sx={{ color: "#4caf50" }}>
                  7.0
                  <Typography level="body-md" sx={{ color: "#9e9e9e" }}>
                    {" "}
                    KB/s
                    <Grid xs={12} sm={4}>
                      {" "}
                      <Typography level="body-md" className="nowrap">
                        <DownloadRoundedIcon /> Download Speed
                      </Typography>
                    </Grid>
                  </Typography>
                </Typography>
              </Grid>

              <Grid xs={12} sm={4}>
                <Typography level="h1" sx={{ color: "#ff9800" }}>
                  0.0
                  <Typography level="body-md" sx={{ color: "#9e9e9e" }}>
                    {" "}
                    KB/s
                    <Grid xs={12} sm={4}>
                      {" "}
                      <Typography level="body-md" className="nowrap">
                        <FileUploadRoundedIcon /> Upload Speed
                      </Typography>
                    </Grid>
                  </Typography>
                </Typography>
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
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Connection Type
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Dynamic IP
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  WAN IP
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  192.168.29.230
                </Typography>
              </Grid>

              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Connection Duration
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  1d 4h 1m 8s
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Subnet Mask
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  255.255.255.0
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  WAN MAC
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  04:95:E6:15:90:F8
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Default Gateway
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  192.168.29.1
                </Typography>
              </Grid>

              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  LAN IP
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  192.168.0.1
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Preferred DNS Server
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  192.168.29.1
                </Typography>
              </Grid>

              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Firmware Version
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  v23.05.3
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  Alternative DNS Server
                </Typography>
              </Grid>
              <Grid xs={6} sm={6} md={6} lg={3}>
                <Typography level="body-lg" className="nowrap">
                  8.8.8.8
                </Typography>
              </Grid>
            </Grid>
            {/* </Grid> */}
          </Sheet>
        </Fade>
      )}
    </>
  );
}
