import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, TextareaAutosize } from '@material-ui/core';
import CommentComponent from './CommentComponent';
import { RiHeart2Line } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '5px',
    padding: '10px',
    background: '#E8E8E8',
    cursor: 'pointer'
  },
  singlePostBox: {
    display: 'flex',
    background: '#E8E8E8'
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
    minHeight: '100%',
    height: 'auto',
    marginLeft: '7.5%'
  },
  contentText: {
    color: '#231f20',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '30px'
  },
  butonGrids: {
    padding: '0px',
    height: 'auto'
  },
  buttons: {
    position: 'relative',
    top: '10%',
    left: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& .MuiButtonBase-root': {
      minWidth: '50px',
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
    textTransform: 'lowercase',
    '& .MuiButton-startIcon': {
      marginLeft: '-8px'
    }
  },
  singlePostContentBox: {
    marginBottom: '20px'
  },
  singlePostContent: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`
  },
  commentTitleBox: {
    background: '#FCFDFD',
    marginBottom: '40px'
  },
  commentText: {
    outline: 'none',
    resize: 'none',
    border: '1px dotted black',
    width: '99%',
    textAlign: 'left',
    background: '#FCFDFD',
    color: '#393939',
    fontWeight: '500',
    fontSize: '20px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    textOutline: 'none'
  },
  commentBox: {
    marginBottom: '50px'
  },
  discusBtn: {
    fontWeight: '500',
    fontSize: '15px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,

    '&:hover': {
      color: 'white',
      background: 'blue'
    }
  },
  likesCount: {
    fontWeight: '100',
    fontSize: '20px',
    fontFamily: 'monospace'
  },
  bookmarkCounts: {
    fontWeight: '100',
    fontSize: '20px',
    fontFamily: 'monospace'
  }
}));

export default function SinglePostComponent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item md={12} lg={12} className={classes.singlePostBox}>
        <Grid item className={classes.butonGrids} md={2} lg={2}>
          <Grid item md={2} lg={2} className={classes.buttons}>
            <Button
              color="default"
              className={classes.button}
              startIcon={<RiHeart2Line />}
            ></Button>
            <Typography className={classes.likesCount}>10</Typography>
            <Button
              color="default"
              className={classes.button}
              startIcon={<BsBookmark />}
            ></Button>
            <Typography className={classes.bookmarkCounts}>10</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.cardHeadContainer}
          item
          md={8}
          lg={8}
        >
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
          <Grid container className={classes.cardContentContainer}>
            <Grid item md={12} lg={12} className={classes.cardText}>
              <Typography className={classes.contentText}>
                Arranged marriages are scary, what if she prefers spaces instead
                of tabs.🙄
              </Typography>
            </Grid>
            <Grid item md={12} lg={12} className={classes.singlePostContentBox}>
              <Typography className={classes.singlePostContent}>
                Arranged marriages are scary, what if she prefers spaces instead
                of tabs.Arranged marriages are scary, what if she prefers spaces
                instead of tabs.Arranged marriages are scary,
                <br></br>
                what if she prefers spaces instead of tabs.Arranged marriages
                are scary, what if she prefers spaces instead of tabs. Arranged
                marriages are scary, what if she prefers spaces instead of
                tabs.Arranged marriages are scary, what if she prefers spaces
                instead of tabs.
                <br></br>
                Arranged marriages are scary, what if she prefers spaces instead
                of tabs.Arranged marriages are scary, what if she prefers spaces
                instead of tabs.
                <br></br>
                Arranged marriages are scary, what if she prefers spaces instead
                of tabs.Arranged marriages are scary, what if she prefers spaces
                instead of tabs.
              </Typography>
            </Grid>
            <Grid item md={12} lg={12} className={classes.commentTitleBox}>
              <TextareaAutosize
                minRows={5}
                maxRows={100}
                aria-label="maximum height"
                placeholder="Add the discussion here..."
                className={classes.commentText}
              />
              <Button className={classes.discusBtn}>Submit</Button>
            </Grid>
            <Grid item md={12} lg={12} className={classes.commentBox}>
              <CommentComponent />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
