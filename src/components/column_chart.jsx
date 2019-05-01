import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default class ColumnChart extends React.Component {
    render() {
        const options = {
            title: {
                text: this.props.title ? this.props.title : "Basic Column Chart"
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: this.props.dataPoints ? this.props.dataPoints.data.map(point=>{
                        return {
                            label: point.label,
                            y: point.num
                        }
                    }) : [
                            { label: "One", y: 10 },
                            { label: "Two", y: 20 },
                            { label: "Three", y: 30 },
                            { label: "Four", y: 40 },
                            { label: "Five", y: 50 }
                        ]
                }
            ]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
