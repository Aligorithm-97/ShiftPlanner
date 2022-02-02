import React, { Component } from 'react'
import './ExtraShift.css'

class ExtraShift extends Component {
    constructor(props) {
        super(props);
        state: { }
    }
    render() {
        return (

            <div class="card">
                <h1><i class="fa fa-clock"></i> Extra Shift Requests</h1>
                <i>{this.props.name} has requested</i>

            </div>
        )
    }
}
export default ExtraShift;
