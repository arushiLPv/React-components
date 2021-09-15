import React from "react";
import Chart1 from "../components/Chart1";
import Barchart1 from "../components/Barchart1";
import CustomSearchBar1 from "../components/CustomSearchBar1";
import PieChart1 from "../components/PieChart1";
import Barchart2 from "../components/Barchart2";
import CustomizedTables from "../components/CustomizedTables";
import AddAccount from "../components/AddAccount";
import RemoveAccount from "../components/RemoveAccount";
import GenerateReport from "../components/GenerateReport";
import { Client1Groups } from "../data/Client1Groups";
import DataGridTable from "../components/DataGridTable";
import AdditionOfAccounts from "../components/AdditionOfAccounts";
import "../CSS/charts.css";
import "../CSS/cards.css";
import Demo from "../components/demo";


function GroupsView() {
  return (
    <div>

      
      {/* // <Header/> */}
      <div style={{ backgroundColor: "white" }}>
        <CustomSearchBar1
          data={Client1Groups}
          style={{
            width: 300,
            marginTop: "25px",
            justifyContent: "flex-end",
            marginLeft: "1145px",
            borderRadius: "55px",
            padding: "10px",
          }}
        />
      </div>
      {/* <div className="groupsViewDiv"> */}
      

      <div className="chartsdiv">
        <div className="chart1">
          <Chart1 />
        </div>
         {/* <AddAccount /> */}
        
      </div>
      {/* <div style={{ display: "inline-block", float:"right", width:"400px"  }}> */}
          <AddAccount />
        {/* </div> */}
      {/* <div className="piechart1"> */}
        {/* <PieChart1 /> */}
      {/* </div> */}
      {/* <div className="divSection2">
          {/* <div className="generateReport">
              <GenerateReport style={{display:"inline-block"}}/>
          </div> */}

      {/* <div className="barchart2"> */}
        <Barchart2 />
      {/* </div> */}
      {/* <div className="piechart1"> */}
         
        {/* <img  style={{ marginLeft:"350px", marginTop:"-120px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqZN1k8sxai_AK084_LDKANrIxCQiv1kzqg&usqp=CAU"/> */} 
      {/* </div>  */}
      {/* </div> */}

      {/* <div className="dataGrid">
      
      <DataGridTable />
      </div> */}

      {/* <CustomizedTables id="table1" /> */}

      {/* <Tables/> */}
      {/* <Footer/> */}
      <Demo />
      {/* <DataGridTable/> */}



{/* <div class="row"><div class="col-lg-6 col-xl-3"><div class="card-stats mb-4 mb-xl-0 card"><div class="card-body"><div class="row"><div class="col"><h5 class="text-uppercase text-muted mb-0 card-title">Traffic</h5><span class="h2 font-weight-bold mb-0">350,897</span></div><div class="col-auto col"><div class="icon icon-shape bg-danger text-white rounded-circle shadow"><i class="fas fa-chart-bar"></i></div></div></div><p class="mt-3 mb-0 text-muted text-sm"><span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span> <span class="text-nowrap">Since last month</span></p></div></div></div><div class="col-lg-6 col-xl-3"><div class="card-stats mb-4 mb-xl-0 card"><div class="card-body"><div class="row"><div class="col"><h5 class="text-uppercase text-muted mb-0 card-title">New users</h5><span class="h2 font-weight-bold mb-0">2,356</span></div><div class="col-auto col"><div class="icon icon-shape bg-warning text-white rounded-circle shadow"><i class="fas fa-chart-pie"></i></div></div></div><p class="mt-3 mb-0 text-muted text-sm"><span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span> <span class="text-nowrap">Since last week</span></p></div></div></div><div class="col-lg-6 col-xl-3"><div class="card-stats mb-4 mb-xl-0 card"><div class="card-body"><div class="row"><div class="col"><h5 class="text-uppercase text-muted mb-0 card-title">Sales</h5><span class="h2 font-weight-bold mb-0">924</span></div><div class="col-auto col"><div class="icon icon-shape bg-yellow text-white rounded-circle shadow"><i class="fas fa-users"></i></div></div></div><p class="mt-3 mb-0 text-muted text-sm"><span class="text-warning mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span> <span class="text-nowrap">Since yesterday</span></p></div></div></div><div class="col-lg-6 col-xl-3"><div class="card-stats mb-4 mb-xl-0 card"><div class="card-body"><div class="row"><div class="col"><h5 class="text-uppercase text-muted mb-0 card-title">Performance</h5><span class="h2 font-weight-bold mb-0">49,65%</span></div><div class="col-auto col"><div class="icon icon-shape bg-info text-white rounded-circle shadow"><i class="fas fa-percent"></i></div></div></div><p class="mt-3 mb-0 text-muted text-sm"><span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span> <span class="text-nowrap">Since last month</span></p></div></div></div></div> */}



      </div>
    // {/* </div> */}
  );
}

export default GroupsView;
