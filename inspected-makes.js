document.addEventListener('DOMContentLoaded', () => {
    const ctx ='inspected-makes-chart';
    const inspectedMakesChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Audi', 'BMW', 'Ford', 'Jaguar', 'Mercedes', 'Nissan', 'Peugeot', 'Toyota', 'Vauxhall', 'Volkswagen'],
            datasets: [{
                data: [259, 303, 253, 64, 250, 107, 63, 91, 212, 184],
                models: {
                    'Audi': 'A4',
                    'BMW': '1 Series',
                    'Ford': 'Fiesta',
                    'Jaguar': 'XE & XF',
                    'Mercedes': 'C Class',
                    'Nissan': 'Qashqai',
                    'Peugeot': '208',
                    'Toyota': 'AYGO',
                    'Vauxhall': 'Astra',
                    'Volkswagen': 'Passat',
                },
                backgroundColor: [
                    'rgba(10, 120, 200, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 220, 50, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(75, 75, 75, 0.23)',
                    'rgba(50, 100, 235, 0.3)',
                    'rgba(220, 150, 90, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(255, 99, 10, 0.3)',
                    'rgba(30, 150, 30, 0.3)',
                ],
                borderColor: [
                    'rgba(10, 120, 200, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 220, 50, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 75, 75, 1)',
                    'rgba(50, 100, 235, 1)',
                    'rgba(220, 150, 90, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 10, 1)',
                    'rgba(30, 150, 30, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title : {
                display: true,
                fontSize: 15,
                lineHeight: 3,
                text: 'Top 10 Most Inspected Vehicle Makes on AA Cars'
            },
            legend: {
                labels: {
                    fontSize: 17,
                    padding: 20,
                },
                position: 'bottom',
            },
            onHover: function(e) {
                const activePoints = inspectedMakesChart.getElementsAtEvent(e);

                if (activePoints.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            },
            onClick: function(e) {
                const activePoints = inspectedMakesChart.getElementsAtEvent(e);

                if (activePoints[0]) {
                    const chartData = activePoints[0]['_chart'].config.data;
                    const idx = activePoints[0]['_index'];
                    const label = chartData.labels[idx];

                    document.getElementById('inspected-model').style.background = chartData.datasets[0].backgroundColor[idx];
                    document.getElementById('inspected-model').textContent = `Most inspected ${label} model: ${chartData.datasets[0].models[label]}`;
                }
            },
            responsive: false
        }
    });
});
