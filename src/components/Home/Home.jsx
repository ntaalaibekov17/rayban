// import React from "react";
// import photo1 from "../assets/images/photo1.jpg";

// const Home = () => {
//   return (
//     <div className="container">
//       <img src={photo1} alt="" />
//     </div>
//   );
// };

// export default Home;

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../Home/Home.css";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="container" maxWidth="lg">
        <Box sx={{ bg: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}
