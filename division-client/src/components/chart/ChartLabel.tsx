import React from 'react';
import { Legend } from '@devexpress/dx-react-chart-material-ui';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ChartLabel = (
  props: JSX.IntrinsicAttributes &
    Legend.LabelProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
    }
) => <Legend.Label className="labelComponent" {...props} />;
export default ChartLabel;
