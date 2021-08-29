import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%'
  },
  commentBox: {
    border: '1px solid #DDE4E7',
    padding: '10px',
    borderRadius: '10px'
  },
  userName: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`
  },
  commentDate: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`
  },
  comments: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '800',
    fontSize: '30px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`
  },
  avatar: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '20px'
  }
}));

export default function CommentComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.root} md={12} lg={12}>
        <Grid item md={1} lg={1}>
          <Avatar className={classes.avatar}>A</Avatar>
        </Grid>
        <Grid container md={10} lg={10} className={classes.commentBox}>
          <Grid item md={12} lg={12}>
            <Typography className={classes.userName}>Irfan Ansari</Typography>
            <Typography className={classes.commentDate}>
              September 14, 2016
            </Typography>
          </Grid>
          <Grid item md={12} lg={12}>
            <Typography className={classes.comments}>
              This is impressive. I will check it out.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
