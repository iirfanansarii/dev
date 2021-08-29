import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import TextfieldComponent from '../components/TextfieldComponent';
import TypographyComponent from '../components/TypographyComponent';
import { signinFields } from '../utills';

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
  return (
    <div className={classes.root}>
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
              />
            ))}
        </Grid>
        <Grid item md={12} className={classes.btnGrid}>
          <ButtonComponent btnName={'Signin'}></ButtonComponent>
        </Grid>
      </Grid>
    </div>
  );
}
