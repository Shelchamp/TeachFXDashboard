import React, { Component } from 'react';
import './App.css';
import './stylesheets/widgets.css';
import './stylesheets/reset.css';
import './stylesheets/navbar.css';
import './stylesheets/chart.css';

// Import components
// import PieChart from "./components/pie_chart";
// import ColumnChart from "./components/column_chart";
// import BarChart from "./components/bar_chart";
// import LineChart from "./components/line_chart";
import WidgetIndex from "./components/widget_index";
import NavBar from "./components/nav_bar";

// Testing

// Import data
// import {objData, arrayData} from "./data/formatted_data";
// console.log("Here is our state:");
// console.log(objData);

// Import helper functions
// import { lookAtPlatform, lookAtTalkPerc, lookAtUsersSubj, lookAtUsersRole, lookAtStudentTalkTrendAll, studentTalkTrendByYear, studentTalkAverageByMonth} from "./formatting/data_formatting_functions";
// const testRecording = arrayData.recordings[0];

// console.log("Here is a sameple recording");
// console.log(testRecording);

// let test = lookAtStudentTalkTrendAll(arrayData.recordings);
// let test = studentTalkTrendByYear(arrayData.recordings, 2018);
// studentTalkAverageByMonth(arrayData.recordings, 2019);
// console.log(test);

class App extends Component {
  
  render() {
    return (
      <div className="App">    
            <NavBar/>      
            <WidgetIndex/>
      </div>
    );
  }
}

export default App;
