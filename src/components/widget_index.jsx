import React from 'react';

// Import components
import PieChart from "./pie_chart";
import ColumnChart from "./column_chart";
import BarChart from "./bar_chart";
import LineChart from "./line_chart";

// Import data
import { arrayData } from "../data/formatted_data";

// Import helper functions
import { 
    lookAtPlatform, lookAtTalkPerc, lookAtUsersSubj, 
    lookAtUsersRole, studentTalkTrendByYear, lookAtStudentTalkTrendAll, 
    studentTalkAverageByMonth 
} from "../formatting/data_formatting_functions";

// Talk %
let talkData = lookAtTalkPerc(arrayData.recordings[0]);

// Platform usage
let platformData = lookAtPlatform(arrayData.recordings);

// Usage by role
let roleData = lookAtUsersRole(arrayData.users);

// Usage by subject taught
let subjectData = lookAtUsersSubj(arrayData.users);

// Student talk trend by year

// Average student talk by month - 2018
let studentTalk2018 = studentTalkAverageByMonth(arrayData.recordings, 2018);

// Average student talk by month - 2018
let studentTalk2019 = studentTalkAverageByMonth(arrayData.recordings, 2019);

// All 2019
let allStudentTalk2019 = studentTalkTrendByYear(arrayData.recordings, 2019);

// All 2018
let allStudentTalk2018 = studentTalkTrendByYear(arrayData.recordings, 2018);

const test = [
    <PieChart title={"Talk %"} dataPoints={talkData} />, 
    <PieChart title={"Platform %"} dataPoints={platformData} />,
    <ColumnChart title={"Users by Role"} dataPoints={roleData}/>,
    <BarChart title={"Users by Subject"} xAxis="Subject" yAxis="Number of Users" dataPoints={subjectData}/>,
    <LineChart average={true} title={"Monthly Student Avg 2018"} xAxis={"Student Talk %"} dataPoints={studentTalk2018}/>,
    <LineChart average={true} title={"Monthly Student Avg 2019"} xAxis={"Student Talk %"} dataPoints={studentTalk2019}/>,
    <LineChart title={"2019 Trend"} xAxis={"Student Talk %"} dataPoints={allStudentTalk2019}/>,
    <LineChart title={"2018 Trend"} xAxis={"Student Talk %"} dataPoints={allStudentTalk2018}/>
 ]

export default class WidgetIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: null };

        this.pickWidget = this.pickWidget.bind(this);
    }

    pickWidget(num) {
        this.setState({ active: num });
    }
    render() {
        const widgets = test;
        const activeWidget = widgets[this.state.active];
        return (
            <div>
                <div className="widget-container">
                <Header widgets={widgets} active={this.state.active} pickWidget={this.pickWidget} />
                </div>
                <div>{activeWidget}</div>
            </div>
        );
    }
}

const Header = props => {
    const active = props.active;
    const pickWidget = props.pickWidget;
    const widgets = props.widgets.map((widget, i) => {
        const bold = active === i ? "bold" : "";
        return (
            <li
                className={`widget-title ${bold} box`}
                key={i}
                onClick={() => {
                    pickWidget(i);
                }}
            >
                {widget.props.title}
            </li>
        );
    });
    return <ul className="title-container wrapper">{widgets}</ul>;
};
    
    