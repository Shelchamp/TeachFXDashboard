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

// This function will format the data to pass into the PieChart component
// to show talk %.
function lookAtTalkPerc(recording){

    return [
      {
        label: "Student",
        num: recording.studentTalk
      },
      {
        label: "Teacher",
        num: recording.teacherTalk
      },
      {
        label: "Group",
        num: recording.groupTalk
      },
      {
        label: "Silence",
        num: recording.silence
      }
    ];    
}

// This function formats the data so to pass into PieChart
// to see platform usage
function lookAtPlatform(recordings) {
  let counter = {};
  let total = 0;
  let data = [];
  recordings.forEach(recording =>{
    let platform = recording.platform;
    if (counter[platform] === undefined) {
      counter[platform] = 0;
    } 
    counter[platform]++;
    total++;
  });
  // At this point we have a number for each platform. Now find distrubtion. Return an array with
  // a label for each plaform and their corresponding %
  
  Object.keys(counter).forEach(key =>{
    data.push({
      
      label : key.slice(0,1).toUpperCase() + key.slice(1), // Capitalize labels
      num : Math.round((counter[key] / total) * 100)
      
    })  
      
  }) 
  
  return data;
}

let test = lookAtPlatform(arrayData.recordings);


console.log("Here is some test data");
console.log(test);

class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* Pie chart that shows talk % */}
          <PieChart 
            title={"Platform Usage"}
            dataPoints={test}
            />
      </div>
    );
  }
}

export default App;
