import React, { Component } from 'react';
import './App.css';

// Import components
import PieChart from "./components/pie_chart"
// Import data
import {objData, arrayData} from "./data/formatted_data";
console.log("Here is our state:");
console.log(objData);

const testRecording = arrayData.recordings[0];

console.log("Here is a sameple recording");
console.log(testRecording);




// let test = lookAtPlatform(arrayData.recordings);


console.log("Here is some test data");
// console.log(test);

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* Pie chart that shows talk % */}
          <PieChart 
            // title={"Platform Usage"}
            // dataPoints={test}
            />
      </div>
    );
  }
}

export default App;
