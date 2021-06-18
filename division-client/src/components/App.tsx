// NPM packages
import React from 'react';
import clsx from 'clsx';
// import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';
import Home from './page/Home';
import Posts from './posts/Posts';
import Layout from './layout/Layout';
// All other imports
// import { useServices } from 'services';
import { UseStyles } from 'styles/utilityTypes';
import DoubleItButton from './DoubleItButton';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonBar: {
    '& button': {
      marginRight: '16px',
    },
  },
}));

export interface ComponentNameProps extends UseStyles<typeof useStyles> {
  className?: string;
}

export default function ComponentName(
  props: ComponentNameProps
): React.ReactElement | null {
  const { className } = props;
  const classes = useStyles(props);
  return useObserver(() => (
    <Layout>
      <div className={clsx(classes.root, className)}>
        <Home />
        <Posts />
        <DoubleItButton />
      </div>
    </Layout>
  ));
}
