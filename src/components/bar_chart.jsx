import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class BarChart extends React.Component {
    render() {
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: this.props.title ? this.props.title : "No title given"
            },
            axisX: {
                title: this.props.xAxis ? this.props.xAxis : "No x axis given",
                reversed: true,
            },
            axisY: {
                title: this.props.yAxis ? this.props.yAxis : "No y axis given"
                // labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: this.props.dataPoints ? this.props.dataPoints.data.map( point =>{
                    return {
                        label : point.label,
                        y : point.num
                    }
                }) : [
                    { y: 2200000000, label: "Facebook" },
                    { y: 1800000000, label: "YouTube" },
                    { y: 800000000, label: "Instagram" },
                    { y: 563000000, label: "Qzone" },
                    { y: 376000000, label: "Weibo" },
                    { y: 336000000, label: "Twitter" },
                    { y: 330000000, label: "Reddit" }
                ]
            }]
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