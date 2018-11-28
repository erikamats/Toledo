import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  fetchClasses } from '../actions';

class ClassList extends Component {

    componentDidMount(){
        this.props.fetchClasses();
    }

    render(){
        return this.props.classes.map(data =>{
            return (
                <div>
                <h2>This is the list of Classes in the DB</h2>
                <h4 key={data.id}>{data.name}</h4>
                <h4 key={data.id}>{data.subject}</h4>
                </div>
            )
        })
    }
}

function mapStateToProps(state) {
    return { classes: state.classes}
}

export default connect(mapStateToProps, {fetchClasses})(ClassList)