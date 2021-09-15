import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';

import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const data = [
  { credit: 'Credit', area: 12 },
  { credit: 'Debit', area: 7 }
];
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    height: '100px',
    paddingTop:'30px',
    
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
    width: "31px",
    marginRight:"29px",
    marginLeft:"2px",
    paddingRight:"30px",
      flexFlow: "column wrap",
      flexDirection:"row wrap",
      paddingRight:'5%',
      // marginTop:"360px"
      // backgroundColor:"#f1f1f1"

    // height: "50px"
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <>
  {/* <hr></hr> */}
    <Legend.Label className={classes.label} {...restProps} />

  </>
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '40px',
    // paddingTop:'30px',
    backgroundColor: "#f1f1f1",
    width:"480px",
    // height: '500px',
    paddingLeft:'260px',
    marginTop:"240px",
    mrginRight:"290px",
    
  },
  svg:{
    height: "180px",
    // width: "460px",
    // marginTop:"200px"

  }
 
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
      <Paper style={{height:"0px", marginTop:"80px", paddingLeft:"15px",  marginLeft:"5px", width:"450px", marginBottom:"50px"}} >
      // {/* // <Paper> */}
        <Chart
          data={chartData}
                  className={classes.chart, classes.svg}
        >
          <PieSeries
            valueField="area"
            argumentField="credit"
            innerRadius={0.6}
            outerRadius={0.9}
            // className="pieClass"
            // style={{marginTop:"-160px", display:"inline-block",paddingTop:"-200px" }}
          />
          
          {/* <Title 
            text="Credit vs. Debit" style={{marginBottom:"-40px", display:"inline-block"}}
          /> */}
          <EventTracker />
         <HoverState/>
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} marginLeft="-20px" />
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
