import React from 'react';

// Import components
import PieChart from "./pie_chart";
import ColumnChart from "./column_chart";
import BarChart from "./bar_chart";

// Import data
import { arrayData } from "../data/formatted_data";

// Import helper functions
import { lookAtPlatform, lookAtTalkPerc, lookAtUsersSubj, lookAtUsersRole } from "../formatting/data_formatting_functions";

// Talk %
let talkData = lookAtTalkPerc(arrayData.recordings[0]);

// Platform usage
let platformData = lookAtPlatform(arrayData.recordings);

// Usage by role
let roleData = lookAtUsersRole(arrayData.users);

// Usage by subject taught
let subjectData = lookAtUsersSubj(arrayData.users);

const test = [
    <PieChart title={"Talk Percentages"} dataPoints={talkData} />, 
    <PieChart title={"Platform Usage"} dataPoints={platformData} />,
    <ColumnChart title={"Users by Role"} dataPoints={roleData}/>,
    <BarChart title={"Users by Subject Taught"} xAxis="Subject" yAxis="Number of Users" dataPoints={subjectData}/>
 ]

export default class WidgetIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: 0 };

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
                <Header widgets={widgets} active={this.state.active} pickWidget={this.pickWidget} />
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
                className={`widget-title ${bold}`}
                key={i}
                onClick={() => {
                    pickWidget(i);
                }}
            >
                {widget.props.title}
            </li>
        );
    });
    return <ul className="title-container">{widgets}</ul>;
};
    
    