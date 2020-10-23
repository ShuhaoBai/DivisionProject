// NPM packages
import React from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';

// All other imports
import { withServices } from 'services';
import Services from 'services/Services';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const styles = () =>
  createStyles({
    root: {},
  });

export interface DoubleItButtonProps extends WithStyles<typeof styles> {
  className?: string;
}

class DoubleItButton extends React.Component<
  DoubleItButtonProps & { services: Services }
> {
  render(): React.ReactNode {
    const { classes, className, services } = this.props;
    const { dummyService } = services;
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => dummyService.multiplyBy(2)}
        className={clsx(classes.root, className)}
      >
        Double It
      </Button>
    );
  }
}

export default withStyles(styles)(withServices(observer(DoubleItButton)));
