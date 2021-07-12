import React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
  Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import {
  ArgumentScale,
  Stack,
  Animation,
  EventTracker,
  HoverState,
} from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';
import { monthlyData as data } from './dataSample';
import ChartRoot from './ChartRoot';
import ChartLabel from './ChartLabel';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const styles = () =>
  createStyles({
    root: {},
  });

export interface IChartCoreProps extends WithStyles<typeof styles> {
  className?: string;
}
export interface IChartCoreState {
  hover: any;
  tooltipEnabled: boolean;
  tooltipTarget: any;
}

//=======tooltip=======
// const tooltipContentTitleStyle: React.CSSProperties = {
//   fontWeight: 'bold',
//   paddingBottom: 0,
// };
// const tooltipContentBodyStyle: React.CSSProperties = {
//   paddingTop: 0,
// };
// const formatTooltip = d3Format.format(',.2r');
// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// const TooltipContent = (props: {
//   [x: string]: any;
//   targetItem: any;
//   text: string;
//   style: React.CSSProperties | undefined;
// }) => {
//   const { targetItem, text, ...restProps } = props;
//   if (targetItem) {
//     return (
//       <div>
//         <div>
//           <Tooltip.Content
//             // {...restProps}
//             style={tooltipContentTitleStyle}
//             text={targetItem.series}
//             targetItem={targetItem.series}
//           />
//         </div>
//         <div>
//           <Tooltip.Content
//             {...restProps}
//             style={tooltipContentBodyStyle}
//             // text={formatTooltip(data[targetItem.point][targetItem.series])}
//             text={data[targetItem.point][targetItem.series]}
//             targetItem={targetItem.series}
//           />
//         </div>
//       </div>
//     );
//   }
//   return null;
// };
//=======tooltip=======

class ChartCore extends React.Component<IChartCoreProps, IChartCoreState> {
  changeHover: (hover: any) => void;
  changeTooltip: (targetItem: any) => void;
  toggleTooltip: () => void;
  constructor(props: Readonly<IChartCoreProps>) {
    super(props);
    this.state = {
      hover: null,
      tooltipEnabled: true,
      tooltipTarget: null,
    };
    this.changeHover = (hover) => this.setState({ hover });
    this.changeTooltip = (targetItem) =>
      this.setState({ tooltipTarget: targetItem });
    this.toggleTooltip = () =>
      this.setState(({ tooltipEnabled }) => ({
        tooltipEnabled: !tooltipEnabled,
        tooltipTarget: null,
      }));
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { hover } = this.state;
    return (
      <Paper>
        <Chart data={data}>
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />
          <Title text="Monthly Publications" />
          <BarSeries
            name="Published"
            valueField="Published"
            argumentField="month"
          />
          <BarSeries
            name="Abstract"
            valueField="Abstract"
            argumentField="month"
          />
          <BarSeries
            name="Presentation"
            valueField="Presentation"
            argumentField="month"
          />
          <BarSeries
            name="JournalArticle"
            valueField="JournalArticle"
            argumentField="month"
          />
          <BarSeries
            name="Datasets"
            valueField="Datasets"
            argumentField="month"
          />
          <BarSeries name="Report" valueField="Report" argumentField="month" />
          <BarSeries
            name="Conference Proceedings"
            valueField="ConferenceProceedings"
            argumentField="month"
          />
          <BarSeries name="Other" valueField="Other" argumentField="month" />
          <BarSeries
            name="Brochure"
            valueField="Brochure"
            argumentField="month"
          />
          <BarSeries
            name="Book Chapter"
            valueField="BookChapter"
            argumentField="month"
          />
          <BarSeries name="Video" valueField="Video" argumentField="month" />
          <BarSeries name="Book" valueField="Book" argumentField="month" />
          <BarSeries
            name="Exhibit"
            valueField="Exhibit"
            argumentField="month"
          />
          <BarSeries
            name="Software"
            valueField="Software"
            argumentField="month"
          />
          <BarSeries
            name="Magazine"
            valueField="Magazine"
            argumentField="month"
          />

          <Stack />

          <Legend
            position="bottom"
            rootComponent={ChartRoot}
            labelComponent={ChartLabel}
          />

          <EventTracker />
          <HoverState hover={hover} onHoverChange={this.changeHover} />
          <Tooltip />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
export default withStyles(styles)(ChartCore);
