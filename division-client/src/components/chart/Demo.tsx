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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const styles = () =>
  createStyles({
    root: {},
  });

export interface IDemoProps extends WithStyles<typeof styles> {
  className?: string;
}
export interface IDemoState {
  hover: any;
  tooltipEnabled: boolean;
  tooltipTarget: any;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Root = (
  props: JSX.IntrinsicAttributes &
    Legend.RootProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    }
) => <Legend.Root className="rootComponent" {...props} />;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Label = (
  props: JSX.IntrinsicAttributes &
    Legend.LabelProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    }
) => <Legend.Label className="labelComponent" {...props} />;

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

class Demo extends React.Component<IDemoProps, IDemoState> {
  changeHover: (hover: any) => void;
  changeTooltip: (targetItem: any) => void;
  toggleTooltip: () => void;
  constructor(props: Readonly<IDemoProps>) {
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
          <Stack />
          <Legend
            position="right"
            rootComponent={Root}
            labelComponent={Label}
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
export default withStyles(styles)(Demo);
