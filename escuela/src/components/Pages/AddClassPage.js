import React, {Component} from 'react';
import AddClassForm from '../AddClassForm';


export default class AddClassPage extends Component {


    render() {
        return (
            <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <AddClassForm/>
            </div>
        </div>
        )
    }
};