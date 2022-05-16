import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import UserInput from './UserInput';

class ActivityList extends React.Component {
    constructor(props) {
        super(props);

        this.updateActivities = this.updateActivities.bind(this);

        this.state = {
            activityLists: [
                {
                    key: 'creative',
                    value: 'creative',
                    activities: ['synth time', 'drawing']
                },
                {
                    key: 'chores',
                    value: 'chores',
                    activities: ['clean livingroom table', 'do dishes', 'vaccum']
                },
                {
                    key: 'self-care',
                    value: 'self-care',
                    activities: ['stretch', 'do a journaling exercise']
                }
            ]
        }
    }

    updateActivities(newActivity) {
        let updatedActivities = [...this.state.activities, newActivity]
        this.setState({
            activities: updatedActivities
        });
    }



    render() {
        return (

            <div>
                <UserInput buttonClicker={this.updateActivities} />
                <ul>
                    {this.state.activityLists.map(listedActivities => <li> {listedActivities.key} </li>)}
                </ul>
            </div >
        )
    }
}

export default ActivityList;