import { Card, CardContent, CardMedia, Grid, Icon } from "@mui/material";
import React from "react";
import "../AboutUs/AboutUs.css";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Aviator from "../assets/images/Aviator.png";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box } from "@mui/system";

const AboutUs = () => {
  return (
    <>
      <Container maxWidth="xl" className="prescription">
        <div className="cript">
          <h1 className="type">FOR AN AUTHENTIC LOOK</h1>
          <h2 className="type">CHOOSE RAY-BAN</h2>
          <h3 className="type">PRESCRIPTION LENSES</h3>
        </div>
      </Container>
      <Typography
        variant="h6"
        display="flex"
        justifyContent="center"
        margin="60px"
      >
        Add prescription lenses to sun and optical, now at 50% off.
      </Typography>
      <Grid
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link to="/products">
          <Card
            sx={{
              maxWidth: 335,
              marginBottom: "20px ",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="320"
              image="https://media.ray-ban.com/2020/11PRES/D_PRES2020_eyeglasses.jpg"
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

        <Link to="/products">
          <Card
            sx={{
              maxWidth: 335,
              marginBottom: "20px ",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="320"
              image="https://media.ray-ban.com/2020/11PRES/D_PRES2020_sunglasses.jpg"
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
        <Link to="/products">
          <Card
            sx={{
              maxWidth: 335,
              marginBottom: "20px ",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="320"
              image="data:image/webp;base64,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"
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
      </Grid>

      {/*  */}
      <Container maxWidth="sm" align="center">
        <Typography
          variant="h4"
          margin="55px"
          display="flex"
          justifyContent="center"
          fontWeight="bold"
        >
          HOW IT WORKS
        </Typography>
        <Typography
          variant="h4"
          margin="35px"
          display="flex"
          justifyContent="center"
        >
          STEP 1
        </Typography>
        <Typography
          variant="h7"
          margin="35px"
          display="flex"
          justifyContent="center"
          fontWeight="bold"
        >
          Checkout with your complete pair
        </Typography>
        <Typography
          variant="h7"
          margin="35px"
          display="flex"
          justifyContent="center"
        >
          We’ve designed an experience that intuitively guides you through.
          After selecting your frame, add Single or Progressive lenses to your
          cart. Then upgrade with premium lens treatments. For sunglasses,
          you’ll finish up with the lens color choice.
        </Typography>
        <Box marginTop="100px" marginBottom="100px">
          <ArrowDownwardIcon />
        </Box>
        <Typography
          variant="h4"
          margin="35px"
          display="flex"
          justifyContent="center"
        >
          STEP 2
        </Typography>
        <Typography
          variant="h7"
          margin="35px"
          display="flex"
          justifyContent="center"
          fontWeight="bold"
        >
          Submit your prescription
        </Typography>
        <Typography
          variant="h7"
          margin="35px"
          display="flex"
          justifyContent="center"
        >
          Within 6 days, send us a copy of your prescription for validation. You
          can share a photo or scan via text, email or upload. Our customer care
          team will be in touch if they need additional info.
        </Typography>
        <Typography
          variant="h7"
          display="flex"
          justifyContent="center"
          fontWeight="bold"
          color="red"
        >
          Please note:
        </Typography>
        <Typography
          variant="h7"
          margin="5px"
          display="flex"
          justifyContent="center"
        >
          Your prescription must be valid (not expired).
        </Typography>
      </Container>
    </>
  );
};

export default AboutUs;
