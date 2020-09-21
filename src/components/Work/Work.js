import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
    marginBottom: '150px'
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontFamily: ['Gloria Hallelujah', 'cursive'].join(',')
  },
  left: {
    textAlign: 'left'
  },
  grey: {
    color: 'grey',
    fontSize: '80%'
  }
}));

function Work() {

  const classes = useStyles();

  return(
    <Container className={classes.root} maxWidth="lg" id="work">
      <Typography variant="h5" className={classes.title}>
        Work
      </Typography>

      <Grid container className={classes.root}>
        <Grid item sm={6}>
          <Typography variant='h6' className={classes.left}>
            Full Time
          </Typography>
          <Stepper orientation="vertical">
            <Step key='job3' active={true}>
              <StepLabel icon={<span></span>}>
                <Typography className={classes.grey}>Present</Typography>
              </StepLabel>
              <StepContent>
                <Typography>LogPoint</Typography>
                <Typography className={classes.grey}>Technical Writer</Typography>
              </StepContent>
            </Step>

            <Step key='job2' active={true}>
              <StepLabel icon={<span></span>}>
                <Typography className={classes.grey}>August 2018</Typography>
              </StepLabel>
              <StepContent>
                <Typography>LogPoint</Typography>
                <Typography className={classes.grey}>Technical Writer Intern</Typography>
              </StepContent>
            </Step>

            <Step key='job1' active={true}>
              <StepLabel icon={<span></span>}>
                <Typography className={classes.grey}>May 2018</Typography>
              </StepLabel>
              <StepContent>
                <Typography>KitabTrade</Typography>
                <Typography className={classes.grey}>Chief Technology Officer</Typography>
              </StepContent>
            </Step>

            <Step key='job0' active={true}>
              <StepLabel icon={<span></span>}>
                <Typography className={classes.grey}>
                  June 2016
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography>
                </Typography>
              </StepContent>
            </Step>
          </Stepper>
        </Grid>
        <Grid item sm={6}>
          <Typography variant='h6' className={classes.left}>
            Freelance
          </Typography>
          <List>
              <ListItem>
                <ListItemText
                  primary=
                  <Link href='https://cf7skins.com/author/panas/' target="_blank" rel="noreferrer" color='inherit'>
                    CF7 Skins
                  </Link>
                  secondary="February 2019 to Present"
                />
              </ListItem>
          </List>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Work
