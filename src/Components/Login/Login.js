import { Grid, Button, TextField, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.jfif";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [show, setShow] = useState(false);
  // console.log("hell", show);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email === "sindhu" && pass === "sindhu2001") {
      console.log("hello", email);
      navigate("/Dashboard");
    } else {
      console.log("hii", email);
      setShow(true);
    }
  };

  // const handleSubmit = () => {
  //   console.log(email);
  //   console.log(pass);

  //   setShow(true);
  // };
  return (
    <>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          style={{
            width: "100%",
            textAlign: "left",
            backgroundColor: "DodgerBlue",
          }}
        >
          {/* <img src={logo} /> */}
          <b>
            <h2 style={{ fontFamily: "initial", fontSize: 20, color: "black" }}>
              Login Page
            </h2>
          </b>
        </Paper>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // backgroundImage: "D:demo-appsrcassetslogin.jfif",
          height: "100vh",
        }}
      >
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            flexDirection: "column",
            width: "50%",
            margin: 20,
          }}
        >
          <Avatar
            alt="Sindhu"
            src="https://tse2.mm.bing.net/th?id=OIP._bLuG-dgevWP42ohV3xv3AHaHa&pid=Api&P=0.jpg"
            sx={{ width: 100, height: 100 }}
          />
          {show ? (
            <Alert severity="error">Username & password incorrect</Alert>
          ) : (
            ""
          )}

          <TextField
            label="Email"
            variant="outlined"
            required="text"
            style={{
              margin: 15,
              width: "60%",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("email", e.target.value);
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            style={{
              margin: 15,
              width: "60%",
            }}
            onChange={(e) => {
              setPass(e.target.value);
              console.log("pass", e.target.value);
            }}
          />
          <Typography
            style={{
              textDecoration: "underLine",
            }}
          >
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/Register");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              Register here
            </span>
          </Typography>

          <Button
            variant="contained"
            onClick={
              handleSubmit
              // email === "sindhu" && pass === "sindhu2001"
              //   ? navigate("/Dashboard")
              //   : // : console.log("hii", email)
              //     navigate("/Register")
            }
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </>
  );
}
