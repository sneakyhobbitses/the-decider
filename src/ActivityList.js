import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import UserInput from './UserInput';

class ActivityList extends React.Component {
    constructor(props) {
        super(props);

        this.updateActivities = this.updateActivities.bind(this);
        this.displayList = this.displayList.bind(this);

        this.state = {
            activityLists: [
                {
                    key: 'creative',
                    category: 'creative',
                    activities: ['synth time', 'drawing']
                },
                {
                    key: 'chores',
                    category: 'chores',
                    activities: ['clean livingroom table', 'do dishes', 'vaccum']
                },
                {
                    key: 'self-care',
                    category: 'self-care',
                    activities: ['stretch', 'do a journaling exercise']
                }
            ]
        }
    }

    updateActivities(newActivity) {
        let updatedActivities = [...this.state.activityLists, newActivity]
        this.setState({
            activities: updatedActivities
        });
    }

    displayList(selection) {
        // console.log(selection);
        selection.map(activity => console.log(activity))
    }

    render() {
        return (

            <div>
                {/* <UserInput buttonClicker={this.updateActivities} /> */}
                {this.state.activityLists.map(categories =>
                    <li onClick={() => {
                        this.displayList(categories.activities);
                    }}> {categories.key} </li>
                )}
            </div >
        )
    }
}

export default ActivityList;