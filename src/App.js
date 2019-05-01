import React, { Component } from 'react';
import './App.css';
import './stylesheets/widgets.css';
import './stylesheets/reset.css';

// Import components
import PieChart from "./components/pie_chart";
import ColumnChart from "./components/column_chart";
import BarChart from "./components/bar_chart";
import WidgetIndex from "./components/widget_index";

// Import data
import {objData, arrayData} from "./data/formatted_data";
console.log("Here is our state:");
console.log(objData);

// Import helper functions
import { lookAtPlatform, lookAtTalkPerc, lookAtUsersSubj, lookAtUsersRole} from "./formatting/data_formatting_functions";
const testRecording = arrayData.recordings[0];

console.log("Here is a sameple recording");
console.log(testRecording);




let test = lookAtUsersSubj(arrayData.users);


console.log("Here is some test data");
console.log(test);

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* Pie chart that shows talk % */}
          {/* <PieChart 
            // title={"Platform Usage"}
            // dataPoints={test}
            /> */}
            {/* <ColumnChart title={"Users by Role"} dataPoints={test}/> */}
            {/* <BarChart title={"Users by Subject Taught"} xAxis={"Subjects"} yAxis={"Users"} dataPoints={test}/> */}
            <WidgetIndex/>
      </div>
    );
  }
}

export default App;
