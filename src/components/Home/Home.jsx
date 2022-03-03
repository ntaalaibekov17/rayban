import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "../Home/Home.css";
import left from "../assets/images/left.jpg";
import right from "../assets/images/right.jpg";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import boy from "../assets/images/boy.jpg";
import Aviator from "../assets/images/Aviator.png";
import Clubmaster from "../assets/images/Clubmaster.png";
import Marshal from "../assets/images/Marshal.png";
import Round from "../assets/images/Round.png";
import girl from "../assets/images/girl.jpg";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Aos from "aos";

import { Link } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: left,
  },
  {
    imgPath: girl,
  },
];

const images2 = [
  {
    imgPath: right,
  },
  {
    imgPath: boy,
  },
];
export default function Home() {
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

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="container" maxWidth="xl">
        <div className="text">
          <h1 className="h1">SUMMER, YOU'RE ON.</h1>
          <p className="p1">Put your Ray-Ban on and play </p>
          <p className="p2">it out with confidence.</p>
          <a target="_blank" href="https://www.ray-ban.com/usa">
            <Button
              sx={{
                backgroundColor: "white",
                color: "black",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              DISCOVER MORE
            </Button>
          </a>
        </div>
      </Container>

      <Container maxWidth="xl">
        <div className="stepper">
          <Box sx={{ maxWidth: 700, flexGrow: 1, marginRight: "4px" }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 25,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
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
                        maxHeight: 300,
                        display: "block",
                        maxWidth: 700,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
          {/* //////////////////////// 22222222222 */}
          <Box sx={{ maxWidth: 700, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 25,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images2.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        maxHeight: 300,
                        display: "block",
                        maxWidth: 700,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
        </div>

        {/* card */}
        <Container maxWidth="xl">
          <Typography
            sx={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
            }}
            variant="h4"
          >
            TO START, THE ICONS
          </Typography>
          <Grid className="cards">
            <Link to="/products">
              <Card sx={{ maxWidth: 345, marginBottom: "20px " }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={Aviator}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    AVIATOR
                  </Typography>
                </CardContent>
              </Card>
            </Link>
            {/* card2 */}
            <Link to="/products">
              <Card sx={{ maxWidth: 335, marginBottom: "20px " }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={Marshal}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    MARSHAL
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            {/* card3 */}
            <Link to="/products">
              <Card sx={{ maxWidth: 335, marginBottom: "20px " }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={Clubmaster}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    CLUBMASTER
                  </Typography>
                </CardContent>
              </Card>
            </Link>

            {/* card4 */}
            <Link to="/products">
              <Card sx={{ maxWidth: 335, marginBottom: "20px " }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={Round}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    ROUND METAL
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Container>

        {/* Photo */}
        <Typography
          variant="h4"
          marginTop="70px"
          marginBottom="20px"
          align="center"
        >
          SPECIAL COLLECTIONS
        </Typography>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <img
              data-aos="fade-up"
              className="bir"
              src="https://www.ray-ban.com/_repository/_resources/homepage/images/uploads/layout2018_Slot/D_HP2018_campaign_titanium_groupage.jpg"
              alt=""
            />
            <Typography marginTop="18px" variant="h5" align="center">
              TITANIUM COLLECTION MADE IN JAPAN
            </Typography>
            <Typography align="center" marginTop="7px" fontSize="2vh">
              Three icons, reborn in a new ultra-light form.
            </Typography>
            <Link to="/products">
              <center>
                <Button
                  sx={{
                    padding: "1.5vh",
                    backgroundColor: "black",
                    color: "white",
                    marginTop: "10px",
                    borderRadius: "7%",
                    marginBottom: "10px",
                  }}
                >
                  SEE THE COLLECTION
                </Button>
              </center>
            </Link>
          </Box>
          {/* 2 */}
          <Box>
            <img
              className="eki"
              src="https://www.ray-ban.com/_repository/_resources/homepage/images/uploads/layout2018_Slot/D_HP2018_special_collections_clubmaster_metal.jpg"
              alt=""
            />
            <Typography marginTop="18px" variant="h5" align="center">
              CLUBMASTER METAL
            </Typography>
            <Typography align="center" marginTop="7px" fontSize="2vh">
              Our big classic has gone metal. And it’s already a must-have.
            </Typography>
            <Link to="/products">
              <center>
                <Button
                  sx={{
                    padding: "1.5vh",
                    backgroundColor: "black",
                    color: "white",
                    marginTop: "10px",
                    borderRadius: "7%",
                    marginBottom: "10px",
                  }}
                >
                  SEE THE COLLECTION
                </Button>
              </center>
            </Link>
          </Box>
        </Container>
      </Container>
    </React.Fragment>
  );
}
