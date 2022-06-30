import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import UserInput from './UserInput';
import ListDisplay from './ListDisplay';

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
                    activities: ['tidy coffee table', 'do dishes', 'vacuum']
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

    //curStats => ({
    //    ...curStats,
    //    currentValue: curStats.key === currentKey ? 0 : curStats.currentValue
    //}));

    displayList(category) {
        let selectedList = this.state.activityLists.map(
            categorySelection => categorySelection.activities
        );
        return (
            console.log(selectedList)
        )
    }


    // trying to get lists to display on click

    render() {

        return (

            <div>

                {/* <UserInput buttonClicker={this.updateActivities} /> */}
                {/* {this.state.activityLists.map(categories =>
                    <li> {categories.key} </li>
                )} */}
                <ListDisplay category="creative" listClick={() => { this.displayList('creative') }} selection='' />
                <ListDisplay category="chores" listClick={() => { this.displayList('chores') }} selection='' />
                <ListDisplay category="self-care" listClick={() => { this.displayList('self-care') }} selection='' />
            </div >
        )
    }
}

export default ActivityList;