import React from "react";
import Login from "./Components/Login/Login.js";
import { Grid } from "@mui/material";
import Register from "./Components/Register/Register.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Certification from "./Components/certifcation/certification.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </BrowserRouter>
        {/* <Grid
          xs={12}
          style={{
            textAlign: "center",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{}}>Login Page</h1>
        </Grid>
        <Register /> */}
      </div>
    </>
  );
}
export default App;
