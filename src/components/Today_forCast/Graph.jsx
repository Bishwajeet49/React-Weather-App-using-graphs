import style from './graph.module.css';
import '../../common.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


function Graph() {

    let forcast_type = 'Temprature';

    const dataPointsDistance = 60;//60px
    let temperatureData = [

        26, 27, 30, 28, 28, 32, 55, 34, 35, 34, 32, 30, // Morning hours
        28, 27, 26, 55, 24, 23, 23, -100, 21, 20, 18, -55 // Afternoon hours
    ];

    // Dummy labels for the 24 hours of the day in railway time format

    //!on the mobile devices show morning,afternoon,evening and nigt 
    //!change the dataPointDistance to 70 and acording to that adjust translateX to fit the aligment of labels with grid Lines
    let labels = [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', // Morning hours
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', // Afternoon hours
    ];

    // labels = ['Morning', 'Afternoon', 'Evening', 'Night'];
    // temperatureData = [ 26, 27, 37, 23]

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatureData, // Replace with your actual hourly temperature data
                fill: false,
                borderColor: 'black',
                pointBackgroundColor: 'rgb(225, 251, 8)',
                tension: 0.4, // Adjust the tension to control the curve (0 to 1)
            },
        ],
    };

    const options = {
        scales: {
            x: {
                // display: false, // Hide the x-axis
                offset: 0,
                display: false, // Hide the x-axis
                grid: {
                    display: false, // Hide the grid background for x-axis
                },
                ticks: {
                    display: false, // Hide the tick labels for x-axis
                },

            },
            y: {
                beginAtZero: true,
                display: false, // Hide the y-axis
                grid: {
                    display: false, // Hide the grid background for y-axis
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Set this to false to hide the legend (labels of datasets)
            },
        },
        elements: {
            line: {
                borderWidth: 2, // Adjust the line width as desired
            },
            point: {
                radius: 5, // Set the radius of the data points
                hoverRadius: 8, // Set the radius of the data points on hover
                hitRadius: 10
            },
        },
        maintainAspectRatio: false//remove the default responsivness of chart


    };

    const customLabelElements = temperatureData.map((data, index) => {

        const iStyle = {

            /* 608px :- 60px(distance between two data points, 8px :- margin */
            left: (0 + index * dataPointsDistance) + 'px',

            transform: `translateX( 0%)`,

        }


        return (
            <div className={style.custom_label} style={iStyle}>
                <div className={style.label_name}>
                    {labels[index]}
                </div>
                <div className={style.data}>
                    {data}
                    <sup className={style.degree}>
                        <span class="material-symbols-outlined degree" >
                            fiber_manual_record
                        </span>
                    </sup>
                </div>
                <div className={style.icon_wraper}>
                    <img src="public/icons/rain.svg" />
                </div>

            </div>
        )

    })


    return (

        <div className={style.graph_container}>
            <div className={style.graph_wrapper} style={{
                width: `${labels.length * dataPointsDistance
                    }px`
            }}>
                <Line data={data} options={options} />
                {/* <div className={style.dummySpace}></div> */}

                {customLabelElements}


            </div>
        </div>


    )
}
export default Graph;

