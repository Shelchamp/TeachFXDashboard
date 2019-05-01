import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



export default class PieChart extends React.Component {
    
    render() {
        const options = {
            // exportEnabled: true, // This turns off the dropdown
            animationEnabled: true,
            title: {
                text: this.props.title ? this.props.title : "" // Chart title
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: this.props.dataPoints ? this.props.dataPoints.map(point =>{
                    return { y: point.num, label: point.label}
                }) : [ {y: 50, label: "Half"}, {y:50, label: "Half"}]
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                // onRef={ref => this.chart = ref}
                    />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
    