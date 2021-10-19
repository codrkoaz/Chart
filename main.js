const salesChart = document.querySelector('#myChart').getContext('2d');

let delayed;

// Gradient fill
let gradientFill = salesChart.createLinearGradient(0, 0, 3, 800);
gradientFill.addColorStop(0, 'rgba(252,252,252,1)');
gradientFill.addColorStop(1, 'rgba(204,102,102,.7)');

//Labels years for Spirited Away
const labels = [
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
];

//  Data sales for Spirited Away
const data = {
    labels,
        datasets: [{
            data: [10.5, 10.1, 10.8, 10.9, 10.3, 11.1, 11.3, 11, 11.8, 11.3],
            label: 'Spirited Away Sales',
            label: 'Sales',
            fill: true,
            backgroundColor: gradientFill,
            borderColor: '#de70a1',
            color: '#9b1c31',
            pointBackgroundColor: '#4F6440',
            tension: 0.3,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 3.5,
        hitRadius: 30,
        hoverRadius: 10,
        borderWidth: 1,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return '$' + value + 'm';
                    },
                },
            },
        },
    },
};

const myChart = new Chart(salesChart, config);

