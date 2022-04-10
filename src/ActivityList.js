import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import UserInput from './UserInput';

class ActivityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityLists: [
                {
                    key: 'creative',
                    activities: ['synth time', 'drawing']
                },
                {
                    key: 'chores',
                    activities: ['clean livingroom table', 'do dishes', 'vaccum']
                },
                {
                    key: 'self-care',
                    activities: ['stretch', 'do a journaling exercise']
            }
        ]
    }
}
    render() {
        return (
                <div>
                    <ul>
                        {activities.map(listedActivities => <li>{listedActivities}</li>)}
                    </ul>
                </div>
        )
    }
}

export default ActivityList;