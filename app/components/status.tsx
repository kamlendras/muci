import Sheet from '@mui/joy/Sheet';
import DevicesIcon from '@mui/icons-material/Devices';
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import RouterIcon from '@mui/icons-material/Router';
import LanguageIcon from '@mui/icons-material/Language';
import LinearProgress from '@mui/joy/LinearProgress';
export default function Home() {
  return (
    <>
    <LinearProgress size="md" />
    <Typography level="body-sm">Internet Connection Status</Typography>
    <Sheet variant="outlined" color="neutral" sx={{ 
      // p: 2,
     borderRadius: "sm",
    //         boxShadow: "xl",
            
           }}>
<Stepper 
// size="lg"
sx={{
  width: '100%',
  '--StepIndicator-size': '9rem',
  '--Step-connectorInset': '0px',
  [`& .${stepIndicatorClasses.root}`]: {
    borderWidth: 4,
  },
  [`& .${stepClasses.root}::after`]: {
    height: 4,
  },
  [`& .${stepClasses.completed}`]: {
    [`& .${stepIndicatorClasses.root}`]: {
      borderColor: 'primary.300',
      color: 'primary.300',
    },
    '&::after': {
      bgcolor: 'primary.300',
    },
  },
  [`& .${stepClasses.active}`]: {
    [`& .${stepIndicatorClasses.root}`]: {
      borderColor: 'currentColor',
    },
  },
  [`& .${stepClasses.disabled} *`]: {
    color: 'neutral.outlinedDisabledColor',
  },
}}
      >
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator variant="plain" color="neutral">
            <DevicesIcon/>
          </StepIndicator>
        }
      >
        Devices
      </Step>
      <Step
        orientation="vertical"
        indicator={<StepIndicator variant="plain"><RouterIcon/></StepIndicator>}
      >
        Router
      </Step>
      <Step orientation="vertical" indicator={<StepIndicator variant="plain"><LanguageIcon/></StepIndicator>}>
      Internet
      </Step>
    </Stepper>
    </Sheet>

    <Typography level="body-sm">Attached Devices and Real-time Statistics</Typography>
    <Sheet variant="outlined" color="neutral" sx={{ p: 2,
     borderRadius: "sm",
    //         boxShadow: "xl",
            
           }}>
</Sheet>
    </>
  );
}