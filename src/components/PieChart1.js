import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const data = [
  { credit: 'Credit', area: 12 },
  { credit: 'Debit', area: 7 }
];
export default class PieChart1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="credit"
          />
          <EventTracker />
         <HoverState/>
          <Title
            text="Credit vs. Debit"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
