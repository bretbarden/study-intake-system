import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'


//Register the elements
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
)



const StudyGraphs = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/participants')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);


  useEffect(() => {
    fetch('http://localhost:5000/participants')
      .then((response) => response.json())
      .then((data) => {
          setData(data)
      });
  }, []);

  const studyEntryDates = data.map(entry => entry.studyEntryDate);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  console.log(studyEntryDates)
  const entriesPerMonth = new Array(12).fill(0);
  studyEntryDates.forEach(date => {
    const month = new Date(date).getMonth();
    entriesPerMonth[month]++;
  });

  const cumulativeEnrollments = entriesPerMonth.reduce((acc, val) => {
    if (acc.length === 0) {
      acc.push(val);
    } else {
      acc.push(acc[acc.length - 1] + val);
    }
    return acc;
  }, []);

  const barData = {
    labels: months,
    datasets: [
      {
        label: 'Enrollments per Month',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: entriesPerMonth,
      },
    ],
  };

  const lineData = {
    labels: months,
    datasets: [
      {
        label: 'Cumulative Enrollments',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: cumulativeEnrollments,
      },
    ],
  };



  const options = {
    scales: {
      xAxes: [
        {
          type: 'category', 
          labels: months,
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };



  return (
    <div>
      <div>
        <Bar data={barData} options={options} />
      </div>
      <div>
        <Line data={lineData} options={options} />
      </div>
    </div>
  );
};

export default StudyGraphs;

