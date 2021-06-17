import React from 'react';
import { fetchWpCarouselsContent } from '../../services/FetchService';
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
}
export interface IHomeState {
  postContent: Post[];
  isLoading: boolean;
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: Readonly<IHomeProps>) {
    super(props);
    this.state = {
      postContent: [],
      isLoading: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetchWpCarouselsContent().then((result) =>
      this.setState({
        postContent: result,
        isLoading: false,
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { postContent, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading Home ...</p>;
    }
    return (
      <React.Fragment>
        <CarouselCore postContent={postContent} />
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Home);
