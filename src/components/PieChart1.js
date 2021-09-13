import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';

import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const data = [
  { credit: 'Credit', area: 12 },
  { credit: 'Debit', area: 7 }
];
const demoStyles = () => ({
  chart: {
    paddingRight: '40px',
    paddingTop:'30px',
    // backgroundColor: "#f1f1f1",
    width:"100%",
    height: '460px',
    paddingLeft:'30px'
  },
});

 class PieChart1 extends React.PureComponent {
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
      <Paper style={{height:"460px"}} >
        <Chart
          data={chartData}
                  className={classes.chart}
                  

        
        >
          <PieSeries
            valueField="area"
            argumentField="credit"
            innerRadius={0.4}
            outerRadius={0.8}
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

export default withStyles(demoStyles, { name: 'PieChart1' })(PieChart1);




// const data = [
//   { region: 'Asia', val: 4119626293 },
//   { region: 'Africa', val: 1012956064 },
//   { region: 'Northern America', val: 344124520 },
//   { region: 'Latin America and the Caribbean', val: 590946440 },
//   { region: 'Europe', val: 727082222 },
//   { region: 'Oceania', val: 35104756 },
// ];

// export default class Demo extends React.PureComponent {
  

//   render() {
//     const { data: chartData } = this.state;

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <PieSeries
//             valueField="val"
//             argumentField="region"
//             innerRadius={0.6}
//           />
//           <Title
//             text="The Population of Continents and Regions"
//           />
//           <Animation />
//         </Chart>
//       </Paper>
//     );
//   }
// }
