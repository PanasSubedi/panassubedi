import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import MainImage from '../../images/mainImage.png';
import MainImageMobile from '../../images/mainImageMobile.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  mainContainer: {
    textAlign: 'center',
    padding: '210px 0',
    backgroundImage: `url(${MainImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right'
  },
  personName: {
    fontWeight:'bold'
  },
  mainContainerMobile: {
    textAlign: 'center',
    padding: '100px 0',
    backgroundImage: `url(${MainImageMobile})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right'
  }
}));

function TitleCard() {

  const classes = useStyles();

  const textContent = (
    <>
      <Typography variant='h4'>
        Hello, I'm
      </Typography>
      <Typography variant='h3' className={classes.personName}>
        Panas Subedi
      </Typography>
      <Typography>
        Programmer by Night
      </Typography>
    </>
  )

  return(
    <>
      <Hidden xsDown>
        <Container className={`${classes.root} ${classes.mainContainer}`} maxWidth="lg">
          {textContent}
        </Container>
      </Hidden>

      <Hidden smUp>
        <Container className={`${classes.root} ${classes.mainContainer}`} maxWidth="lg">
          {textContent}
        </Container>
      </Hidden>
    </>
  )
}

export default TitleCard
