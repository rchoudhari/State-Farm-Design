import React from "react";
import AppBar from "@material-ui/core/AppBar";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import post1 from "./printing.md";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {""}
      <Link color="inherit" href="https://material-ui.com/">
        Our Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  button: {
    background: "#2E3B55"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const sidebar = {
  title: "About",
  description:
    "CodingMouse is a website created by NCHS students with the goal of",
  archives: [
    { title: "Getting Started", url: "#" },
    { title: "Lesson 1: Printing", url: "#" },
    { title: "Lesson 2: Primitive Types", url: "#" },
    { title: "Lesson 3: Loops", url: "#" },
    { title: "Lesson 4: Review Games", url: "#" }
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon }
  ]
};

const posts = [post1];

export function routeTo() {
  window.open("http://www.google.com"); //This will open Google in a new
}
export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" style={{ background: "#0c2340" }}>
        <Toolbar variant="dense">
          <Typography variant="h5" className={classes.title}>
            <Link href="/" color="inherit">
              {"CodingMouse"}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Container maxWidth="lg">
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Our footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Created using Material-UI: A popular React UI framework
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
