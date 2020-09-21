import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import getGithubRepos from '../../utils/getGithubRepos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
    marginBottom: '200px'
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
  projects: {
    padding: '20px 30px',
    width: '300px',
    minHeight: '150px'
  },
  projectsContainer: {
    margin: '0 10px'
  },
  right: {
    textAlign: 'right'
  }
}));

function Education() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getGithubRepos().then(data => {
      setRepos(data)
    });
  }, []);

  const classes = useStyles();

  return(

    <Container className={classes.root} maxWidth="lg" id="projects">

      <Typography variant="h5" className={classes.title}>
        Projects
      </Typography>

      <Grid container className={`${classes.root} ${classes.projectsContainer}`} spacing={5}>
        {repos.slice(0, 6).map((item, index) => {
          return <Grid item key={index}>
            <Paper className={classes.projects} elevation={3}>
              <Typography variant='h6'>
                <Link target="_blank" href={item.homepage} color="inherit">{item.name}</Link>
              </Typography>
              <Typography className={classes.grey}>
                <Link target="_blank" href={item.html_url} color="inherit">Source</Link>
              </Typography>
              <Typography className={classes.grey}>{item.description}</Typography>
            </Paper>
          </Grid>
        })}
      </Grid>
      <Typography className={classes.right}><Link href="https://github.com/PanasSubedi?tab=repositories" color="inherit" target="_blank">View all projects >></Link></Typography>
    </Container>
  )
}

export default Education
