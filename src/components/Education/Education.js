import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
    marginBottom: '50px'
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontFamily: ['Gloria Hallelujah', 'cursive'].join(',')
  },
  grey: {
    color: 'grey',
    fontSize: '90%'
  },
  right: {
    textAlign: 'right'
  },
  education: {
    margin: '20px 0'
  }
}));

function Education() {

  const [checked, setChecked] = React.useState(false);
  const [moreOrLess, setMoreOrLess] = React.useState('more');

  const handleChange = (event) => {
    setChecked((prev) => !prev);
    setMoreOrLess(moreOrLess === 'more' ? 'less' : 'more');
    event.preventDefault()
  };

  const classes = useStyles();

  const printEducation = (title, issuedBy, date, url) => {
    return <Paper elevation={0} className={classes.education}>
      <Typography variant='h6'>
        {title}
      </Typography>

      <Typography variant='h6' className={classes.grey}>
        <Link
          target="_blank"
          href={url}
          rel="noreferrer"
          color="inherit"
        >
          {issuedBy}
        </Link><br />
        {date}
      </Typography>
    </Paper>
  }

  const educations = [
    {
      title: 'BSc (Hons) in Software Engineering (Computing)',
      issuedBy: 'University of Northampton',
      date: 'Jul 2018',
      url: 'https://www.northampton.ac.uk/courses/computing-bsc-hons/'

    }
  ]

  const certifications = [
    {
      title: 'Developing Applications with Google Cloud Platform',
      issuedBy: 'Coursera',
      date: 'Sep 2020',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/UVKGTHGGBVT6'
    },

    {
      title: 'Machine Learning with TensorFlow on Google Cloud Platform',
      issuedBy: 'Coursera',
      date: 'Sep 2020',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6VCHR3DMLCFC'
    }
  ]

  const certificationsMore = [
    {
      title: 'Google IT Automation with Python Specialization',
      issuedBy: 'Coursera',
      date: 'Aug 2020',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/G9NVL5CH2BEF'
    },

    {
      title: 'Deep Learning Specialization',
      issuedBy: 'Coursera',
      date: 'Jul 2019',
      url: 'https://www.coursera.org/account/accomplishments/specialization/UBAWF9GM37SH'
    },

    {
      title: 'Algorithmic Toolbox',
      issuedBy: 'Coursera',
      date: 'Sep 2017',
      url: 'https://www.coursera.org/account/accomplishments/verify/WYT5SGU6U5QZ'
    },

    {
      title: 'Machine Learning',
      issuedBy: 'Coursera',
      date: 'Apr 2017',
      url: 'https://www.coursera.org/account/accomplishments/verify/XC29RVXYFACK'
    }
  ]

  return(
    <Container className={classes.root} maxWidth="lg" id="education">

      <Grid container className={classes.root} spacing={5} justify="space-between">

        <Grid item>
          <Typography variant="h5" className={classes.title}>
            Education
          </Typography>

          {educations.map(education => {
            return printEducation(
              education.title,
              education.issuedBy,
              education.date,
              education.url)
          })}

        </Grid>

        <Grid item className={classes.right}>

          <Typography variant="h5" className={classes.title}>
            Certifications
          </Typography>

          {certifications.map(certification => {
            return printEducation(
              certification.title,
              certification.issuedBy,
              certification.date,
              certification.url)
          })}

          <Fade in={checked} unmountOnExit={true}>
            <Paper elevation={0}>
              <Typography>
                {certificationsMore.map(certification => {
                  return printEducation(
                    certification.title,
                    certification.issuedBy,
                    certification.date,
                    certification.url)
                })}
              </Typography>
            </Paper>
          </Fade>
          <Typography>
            <Link href="#" color="inherit" onClick={handleChange}>See {moreOrLess}</Link>
          </Typography>

        </Grid>

      </Grid>

      <br /><br />

    </Container>
  )
}

export default Education
