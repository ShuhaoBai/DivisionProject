import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';
import Home from './page/Home';
import ProjectContent from './page/ProjectContent';
import { UseStyles } from 'styles/utilityTypes';
import { Route, Switch } from 'react-router-dom';
import Post from '../models/Post';
import axios from 'axios';
import PNNLHeader from './layout/PNNLHeader';
import PNNLFooter from './layout/PNNLFooter';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    minHeight: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
  const [allData, setAllData] = useState<Post[]>([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      const result = await axios('/wp-json/wp/v2/carousel?_embed');
      setAllData(result.data);
    };

    fetchData();
  }, []);
  return useObserver(() => (
    <div className={clsx(classes.root, className)}>
      <PNNLHeader />
      <Switch>
        <Route exact path="/">
          <Home postContent={allData} />
        </Route>
        <Route exact path="/project/:id">
          <ProjectContent project={allData} />
        </Route>
      </Switch>
      <PNNLFooter />
    </div>
  ));
}
