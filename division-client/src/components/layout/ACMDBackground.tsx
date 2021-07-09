import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  acmdBackgroundContainer: {
    position: 'relative',
    textAlign: 'center',
    paddingTop: '80px',
    width: '100%',
  },
  logoImg: {
    width: '100%',
    objectFit: 'cover',
    height: '600px',
  },
  logoLayer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-110%,60%)',
    color: '#ffffff',
    fontSize: '3.7rem',
    fontWeight: 'bold',
    width: '40%',
  },
});
const ACMDBackground: React.SFC = () => {
  const classes = useStyles();
  return (
    <div className={classes.acmdBackgroundContainer}>
      <img
        className={classes.logoImg}
        src={require('../../resources/ACMD.jpeg')}
        alt="ACMD logo"
      />
      <h1 className={classes.logoLayer}>
        Advanced Computing, Mathematics, and Data
      </h1>
    </div>
  );
};
export default ACMDBackground;
