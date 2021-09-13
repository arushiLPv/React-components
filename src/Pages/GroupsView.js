import React from "react";
import Chart1 from "../components/Chart1";
import Barchart1 from "../components/Barchart1";
import CustomSearchBar from "../components/CustomSearchBar";
import PieChart1 from "../components/PieChart1";
import Barchart2 from "../components/Barchart2";
import CustomizedTables from "../components/CustomizedTables";
import AddAccount from "../components/AddAccount";
import RemoveAccount from "../components/RemoveAccount";
import GenerateReport from "../components/GenerateReport";
import { Client1Groups } from "../data/Client1Groups";
import DataGridTable from "../components/DataGridTable";
import "../CSS/charts.css";

function GroupsView() {
  return (
    <div>
      {/* <Header/> */}
      <div style={{ backgroundColor: "white" }}>
        {" "}
        <CustomSearchBar
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
      <div style={{ display: "inline-block" }}>
        <AddAccount />
        <RemoveAccount />
      </div>
      <div className="chartsdiv">
        <div className="chart1">
          <Chart1 />
        </div>
        {/* <div className="chart2">
          <Barchart1 />
        </div> */}
        <div className="piechart1">
          <PieChart1 />
        </div>
      </div>

      {/* <div className="divSection2">
          {/* <div className="generateReport">
              <GenerateReport style={{display:"inline-block"}}/>
          </div> */}

      {/* <div className="barchart2">
        <Barchart2 />
      </div> */}
      {/* <div className="piechart1">
        <PieChart1  />
      </div> 
      </div>*/}

      {/* <div className="dataGrid"> */}
        <DataGridTable />
      {/* </div> */}

      {/* <CustomizedTables id="table1" /> */}

      {/* <Tables/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default GroupsView;
