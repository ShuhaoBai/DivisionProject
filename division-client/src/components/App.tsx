import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';
import Home from './page/Home';
import ProjectContent from './page/ProjectContent';
import Layout from './layout/Layout';
import { UseStyles } from 'styles/utilityTypes';
import { Route, Switch } from 'react-router-dom';
import Post from '../models/Post';
import axios from 'axios';

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
    <Layout>
      <div className={clsx(classes.root, className)}>
        <Switch>
          <Route exact path="/">
            <Home postContent={allData} />
          </Route>
          <Route exact path="/project/:id">
            <ProjectContent project={allData} />
          </Route>
        </Switch>
      </div>
    </Layout>
  ));
}
