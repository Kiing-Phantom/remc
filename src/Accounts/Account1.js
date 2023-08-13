import React, { Component } from 'react';
import AccountInformation from '../AccountInformation/AccountInformation';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

let info = {
    address: "1482 Address Lane",
    status: "Active PPM",
    balance: "142.33"
}

const option = {

    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Weekly Power Usage",
      },
    },
  };
  
  const data = {
    labels:["08/01/2023", "08/02/2023", "08/03/2023", "08/04/2023", "08/05/2023", "08/06/2023", "08/07/2023"],
    datasets: [
      {
        label:'Actual Usage',
        data: [ 62, 74, 66, 80, 45, 90 ],
        backgroundColor: "cyan",
      },
      {
        label: 'Estimated Usage',
        data: [0, 0, 0, 0, 0, 0, 83],
        backgroundColor: "yellow",
      }
  
    ],
  
  };

class Account1 extends Component {
    render() {
        return (
            <>
                <AccountInformation {...info} />
                <div className='bar'>
                    <Bar options={option} data={data} />
                </div>
            </>
        );
    }
}
export default Account1;