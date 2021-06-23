import React from 'react';
import Post from '../../models/Post';
import CarouselCore from '../carousel/CarouselCore';
import ListCore from '../list/ListCore';
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const styles = ({ spacing, typography }: Theme) =>
  createStyles({
    container: {
      marginTop: 200,
      margin: 0,
      paddingBottom: 463,
    },
    root: {
      marginTop: spacing(6),
    },
    columnHeading: {
      textTransform: 'uppercase',
      fontSize: '1.125rem',
      fontWeight: typography.fontWeightMedium,
      marginBottom: spacing(1),
    },
    columnBody: {
      '& > p': {
        marginBottom: spacing(2),
      },
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
      <div className={classes.container}>
        <CarouselCore postContent={postContent.slice(0, 3)} />
        <ListCore postContent={postContent} />
      </div>
    );
  }
}
export default withStyles(styles)(Home);
