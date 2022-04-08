import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import UserInput from './UserInput';

class ActivityList extends React.Component {
    render() {
        const activityCategories = [
            'creative time',
            'chores',
            'self-care'
    ]
        return (
                <div>
                    <ul>
                        {activityCategories.map(listedActivities => <li>{listedActivities}</li>)}
                    </ul>
                </div>
        )
    }
}

export default ActivityList;