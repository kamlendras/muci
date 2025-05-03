"use client";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Grid from "@mui/joy/Grid";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
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
          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
            <FormControl>
              <RadioGroup defaultValue="1" name="radio-buttons-group">
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                  <Grid xs={12} lg={3}>
                    <Radio
                      value="1"
                      label="Disable"
                      color="primary"
                      defaultChecked
                    />
                  </Grid>
                  <Grid xs={12} lg={3}>
                    <Radio value="2" label="WISP" color="primary" />
                  </Grid>
                  <Grid xs={12} lg={3}>
                    <Radio
                      value="3"
                      label="Universal Repeater"
                      color="primary"
                    />
                  </Grid>
                  <Grid xs={12} lg={3}>
                    <Radio value="4" label="AP Mode" color="primary" />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={12} lg={3}>
                <Typography level="body-lg">Base Station WiFi Name</Typography>
              </Grid>
              <Grid xs={12} lg={4}>
                <Input defaultValue="GURCHARANAM" variant="outlined" />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={12} lg={3}>
                <Typography level="body-lg"> WiFi Password</Typography>
              </Grid>
              <Grid xs={12} lg={4}>
                <Input
                  placeholder="Password of the base station WiFi"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={12} lg={3}>
                <Typography level="body-lg">Connection Status</Typography>
              </Grid>
              <Grid xs={12} lg={4}>
                <Typography sx={{ color: "#f44336" }} level="body-lg">
                  Disconnect
                </Typography>
              </Grid>
            </Grid>
          </Sheet>

          <FormControl>
            <RadioGroup defaultValue="1" name="radio-buttons-group">
              <Sheet
                variant="soft"
                color="neutral"
                sx={{ p: 2, borderRadius: "lg" }}
              >
                <LinearProgress variant="solid" sx={{ mb: 2 }} />
                <table>
                  <tr>
                    <th>Select</th>
                    <th>WiFi Name</th>
                    <th>MAC Address</th>
                    <th>Channel</th>
                    <th>Security Mode</th>
                    <th>Signal Strength</th>
                  </tr>
                  <Divider />

                  <tr>
                    <td>
                      <Radio size="lg" value="1" color="primary" />
                    </td>
                    <td>GURCHARANAM</td>
                    <td>B4:A7:C6:CC:A2:05</td>
                    <td>9</td>
                    <td>WPA2/AES</td>
                    <td>
                      <WifiRoundedIcon /> 100%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Radio size="lg" value="2" color="primary" />
                    </td>
                    <td>Airtel_somy_0014</td>
                    <td>32:4F:75:DE:4E:40</td>
                    <td>2</td>
                    <td>WPAWPA2/AESTKIP</td>
                    <td>
                      <WifiRoundedIcon /> 97%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Radio size="lg" value="3" color="primary" />
                    </td>
                    <td>Airtel_somyagupta</td>
                    <td>30:4F:75:EE:4E:40</td>
                    <td>2</td>
                    <td>WPAWPA2/AESTKIP</td>
                    <td>
                      <WifiRoundedIcon /> 97%
                    </td>
                  </tr>
                  <tr>
                    <Grid xs={1}>
                      <Radio size="lg" value="4" color="primary" />
                    </Grid>
                    <td>Vijayapharma</td>
                    <td>64:FB:92:37:AF:61</td>
                    <td>11</td>
                    <td>WPAWPA2/AES</td>
                    <td>
                      <WifiRoundedIcon /> 72%
                    </td>
                  </tr>
                  <tr>
                    <Grid xs={1}>
                      <Radio size="lg" value="5" color="primary" />
                    </Grid>
                    <td>Airtel_dhee_6193</td>
                    <td>E4:66:AB:7B:A1:2A</td>
                    <td>1</td>
                    <td>WPAWPA2/AESTKIP</td>
                    <td>
                      <WifiRoundedIcon /> 40%
                    </td>
                  </tr>
                  <tr>
                    <Grid xs={1}>
                      <Radio size="lg" value="6" color="primary" />
                    </Grid>
                    <td>JioFiber-fepC5</td>
                    <td>F0:ED:B8:AB:48:1F</td>
                    <td>6</td>
                    <td>WPA2/AES</td>
                    <td>
                      <WifiRoundedIcon /> 40%
                    </td>
                  </tr>
                  <tr>
                    <Grid xs={1}>
                      <Radio size="lg" value="7" color="primary" />
                    </Grid>
                    <td>Radinet_Ext</td>
                    <td>0C:F3:46:73:30:A7</td>
                    <td>6</td>
                    <td>WPA2/AES</td>
                    <td>
                      <WifiRoundedIcon /> 32%
                    </td>
                  </tr>
                  <tr>
                    <Grid xs={1}>
                      <Radio size="lg" value="8" color="primary" />
                    </Grid>
                    <td>AirtelXstream</td>
                    <td>E4:FA:C4:3C:D3:BE</td>
                    <td>11</td>
                    <td>WPAWPA2/AESTKIP</td>
                    <td>
                      <WifiRoundedIcon /> 24%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Radio size="lg" value="9" color="primary" />
                    </td>
                    <td>AKG</td>
                    <td>B4:3D:08:61:92:20</td>
                    <td>10</td>
                    <td>WPAWPA2/AESTKIP</td>
                    <td>
                      <WifiRoundedIcon /> 22%
                    </td>
                  </tr>
                </table>
              </Sheet>
            </RadioGroup>
          </FormControl>
        </Fade>
      )}
    </>
  );
}
