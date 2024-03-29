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
import ChartCore from '../chart/ChartCore';
import YearSelect from '../yearSelect/YearSelect';
import EntrySelect from '../entrySelect/EntrySelect';
import { monthlyData as data } from '../chart/dataSample';
import Entry from '../../models/Entry';
// import reform from '../../utils/Reform';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const styles = (theme: Theme) =>
  createStyles({
    container: {
      marginTop: 200,
      margin: 0,
      paddingBottom: 80,
      display: 'flex',
      flexDirection: 'column',
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
  selectedEntries: Entry | undefined;
  fetchedData: Object | null;
}
class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: Readonly<IHomeProps>) {
    super(props);
    this.state = {
      selectedYear: '',
      selectedEntries: undefined,
      fetchedData: data,
      isLoading: false,
    };
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidUpdate(
    prevProps: any,
    prevState: { selectedYear: string; selectedEntries: Entry | undefined }
  ) {
    //TODO - need to update JSON.stringify() to lodash _.isEqual() to compare objects
    if (
      prevState.selectedYear !== this.state.selectedYear ||
      JSON.stringify(prevState.selectedEntries) !==
        JSON.stringify(this.state.selectedEntries)
    ) {
      const reformedData = data.filter((el) => {
        return el.year === this.state.selectedYear.toString();
      });
      //TODO - modify reformedData with selectedEntries
      // if (this.state.selectedEntries)
      //   var newReformedData = reform(reformedData, this.state.selectedEntries);

      console.log(reformedData);
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
  getSelectedEntries = (entries: Entry) => {
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
