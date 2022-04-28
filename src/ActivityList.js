import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import UserInput from './UserInput';

class ActivityList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activities: ['synth time', 'do dishes', 'stretch', 'do a journaling exercise'] };
        this.updateActivities = this.updateActivities.bind(this);

        // Version 2 gets categories
        // this.state = {
        //     activityLists: [
        //         {
        //             key: 'creative',
        //             activities: ['synth time', 'drawing']
        //         },
        //         {
        //             key: 'chores',
        //             activities: ['clean livingroom table', 'do dishes', 'vaccum']
        //         },
        //         {
        //             key: 'self-care',
        //             activities: ['stretch', 'do a journaling exercise']
        //         }
        //     ]
        // }
    }

    updateActivities(newActivity) {
        let updatedActivities = [...this.state.activities, newActivity]
        this.setState({
            activities: updatedActivities
        });
        console.log(updatedActivities)
    }

    render() {

        return (

            <div>
                <UserInput buttonClicker={this.updateActivities} />
                <ul>
                    {this.state.activities.map(listedActivities => <li>{listedActivities}</li>)}
                </ul>
            </div>
        )
    }
}

export default ActivityList;