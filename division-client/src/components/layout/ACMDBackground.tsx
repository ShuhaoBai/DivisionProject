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
    color: '#ffffff',
    fontSize: '3.7rem',
    fontWeight: 'bold',
    width: '40%',
    position: 'absolute',
    bottom: '15%',
    left: '10%',
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
      <div className={classes.logoLayer}>
        Advanced Computing, Mathematics, and Data
      </div>
    </div>
  );
};
export default ACMDBackground;
