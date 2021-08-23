import React, { useEffect, useState } from 'react';
import { UseStyles } from 'styles/utilityTypes';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import Post from '../models/Post';
import InfoStats from '../models/InfoStats';
import Home from './page/Home';
import ProjectContent from './page/ProjectContent';
import PNNLHeader from './layout/PNNLHeader';
import PNNLFooter from './layout/PNNLFooter';
import ACMDBackground from './layout/ACMDBackground';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles(() => ({
  outerWrapper: {
    height: '100%',
    width: '100%',
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerWrapper: {
    width: '100%',
    bottom: '0',
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
  const [allData, setAllData] = useState<{
    postContent: Post[];
    stats: InfoStats[];
  }>({
    postContent: [],
    stats: [],
  });
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      const postResult = await axios(
        '/postcontent/wp-json/wp/v2/carousel?_embed'
      );
      console.log(postResult);
      const infoStats = await axios('/infostats');
      console.log(infoStats);
      // setAllData({ postContent: postResult.data, stats: infoStats.data });
      setAllData({ postContent: postResult.data, stats: [] });
    };

    fetchData();
  }, []);
  return useObserver(() => (
    <div className={classes.outerWrapper}>
      <PNNLHeader />
      <ACMDBackground />
      <div className={clsx(classes.pageContainer, className)}>
        <Switch>
          <Route exact path="/">
            <Home postContent={allData.postContent} />
          </Route>
          <Route exact path="/project/:id">
            <ProjectContent project={allData.postContent} />
          </Route>
        </Switch>
      </div>
      <footer className={classes.footerWrapper}>
        <PNNLFooter />
      </footer>
    </div>
  ));
}
