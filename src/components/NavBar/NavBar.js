import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  whiteBG: {
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 'none',
    [theme.breakpoints.down('xs')]: {
      position: 'fixed'
    },
    [theme.breakpoints.up('sm')]: {
      position: 'static'
    }
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontFamily: ['Gloria Hallelujah', 'cursive'].join(',')
  },
  navlink: {
    cursor: 'pointer',
    color: '#505256',
    textTransform: 'none',
    fontSize: '90%',
    fontWeight: 'bold',
    '&:hover': {
      color: 'black',
      textDecoration: 'none'
    }
  },
  navLinkWeb: {
    margin: '0 15px',
  },
  drawer: {
    width: 250,
  },
}));

function NavBar() {

  const [mobileMenu, setMobileMenu] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMobileMenu(open);
  };

  const classes = useStyles();

  const list = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.drawer}
    >

        <List>
          <Link
            to="about"
            color="inherit"
            className={classes.navlink}
            smooth={true}
          >
            <ListItem button key='about'>
                <Typography className={classes.navlink}>About</Typography>
            </ListItem>
          </Link>
          <Divider />

          <Link
            to="work"
            color="inherit"
            className={classes.navlink}
            smooth={true}
          >
            <ListItem button key='work'>
              <Typography className={classes.navlink}>Work</Typography>
            </ListItem>
          </Link>
          <Divider />

          <Link
            to="projects"
            color="inherit"
            className={classes.navlink}
            smooth={true}
          >
            <ListItem button key='projects'>
              <Typography className={classes.navlink}>Projects</Typography>
            </ListItem>
          </Link>
          <Divider />

          <Link
            to="education"
            color="inherit"
            className={classes.navlink}
            smooth={true}
          >
            <ListItem button key='education'>
              <Typography className={classes.navlink}>Education</Typography>
            </ListItem>
          </Link>
        <Divider />

          <Link
            to="contact"
            color="inherit"
            className={classes.navlink}
            smooth={true}
          >
            <ListItem button key='contact'>
              <Typography className={classes.navlink}>Contact</Typography>
            </ListItem>
          </Link>
        <Divider />

        </List>
    </div>
  );

  return (
    <Container className={classes.root} maxWidth="lg">
      <AppBar className={classes.whiteBG}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Panas Subedi
          </Typography>

          <Hidden only="xs">
            <Typography>
              <Link
                to="about"
                color="inherit"
                className={`${classes.navlink} ${classes.navLinkWeb}`}
                smooth={true}
              >
                About
              </Link>
            </Typography>

            <Typography>
              <Link
                to="work"
                color="inherit"
                className={`${classes.navlink} ${classes.navLinkWeb}`}
                smooth={true}
              >
                Work
              </Link>
            </Typography>

            <Typography>
              <Link
                to="projects"
                color="inherit"
                className={`${classes.navlink} ${classes.navLinkWeb}`}
                smooth={true}
              >
                Projects
              </Link>
            </Typography>

            <Typography>
              <Link
                to="education"
                color="inherit"
                className={`${classes.navlink} ${classes.navLinkWeb}`}
                smooth={true}
              >
                Education
              </Link>
            </Typography>

            <Typography>
              <Link
                to="contact"
                color="inherit"
                className={`${classes.navlink} ${classes.navLinkWeb}`}
                smooth={true}
              >
                Contact
              </Link>
            </Typography>

          </Hidden>

          <Hidden smUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
            <SwipeableDrawer
              anchor={'right'}
              open={mobileMenu}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list}
            </SwipeableDrawer>
          </Hidden>

        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavBar
