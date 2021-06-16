import React from 'react';

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
export interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // componentDidMount() {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   fetchWpPost().then((result) =>
  //     this.setState({
  //       posts: result,
  //       isLoading: false,
  //     })
  //   );
  // }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <div>
        <h1>This is home page</h1>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
