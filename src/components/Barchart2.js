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
import { Stack, Animation, EventTracker , HoverState} from '@devexpress/dx-react-chart';

import { InterestBalancePerDay as data } from '../data/Barchart1Data';

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
    color: 'black'
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default class Barchart2 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper style={{height:"400px", width:"450px", marginLeft:"37px", marginTop:"0px", float:"left", clear:"both", marginRight:"20px", background:"white"}}>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Interest"
            valueField="Interest"
            argumentField="account"
            color="dodgerblue"
          />
          <BarSeries
            name="Balance"
            valueField="Balance"
            argumentField="account"
            color="darkblue"
          />
          {/* <BarSeries
            name="Bronze Medals"
            valueField="bronze"
            argumentField="account"
            color="#cd7f32"
          /> */}
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          {/* <EventTracker/>
          <HoverState /> */}
          <Title text="Transaction History " />
          <Stack />
        </Chart>
      </Paper>
    );
  }
}
