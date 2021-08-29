import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Link } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { AiOutlineComment } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50%',
    height: 'auto',
    minHeight: '200px',
    marginTop: '6px',
    marginBottom: '5px',
    padding: '10px',
    background: 'white',
    cursor: 'pointer',
    [theme.breakpoints.between('md', 'lg')]: {
      marginLeft: '30%'
    }
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  cardHeadTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  cardHeadContainer: {
    background: 'white',
    padding: '5px'
  },
  userName: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`
  },
  postDatetime: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`
  },
  cardContentContainer: {
    width: '100%',
    marginLeft: '7.5%'
  },
  contentText: {
    color: '#231f20',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '30px',
    '&:hover': {
      textDecoration: 'none',
      color: 'blue'
    }
  },
  butonGrids: {
    marginTop: '10px',
    padding: '0px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& .MuiButtonBase-root': {
      minWidth: '150px',
      borderRadius: '0px'
    },
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  },
  avatar: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '20px'
  },
  button: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '400',
    fontSize: '16px',
    textTransform: 'lowercase'
  }
}));

export default function PostcardComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.cardHeadContainer}>
        <Grid item sm={12} md={12} lg={12} className={classes.cardHead}>
          <Grid item sm={1} md={1} lg={1}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              A
            </Avatar>
          </Grid>
          <Grid item sm={4} md={6} lg={6} className={classes.cardHeadTextBox}>
            <Typography className={classes.userName}>
              Shrimp and Chorizo Paella
            </Typography>
            <Typography className={classes.postDatetime}>
              September 14, 2016
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={12} lg={12}></Grid>
        <Grid container className={classes.cardContentContainer}>
          <Grid item md={12} lg={12} className={classes.cardText}>
            <Link className={classes.contentText}>
              Arranged marriages are scary, what if she prefers spaces instead
              of tabs.🙄
            </Link>
          </Grid>

          <Grid item className={classes.butonGrids} md={4} lg={6}>
            <Grid item md={4} lg={8} className={classes.buttons}>
              <Button
                color="default"
                className={classes.button}
                startIcon={<FavoriteBorderIcon />}
              >
                10 reactions
              </Button>
              <Button
                color="default"
                className={classes.button}
                startIcon={<AiOutlineComment />}
              >
                10 Comments
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
