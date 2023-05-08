import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  CardActions,
  CardContent,
  Card,
  Grid,
  Paper,
  TextField,
  CardMedia,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import kpr from "../../assets/kpr.svg";
import certilogo from "../../assets/certilogo.svg";
import me from "../../assets/me.svg";
import hobi from "../../assets/hobi.svg";
import { useNavigate } from "react-router-dom";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcCallSharpIcon from "@mui/icons-material/AddIcCallSharp";
import Certificate from "../certifcation/certification";

import { useTheme } from "@mui/material/styles";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  // const settingPage = (e) => {
  //   settings={
  //     if()
  //   }
  // }
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Sindhu"
                    src="https://tse2.mm.bing.net/th?id=OIP._bLuG-dgevWP42ohV3xv3AHaHa&pid=Api&P=0.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid item xs={12} md={6}>
        <center>
          <Card sx={{ width: "50%", margin: 5 }}>
            <img style={{ size: "20px", height: 300 }} src={me} />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                About me
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I am Sindhu S,my age is 21.In my family i am the elder one and i
                have one brother.My mom and dad working in garments.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "50%", margin: 5 }}>
            <img style={{ size: "20px", height: 300 }} src={kpr} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Currently pursing B.E Computer Science final year from KPRIET
                from coimbatore. CGPA:8.5, Graduation :2019-2023.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button
                size="small"
                href="https://www.kpriet.ac.in/"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: "50%", margin: 5 }}>
            <img style={{ size: "20px", height: 300 }} src={certilogo} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Skills and Carrer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learning FullStack development,Beginner of java and sql.Carrer
                at Virtusa as an developer,currently in internship.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  navigate("/certification");
                }}
              >
                Certification
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: "50%", margin: 5 }}>
            <img style={{ size: "20px", height: 300 }} src={hobi} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Hobbies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reading books like fictional,general knowledge and
                historical.One of my fav hobbie is listening musics.And watching
                movies.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://open.spotify.com/user/312qs2pcwhwzhiop4wsndqhwtv24?si=YOKES9X1Qg6XenUQYt5CtQ&utm_source=whatsapp"
              >
                {" "}
                <LibraryMusicIcon />
              </Button>
            </CardActions>
          </Card>
        </center>
      </Grid>
      {/* <Grid container>
        <Grid item xs={12} md={6}>
          <h1>
            <LibraryMusicIcon />
          </h1>
          <h2>
            <LibraryMusicIcon />
          </h2>
        </Grid> */}
      {/* <Grid item xs={12} md={6}>
          <h1>
            <LibraryMusicIcon />
          </h1>
          <h2>
            <LibraryMusicIcon />
          </h2>
        </Grid> */}
      {/* <Grid style={{ color: "blueviolet" }}>
          <Paper style={{ backgroundColor: "blue" }}></Paper>
        </Grid>
      </Grid> */}
    </>
  );
}
export default ResponsiveAppBar;
