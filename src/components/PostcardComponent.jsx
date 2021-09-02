import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Link } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { AiOutlineComment } from 'react-icons/ai';
import httpService from '../httpService/httpService';
import CustomizedSnackbars from './CustomizedSnackbars';
import { useHistory } from 'react-router-dom';

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
      marginLeft: '30%',
    },
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  cardHeadTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardHeadContainer: {
    background: 'white',
    padding: '5px',
  },
  userName: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  postDatetime: {
    textAlign: 'left',
    color: '#393939',
    fontWeight: '400',
    fontSize: '16px',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  cardContentContainer: {
    width: '100%',
    marginLeft: '7.5%',
  },
  contentText: {
    color: '#231f20',
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '30px',
    '&:hover': {
      textDecoration: 'none',
      color: 'blue',
    },
  },
  butonGrids: {
    marginTop: '10px',
    padding: '0px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    '& .MuiButtonBase-root': {
      minWidth: '150px',
      borderRadius: '0px',
    },
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
  avatar: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '700',
    fontSize: '20px',
  },
  button: {
    fontFamily: `Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
    fontWeight: '400',
    fontSize: '16px',
    textTransform: 'lowercase',
  },
}));

export default function PostcardComponent() {
  const classes = useStyles();
  const [posts, setPostsdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    httpService
      .get('/post/all')
      .then((res) => {
        setPostsdata(res.data.posts);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setSeverity('error');
        setOpen(true);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const routeChange = (postId) => {
    history.push(`/singlepost/${postId}`);
  };

  return posts.map((post, index) => (
    <div className={classes.root} key={index}>
      <CustomizedSnackbars
        severity={severity}
        message={message}
        open={open}
        handleClose={handleClose}
      />
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
            <Link
              className={classes.contentText}
              href={`/singlepost/${post._id}`}
            >
              {post.postTitle}
            </Link>
          </Grid>

          <Grid item className={classes.butonGrids} md={4} lg={6}>
            <Grid item md={4} lg={8} className={classes.buttons}>
              <Button
                color="default"
                className={classes.button}
                startIcon={<FavoriteBorderIcon />}
                onClick={() => routeChange(post._id)}
              >
                10 reactions
              </Button>
              <Button
                color="default"
                className={classes.button}
                startIcon={<AiOutlineComment />}
                onClick={() => routeChange(post._id)}
              >
                {post.comments.length}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  ));
}
