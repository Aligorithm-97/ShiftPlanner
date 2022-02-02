import React, { Component } from 'react'
import './Leave.css'

class Leave extends Component {
    constructor(props) {
        super(props);
        state: { }
    }
    render() {
        return (
            <div class="card" style={{overflow: "scroll", height:"350px",width:"350px"}}>
                <h1><i class="fa fa-plane"></i>  {this.props.title}</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">National Holidays</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>New year</td>
                            <td>January 1, 2021</td>
                        </tr>
                        <tr>
                            
                            <td>National Sovereignty and Children's Day</td>
                            <td>April 23, 2021</td>
                        </tr>
                        <tr>
                            
                            <td>Labor and Solidarity Day</td>
                            <td>May 1, 2021</td>
                        </tr>
                        <tr>
                            
                            <td>Ramadan Feast</td>
                            <td>12 May 2021</td>
                        </tr>
                        <tr>
                            
                            <td>Commemoration of Atatürk, Youth and Sports Day</td>
                            <td>19 May 2021</td>
                        </tr>
                        <tr>
                            
                            <td>Victory Day</td>
                            <td>August 30, 2021</td>
                        </tr>
                        <tr>
                           
                            <td>Republic Day</td>
                            <td>29 October 2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Leave;