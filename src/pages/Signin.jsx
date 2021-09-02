import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import TextfieldComponent from '../components/TextfieldComponent';
import TypographyComponent from '../components/TypographyComponent';
import httpService from '../httpService/httpService';
import { signinFields } from '../utills';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    minHeight: '100%',
  },
  container: {
    width: '30%',
    position: 'relative',
    top: '20%',
    left: '35%',
  },
  headGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '12px',
  },
  textfieldBody: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '5px',
  },
  btnGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function Signin() {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormdata({ ...formdata, [id]: value });
  };

  const handleSubmit = () => {
    httpService
      .post('/signin', formdata)
      .then((res) => {
        setMessage(res.data.message);
        setSeverity('success');
        setOpen(true);
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setSeverity('error');
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CustomizedSnackbars
        severity={severity}
        message={message}
        open={open}
        handleClose={handleClose}
      />
      <Grid container className={classes.container}>
        <Grid item md={12} className={classes.headGrid}>
          <TypographyComponent typographyText={'Sign in to your account'} />
        </Grid>
        <Grid item md={12} className={classes.textfieldBody}>
          {signinFields &&
            signinFields.map((txtfield) => (
              <TextfieldComponent
                error={txtfield.error}
                id={txtfield.id}
                label={txtfield.label}
                defaultValue={txtfield.defaultValue}
                helperText={txtfield.helperText}
                variant={txtfield.variant}
                onChange={handleChange}
              />
            ))}
        </Grid>
        <Grid item md={12} className={classes.btnGrid}>
          <ButtonComponent
            btnName={'Signin'}
            handleSubmit={handleSubmit}
          ></ButtonComponent>
        </Grid>
      </Grid>
    </div>
  );
}
