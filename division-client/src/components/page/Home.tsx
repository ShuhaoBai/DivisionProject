import React from 'react';
import Post from '../../models/Post';
import CarouselCore from '../carousel/CarouselCore';
import ListCore from '../list/ListCore';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import ChartCore from '../chart/ChartCore';
import YearSelect from '../yearSelect/YearSelect';
import EntrySelect from '../entrySelect/EntrySelect';
import { monthlyData as data } from '../chart/dataSample';

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
  selectedYear: string;
  selectedEntries: Object;
  fetchedData: Object | null;
}
class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: Readonly<IHomeProps>) {
    super(props);
    this.state = {
      selectedYear: '',
      selectedEntries: [],
      fetchedData: data,
      isLoading: false,
    };
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidUpdate(prevProps: any, prevState: { selectedYear: string }) {
    if (prevState.selectedYear !== this.state.selectedYear) {
      const reformedData = data.filter((el) => {
        return el.year === this.state.selectedYear.toString();
      });
      this.setState({
        selectedYear: this.state.selectedYear,
        fetchedData: reformedData,
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getSelectedYear = (year: string) => {
    this.setState({
      selectedYear: year,
    });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getSelectedEntries = (entries: Object) => {
    this.setState(
      {
        selectedEntries: entries,
      },
      () => console.log(this.state.selectedEntries)
    );
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { classes, postContent } = this.props;
    const { isLoading, fetchedData } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className={classes.container}>
          <CarouselCore postContent={postContent.slice(0, 3)} />
          <ListCore postContent={postContent} />
          <YearSelect
            getSelectedYear={(year: string) => this.getSelectedYear(year)}
          />
          <EntrySelect
            getSelectedEntries={(entries) => this.getSelectedEntries(entries)}
          />
          <ChartCore data={fetchedData} />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
