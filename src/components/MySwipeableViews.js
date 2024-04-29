import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Puerto Varas',
    imgPath:
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSj_2a5S0sbVn8U8q76tI8DKK8324OkWhGhE5qo8Lxipogb_Ts2bt6lm2J8aWHn226eunC3-2vp-jg5KZyinQn4rTTnjUrb6tvw-Invvg',
  },
  {
    label: 'Chiloe',
    imgPath:
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTeh5AGPCbZJHqGC8SP2QDwOXC3QJjaI7eElvQoC49DvZv2ruhX6S3VC84vEp7m9jBxB9ZDdUgXqfJIqSaNxs7EuDrDlHrPGZ89Y1XSjg',
  },
  {
    label: 'Hornopirén',
    imgPath:
      'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSqVHyBWQQg6Qr3JjEX5WsMY9OaffRyuW0CJNPrMNSYcEmmd0r4nckh4UIrZ26-yioC8pWORuLWRqybw8-1nY5blb_NUauzTpi3ZjJKySU',
  },
  {
    label: 'Aeropuerto',
    imgPath:
      'https://www.sacyr.com/documents/121856245/121929501/el+tepual_5.jpg/0e520836-b9ef-d5b1-6b6c-c75e783e6698?t=1675350905064',
  },
];


export default function MySwipeableViews() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
      <Container>
      <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  maxWidth: 400,
                  alignSelf: 'stretch',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        alignSelf="center"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Container>
    );
}