import React from 'react';
import {connect} from 'react-redux';
import {boredAction} from '../actions/boredActions'


// https://www.boredapi.com/api/activity

const Bored = (props) => {
    return (
        <>
        <h2>Click the button to eliminate your boredom!</h2>
        <h2>Here's an idea, {props.newIdea}</h2>
        <button onClick={props.boredAction}>Click Me!</button>
        
        </>
    )
}

const mapStateToProps = state => {
    return {
        newIdea: state.newIdea
    };
};


export default connect(mapStateToProps, {boredAction})(Bored);