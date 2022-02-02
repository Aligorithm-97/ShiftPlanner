import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import './Chart.css'

const state = {
    labels: ['Admin', 'Group Green', 'Group Blue',
             'Group Purple', 'Department Manager'],
    datasets: [
      {
        label: 'Employee',
        backgroundColor: ['rgba(255,0,0,1)','rgba(0,255,0,1)','rgba(0,0,255,1)','rgba(127,0,127,1)','rgba(127,63,0,1)'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [3,30,30,30,7]
      }
    ]
  }


class Chart extends Component {
    render() {
        return (

        <div class="card"> 
             <h1><i class="fa fa-users"></i> Employees</h1>
                <Doughnut
                    data={state}
                    options={{
                    title:{
                    display:true,
                    text:'Employee distribution',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    }
                    }}
         /></div>
              
                
           

    );
  }
}

export default Chart;