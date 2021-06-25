// import React, { useEffect, useState } from 'react';
// import { UseStyles } from 'styles/utilityTypes';
// import { makeStyles } from '@material-ui/core/styles';
// import { useObserver } from 'mobx-react';
// import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';
// import clsx from 'clsx';
// import Post from '../models/Post';
// import Home from './page/Home';
// import ProjectContent from './page/ProjectContent';
// import PNNLHeader from './layout/PNNLHeader';
// import PNNLFooter from './layout/PNNLFooter';

// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// const useStyles = makeStyles(() => ({
//   rootA: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   outerWrapper: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
// }));

// export interface ComponentNameProps extends UseStyles<typeof useStyles> {
//   className?: string;
// }

// export default function ComponentName(
//   props: ComponentNameProps
// ): React.ReactElement | null {
//   const { className } = props;
//   const classes = useStyles(props);
//   const [allData, setAllData] = useState<Post[]>([]);
//   useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//     const fetchData = async () => {
//       const result = await axios('/wp-json/wp/v2/carousel?_embed');
//       setAllData(result.data);
//     };

//     fetchData();
//   }, []);
//   return useObserver(() => (
//     <div className={classes.outerWrapper}>
//       <div className={clsx(classes.rootA, className)}>
//         <PNNLHeader />
//         <Switch>
//           <Route exact path="/">
//             <Home postContent={allData} />
//           </Route>
//           <Route exact path="/project/:id">
//             <ProjectContent project={allData} />
//           </Route>
//         </Switch>
//       </div>
//       <PNNLFooter />
//     </div>
//   ));
// }

//=======Mobx Conversion=======Mobx Conversion=======Mobx Conversion=======
import React, { useEffect, useState } from 'react';
import { UseStyles } from 'styles/utilityTypes';
import { makeStyles } from '@material-ui/core/styles';
import { useObserver } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import Post from '../models/Post';
import Home from './page/Home';
import ProjectContent from './page/ProjectContent';
import PNNLHeader from './layout/PNNLHeader';
import PNNLFooter from './layout/PNNLFooter';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useStyles = makeStyles(() => ({
  rootA: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  outerWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
    <div className={classes.outerWrapper}>
      <div className={clsx(classes.rootA, className)}>
        <PNNLHeader />
        <Switch>
          <Route exact path="/">
            <Home postContent={allData} />
          </Route>
          <Route exact path="/project/:id">
            <ProjectContent project={allData} />
          </Route>
        </Switch>
      </div>
      <PNNLFooter />
    </div>
  ));
}
