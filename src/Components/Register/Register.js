import { Grid, Button, TextField, Paper } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  console.log("hell", show);

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(email);
    console.log(pass);
    console.log(user);
    setShow(true);
  };
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
          <h2 style={{ fontFamily: "initial", fontSize: 20, color: "black" }}>
            Register Page
          </h2>
        </Paper>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          <TextField
            label="Username"
            variant="outlined"
            style={{
              margin: 15,
              width: "60%",
            }}
            onChange={(e) => {
              setUser(e.target.value);
              //   console.log("email", e.target.value);
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            style={{
              margin: 15,
              width: "60%",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              //   console.log("email", e.target.value);
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
              //   console.log("pass", e.target.value);
            }}
          />
          <Button
            style={{
              textDecoration: "underLine",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Already have an account? <span>Login here</span>
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            Register
          </Button>
        </Paper>
      </Grid>
    </>
  );
}
