import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Particles from "react-particles-js";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
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
    padding: theme.spacing(8, 0, 6),
    color: "white"
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
  title: {
    marginRight: theme.spacing(5)
  },
  link: {
    fontWeight: "600",
    color: "#CECECE",
    marginRight: theme.spacing(2),
    "&:hover": {
      color: "inherit",
      background: "inherit"
    }
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F3FAFF",
    "&:hover": {
      boxShadow: "0 5px 10px #9AA0B9, 0 15px 40px #A6ADC9"
    }
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: "#2E3B55",
    padding: theme.spacing(6),
    color: "white"
  }
}));

const cards = [1];

export function routeTo() {
  window.open("http://www.google.com"); //This will open Google in a new
}
export default function Album() {
  const classes = useStyles();

  const button = {
    background: "#2E3B55",
    color: "white"
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Container maxWidth="md">
          <Toolbar>
            <Grid container spacing={10}>
              <Typography variant="h5" className={classes.title}>
                <Link
                  href="/"
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  {"CodingMouse"}
                </Link>
              </Typography>
              <Button className={classes.link}>Lessons</Button>
              <Button className={classes.link}>About Us</Button>
              <Button className={classes.link}>More Info</Button>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Container maxWidth="none" style={{ background: "#f2f9ff" }}>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Name
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                This is where our description will be. I don't think we should
                make this part too long or it will take too much of the screen.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" style={button}>
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map(cards => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    onClick={() => (window.location.href = "/gettingstarted")}
                    style={{ cursor: "pointer" }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/Wv0XRqB.png"
                      title="Getting Started"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Getting Started
                      </Typography>
                      <Typography>
                        What do you need to do to get started with coding in
                        Java at home?
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Open Lesson
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              {cards.map(printing => (
                <Grid item key={printing} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    style={{ cursor: "pointer" }}
                    onClick={() => (window.location.href = "/printing")}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/1YsdrUR.png"
                      title="Printing"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lesson 1: Printing
                      </Typography>
                      <Typography>
                        This lesson will teach you how to print simple text in
                        Java.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        Link
                        href="https://google.com/"
                      >
                        Open lesson
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              {cards.map(cards => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    onClick={() => routeTo()}
                    style={{ cursor: "pointer" }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/gJg6k3L.png"
                      title="Primitive Types"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lesson 2: Primitive Types
                      </Typography>
                      <Typography>
                        This lesson will teach you about primitive types and how
                        they are used in Java.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Open Lesson
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              {cards.map(cards => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    onClick={() => routeTo()}
                    style={{ cursor: "pointer" }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/9dLlxgq.png"
                      title="Loops"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lesson 3: Loops
                      </Typography>
                      <Typography>
                        This lesson will teach you how to use loops in Java.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Open Lesson
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              {cards.map(cards => (
                <Grid item key={cards} xs={12} sm={6} md={4}>
                  <Card
                    className={classes.card}
                    onClick={() => routeTo()}
                    style={{ cursor: "pointer" }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/1RQ7DGI.png"
                      title="Review Games"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lesson 4: Review Games
                      </Typography>
                      <Typography>
                        This lesson will help you create fun games using the
                        knowledge you have learned in previous lessons.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Open Lesson
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
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
          color="white"
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
