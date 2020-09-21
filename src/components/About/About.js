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

  const aboutContent =
    `I am a moderately experienced writer, working (within a specific timeslot
    in the day) for LogPoint A/S. I also like working on (within other timeslots)
    the content for blogs, technical documents, business proposals, and other
    stuffs.`

  const aboutContentExtra =
    `I am also a programming enthusiast. Therefore, when I am not writing stuffs,
    I try to hone my skills in problem solving and full stack web development
    (among other things). However, this happens only when I am not getting
    distracted by fantasy books, ASOIAF forums, or video games like FIFA and
    DotA.`

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
