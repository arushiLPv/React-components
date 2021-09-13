import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';


const data = [
  { month: 'Jan', account1: 101, account2: 13, account3: 43, account4: 36, account5: 66, account6: 58 },
  { month: 'Feb', account1: 89, account2: 15, account3: 23, account4: 78, account5: 34, account6: 41 },
  { month: 'Mar', account1: 107, account2: 20, account3: 19, account4: 26, account5: 83, account6: 63 },
  { month: 'Apr', account1: 113, account2: 17, account3: 53, account4: 18, account5: 90, account6: 32 },
  { month: 'May', account1: 105, account2: 21, account3: 73, account4: 48, account5: 27, account6: 29 },
  { month: 'Jun', account1: 91, account2: 22, account3: 39, account4: 38, account5: 65, account6: 76 },
  { month: 'Jul', account1: 110, account2: 23, account3: 33, account4: 56, account5: 42, account6: 87 },
  { month: 'Aug', account1: 111, account2: 25, account3: 93, account4: 37, account5: 78, account6: 113 },
  { month: 'Sep', account1: 112, account2: 27, account3: 83, account4: 30, account5: 21, account6: 26 },
  { month: 'Oct', account1: 111, account2: 30, account3: 48, account4: 23, account5: 39, account6: 15 },
  { month: 'Nov', account1: 120, account2: 35, account3: 37, account4: 6, account5: 95, account6: 57 },
  { month: 'Dec', account1: 160, account2: 45, account3: 78, account4: 43, account5: 59, account6: 59 },
];
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
const demoStyles = () => ({
  chart: {
    paddingRight: '20px',
  },
});

const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
    .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

class Chart1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;
    return (
      <Paper style={{height:"300px"}}>
        <Chart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="Account 1"
            valueField="account1"
            argumentField="month"
            seriesComponent={Line}
          />
          <LineSeries
            name="Account 2"
            valueField="account2"
            argumentField="month"
            seriesComponent={Line}
          />
          <LineSeries
            name="Account 3"
            valueField="account3"
            argumentField="month"
            seriesComponent={Line}
          />
          <LineSeries
            name="Account 4"
            valueField="account4"
            argumentField="month"
            seriesComponent={Line}
          />
          <LineSeries
            name="Account 5"
            valueField="account5"
            argumentField="month"
            seriesComponent={Line}
          />
          <LineSeries
            name="Account 6"
            valueField="account6"
            argumentField="month"
            seriesComponent={Line}
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Interest Revenue " />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: 'Chart1' })(Chart1);
