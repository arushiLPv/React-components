import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { TransactionPerDay as data } from '../data/Barchart1Data';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default class Barchart1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper style={{height:"400px", width:"450px", marginLeft:"37px", marginTop:"10px", float:"left", clear:"both", marginRight:"20px", background:"white"}}>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Credit"
            valueField="Credit"
            argumentField="account"
            color="#ffd700"
          />
          <BarSeries
            name="Debit"
            valueField="Debit"
            argumentField="account"
            color="#c0c0c0"
          />
          {/* <BarSeries
            name="Bronze Medals"
            valueField="bronze"
            argumentField="account"
            color="#cd7f32"
          /> */}
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Transaction History " />
          <Stack />
        </Chart>
      </Paper>
    );
  }
}
