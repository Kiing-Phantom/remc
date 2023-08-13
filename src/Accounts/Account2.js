import React, { Component } from 'react';
import AccountInformation from '../AccountInformation/AccountInformation';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

let info = {
    address: "1486 Address Lane",
    status: "Inactive PPM",
    balance: "-32.74"
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
        data: [ 148 ],
        backgroundColor: "cyan",
      },
      {
        label: 'Estimated Usage',
        data: [0, 167, 122, 133, 189, 156, 183],
        backgroundColor: "yellow",
      }
  
    ],
  
  };

class Account1 extends Component {
    render() {
        return (
            <>
                <AccountInformation {...info} />
                <div className="bar">
                    <Bar options={option} data={data} />
                </div>
            </>
        );
    }
}
export default Account1;