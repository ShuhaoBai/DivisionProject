import React from 'react';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
const rootStyle = {
  display: 'flex',
  margin: 'auto',
  flexDirection: 'row',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ChartRoot = (
  props: JSX.IntrinsicAttributes &
    Legend.RootProps & {
      [x: string]: any;
      className?: string | undefined;
      style?: React.CSSProperties | undefined;
      classes?: string;
    }
) => (
  <Legend.Root
    className="rootComponent"
    {...props}
    style={rootStyle as React.CSSProperties}
  />
);
export default ChartRoot;
