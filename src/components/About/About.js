import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '200px'
  },
  spaceTop: {
    marginTop: '20px'
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontFamily: ['Gloria Hallelujah', 'cursive'].join(',')
  },
  left: {
    width:'50%'
  }
}));

function About() {

  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [allOrLess, setAllOrLess] = React.useState('all');

  const handleChange = (event) => {
    setChecked((prev) => !prev);
    setAllOrLess(allOrLess === 'all' ? 'less' : 'all');
    event.preventDefault()
  };

  const aboutContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem orci, mollis nec arcu vitae,
  rutrum tristique mauris. Mauris tempor orci justo, sit amet consequat nunc bl
  andit at. Duis blandit lectus vel justo blandit aliquet. Pellentesque non susc`

  const aboutContentExtra = `Sed sem orci, mollis nec arcu vitae, rutrum tristique mauris. Mauris tempor orci justo, sit amet consequat nunc blandit at. Duis blandit lectus vel justo blandit aliquet. Pellentesque non suscipit elit. Proin tincidunt est quis malesuada rhoncus. Vivamus eu eleifend elit. Curabitur eget ultricies erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, ex at faucibus euismod, nunc turpis ornare ex, nec finibus dui nunc convallis lorem. Donec felis ligula, dignissim non ligula et, porttitor fringilla eli`

  return(
    <Container className={`${classes.root} ${classes.spaceTop}`} maxWidth="lg" id="about">
      <Typography variant="h5" className={classes.title}>
        About Me
      </Typography>

      <Typography className={`${classes.left} ${classes.spaceTop}`}>
        {aboutContent}
      </Typography>

      <Fade in={checked} unmountOnExit={true}>
        <Paper elevation={0}>
          <Typography className={`${classes.left} ${classes.spaceTop}`}>
            {aboutContentExtra}
          </Typography>
        </Paper>
      </Fade>
      <Typography className={`${classes.left} ${classes.spaceTop}`}>
        <Link color="inherit" href="#" onClick={handleChange}>Read {allOrLess}.</Link>
      </Typography>

    </Container>
  )
}

export default About
