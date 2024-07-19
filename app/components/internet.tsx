"use client";
import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Fade from "react-reveal/Fade";
import LinearProgress from "@mui/joy/LinearProgress";
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
          <Typography level="body-lg">Connection Type</Typography>
          
            <FormControl>
              <RadioGroup defaultValue="2" name="radio-buttons-group">
              <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg" }}
          >
                <Radio
                  value="1"
                  label="PPPoE"
                  color="primary"
                  defaultChecked
                  size="lg"
                />
                <PPPoE />
                </Sheet>
                <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg",mt:2 }}
          >
                <Radio value="2" label="Dynamic IP" color="primary" size="lg" />

                <DynamicIP />
                </Sheet>
                <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: "lg",mt:2  }}
          >
                <Radio size="lg" value="3" label="Static IP" color="primary" />
           
                <StaticIP />
                </Sheet>
              </RadioGroup>
            </FormControl>
          
        </Fade>
      )}
    </>
  );
}

const PPPoE = () => (
  <>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}></Grid>
      <Grid xs={5}>
        <Typography level="body-sm">
          Select PPPoE if your Internet connection asks for the user name and
          password.
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">User Name</Typography>
      </Grid>

      <Grid xs={4.4}>
        <Textarea
          name="Outlined"
          placeholder="User Name from ISP"
          variant="outlined"
        />
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">Password</Typography>
      </Grid>

      <Grid xs={4.4}>
        <Textarea
          name="Outlined"
          placeholder="Password from ISP"
          variant="outlined"
        />
      </Grid>
    </Grid>
  </>
);

const DynamicIP = () => (
  <>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}></Grid>
      <Grid xs={5}>
        <Typography level="body-sm">
          Select Dynamic IP if your Internet can be auto-connected with no
          account or static IP info set.
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">Connection Status</Typography>
      </Grid>
      <Grid xs={3}>
        <Typography sx={{ color: "#00c853" }} level="body-lg">
          You can surf the Internet
        </Typography>
      </Grid>
    </Grid>
  </>
);

const StaticIP = () => (
  <>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}></Grid>
      <Grid xs={5}>
        <Typography level="body-sm">
          Select Static IP if your Internet connection asks for static IP info.
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">IP Address</Typography>
      </Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">Subnet Mask</Typography>
      </Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" defaultValue={255} />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" defaultValue={255} />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" defaultValue={255} />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" defaultValue={0} />
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">Default Gateway</Typography>
      </Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">Preferred DNS</Typography>
      </Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
    </Grid>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={3}>
        <Typography level="body-lg">Alternative DNS</Typography>
      </Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={0.01}>.</Grid>
      <Grid xs={1}>
        <Textarea name="Outlined" variant="outlined" />
      </Grid>
      <Grid xs={1}>(optional)</Grid>
    </Grid>
  </>
);
