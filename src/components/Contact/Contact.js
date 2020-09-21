import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
    marginBottom: '100px'
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
  }
}));

function Education() {

  const classes = useStyles();

  return(
    <Container className={classes.root} maxWidth="lg" id="contact">
      <Typography variant="h5" className={classes.title}>
        Contact Me
      </Typography>

      <Grid container className={classes.root} spacing={5}>

        <Grid item xs="5">

            <br /><br /><br />

            <Grid container spacing={3}>
              <Grid item>
                <EmailIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography>dobbysubedi@gmail.com</Typography>
              </Grid>
            </Grid><br />

            <Grid container spacing={3}>
              <Grid item>
                <PhoneAndroidIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography>+977 981 9796779</Typography>
              </Grid>
            </Grid><br />

            <Grid container spacing={3}>
              <Grid item>
                <LocationOnIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Typography>Sinamangal - 9<br />Kathmandu, Nepal</Typography>
              </Grid>
            </Grid><br /><br /><br />

            <Grid container>
              <Grid item>fb</Grid>
              <Grid item>insta</Grid>
              <Grid item>upwork</Grid>
              <Grid item></Grid>
            </Grid>

        </Grid>

        <Grid item xs="7">
          <Typography variant="h6">Leave a message</Typography>

          <Box>
          <TextField label="Your Name" fullWidth />
          </Box><br />
          <Box>
          <TextField label="Email address" fullWidth />
          </Box><br />
          <Box>
          <TextField label="Your Message" multiline fullWidth rows={5} />
          </Box><br />
          <Box>
          <Button variant="outlined">Send</Button>
          </Box>

        </Grid>

      </Grid>

    </Container>
  )
}

export default Education
