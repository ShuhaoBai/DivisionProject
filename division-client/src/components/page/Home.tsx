import React from 'react';
import Post from '../../models/Post';
import CarouselCore from '../carousel/CarouselCore';
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
  constructor(props: Readonly<IHomeProps>) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { isLoading } = this.state;
    const { classes, postContent } = this.props;
    if (isLoading) {
      return <p>Loading Home ...</p>;
    }
    return (
      <div className={classes.container}>
        <CarouselCore postContent={postContent} />
      </div>
    );
  }
}
export default withStyles(styles)(Home);
