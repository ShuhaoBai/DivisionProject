import React from 'react';
import Post from '../../models/Post';
import CarouselCore from '../carousel/CarouselCore';
import ListCore from '../list/ListCore';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const styles = () =>
  createStyles({
    container: {
      marginTop: 200,
      margin: 0,
      paddingBottom: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export interface IHomeProps extends WithStyles<typeof styles> {
  className?: string;
  postContent: Post[];
}
export interface IHomeState {
  isLoading: boolean;
}
class Home extends React.Component<IHomeProps, IHomeState> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { classes, postContent } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <CarouselCore postContent={postContent.slice(0, 3)} />
          <ListCore postContent={postContent} />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
