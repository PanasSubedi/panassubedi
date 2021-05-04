import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Link from '@material-ui/core/Link';

import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Snackbar from '@material-ui/core/Snackbar';

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const handleButtonClick = () => {
    fetch("https://api.panassubedi.com.np/contactSubmissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }).then(
      response => response.json()
    ).then(
      data => {
        if ('success' in data && data['success']){
          setSnackBarMessage('Message sent.');
          setSnackBarOpen(true);
        }

        else {
          setSnackBarMessage('Message failed to send. Please try again at a different time.')
          setSnackBarOpen(true);
        }
      }
    ).catch(err => {
      setSnackBarMessage('Unknown error occured.');
      setSnackBarOpen(true);
    });

    setName("");
    setEmail("");
    setMessage("");
  }

  const classes = useStyles();

  return(
    <Container className={classes.root} maxWidth="lg" id="contact">
      <Typography variant="h5" className={classes.title}>
        Contact Me
      </Typography>

      <Grid container className={classes.root} spacing={5}>

        <Grid item xs="5">

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
                <Typography>+977 981 8796779</Typography>
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
              <Grid item><Link href="https://www.linkedin.com/in/panas-subedi-7a085ab1/" target={"_blank"}><LinkedInIcon /></Link></Grid>
              <Grid item><Link href="https://www.facebook.com/crR0nUss/" target={"_blank"}><FacebookIcon /></Link></Grid>
              <Grid item><Link href="https://www.instagram.com/psub3dii/" target={"_blank"}><InstagramIcon /></Link></Grid>
            </Grid>

        </Grid>

        <Grid item xs="7">
          <Typography variant="h6">Leave a message</Typography>

          <Box>
            <TextField
              label="Your name"
              value={name}
              onChange={event => {setName(event.target.value)}}
              fullWidth
            />
          </Box><br />

          <Box>
            <TextField
              label="Email address"
              value={email}
              onChange={event => {setEmail(event.target.value)}}
              fullWidth
            />
          </Box><br />

          <Box>
            <TextField
              label="Your message"
              value={message}
              onChange={event => {setMessage(event.target.value)}}
              fullWidth
              multiline
              rows={5}
            />
          </Box><br />

          <Box>
            <Button
              variant="outlined"
              onClick={handleButtonClick}
            >Send</Button>
          </Box>

        </Grid>

      </Grid>

      <Snackbar
        open={snackBarOpen}
        onClose={() => setSnackBarOpen(false)}
        message={snackBarMessage}
      />

    </Container>
  )
}

export default Education
