import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { purple } from '@material-ui/core/colors';
import BG_1 from './images/BG_1.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${BG_1})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 6),
    },
  },
  paper: {
    margin: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    padding: theme.spacing(2, 0),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '20px',
  },
  appTheme: {
    color: purple,
  },
  input: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1),
    borderRadius: '10px',
  },
  backdrop: {
    height: '100%',
  },
  backdropContainer: {
    width: '100%',
  },
  social: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexFlow: 'column',
  },
  icons: {
    fontSize: '8vh',
  },
  twitter: {
    color: 'aqua',
  },
  address: {
    marginBottom: theme.spacing(2),
  },
  addressItem: {
    display: 'flex',
    alignItems: 'center',
  },
  addressIcon: {
    marginRight: theme.spacing(1),
  },
  addressContainer: {
    padding: theme.spacing(1),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} md={4} component={Paper}>
        <div className={classes.paper}>
          <Typography color="primary" variant="h3">
            Let&apos;s Talk
          </Typography>
          <Typography color="primary">
            To request a quote or want to meetup for coffee.
            Contact us directly or fill out the form and we will
            get back to you promptly
          </Typography>
          <form className={classes.form} noValidate>
            <InputLabel>
              <Typography color="primary">Full Name</Typography>
              <InputBase
                required
                fullWidth
                id="name"
                name="name"
                autoComplete="name"
                autoFocus
                className={classes.input}
              />
            </InputLabel>
            <InputLabel>
              <Typography color="primary">Your Email</Typography>
              <InputBase
                required
                fullWidth
                name="email"
                id="email"
                autoComplete="email"
                className={classes.input}
              />
            </InputLabel>
            <InputLabel>
              <Typography color="primary">Message</Typography>
              <InputBase
                required
                fullWidth
                id="message"
                name="message"
                autoComplete="message"
                multiline
                rows={8}
                className={classes.input}
              />
            </InputLabel>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              size="large"
            >
              Send Message
            </Button>
          </form>
        </div>
      </Grid>
      <Grid className={classes.backdropContainer} xs={12} md={8} item>
        <Grid className={classes.backdrop} alignContent="space-between" container>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid className={classes.contactInfo} item xs={12}>
            <div className={classes.addressContainer}>
              <div className={`${classes.address} ${classes.addressItem}`}>
                <LocationIcon color="primary" className={classes.addressIcon} />
                <Typography display="block" color="primary" variant="h6">
                  151 New Park Ave, Hatford, CT 06106 United States
                </Typography>
              </div>
              <div className={classes.addressItem}>
                <PhoneIcon color="primary" className={classes.addressIcon} />
                <Typography color="primary" variant="h6">
                  +1 (203) 302 9545
                </Typography>
              </div>
              <div className={classes.addressItem}>
                <MessageIcon color="primary" className={classes.addressIcon} />
                <Typography color="primary" variant="h6">
                  contactus@nvritasoft.com
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid className={classes.social} item xs={12}>
            <IconButton color="primary">
              <FacebookIcon className={classes.icons} />
            </IconButton>
            <IconButton>
              <TwitterIcon className={`${classes.icons} ${classes.twitter}`} />
            </IconButton>
            <IconButton color="secondary">
              <InstagramIcon className={classes.icons} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
