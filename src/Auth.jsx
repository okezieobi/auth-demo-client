import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { purple } from '@material-ui/core/colors';
import BG_1 from './images/bg_1.svg';

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
      padding: theme.spacing(6),
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
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper}>
        <div className={classes.paper}>
          <Typography color="primary" variant="h4">
            Let&apos;s Talk
          </Typography>
          <Typography color="primary" component="h1" variant="h6">
            To request a quote or want to meetup for coffee.
            Contact us directly or fill out the form and we will
            get back to you promptly
          </Typography>
          <form className={classes.form} noValidate>
            <InputLabel>
              <Typography color="primary" variant="h6">Full Name</Typography>
              <InputBase
                variant="outlined"
                margin="normal"
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
              <Typography color="primary" variant="h6">Your Email</Typography>
              <InputBase
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                id="email"
                autoComplete="email"
                className={classes.input}
              />
            </InputLabel>
            <InputLabel>
              <Typography color="primary" variant="h6">Message</Typography>
              <InputBase
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="message"
                name="message"
                autoComplete="message"
                multiline
                rows={4}
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
      <Grid item xs={false} sm={4} md={7} />
      <Grid item>
        <Grid container>
          <Grid item xs={12} />
        </Grid>
      </Grid>
    </Grid>
  );
}
