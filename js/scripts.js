document.addEventListener('DOMContentLoaded', function() {
    const purpleData = {
        labels: ["purple and", "purple flowers.", "purple flower", "purple color.", "purple bubble", "purple with", "purple water", "purple in", "purple coat", "purple because", "purple one", "purple hair", "purple ponytail", "purple roses", "purple stuff", "purple puddle", "purple blossoms", "purple on", "purple to", "purple jello."],
        datasets: [{
            label: 'Frequency',
            data: [29, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1],
            backgroundColor: 'purple'
        }]
    };

    const blueData = {
        labels: ["blue and", "blue or", "blue but", "blue surface", "blue were", "blue with", "blue beads,", "blue suit,", "blue sunny", "blue formal", "blue door.", "blue spotlights", "blue eyes", "blue sun", "blue pieces"],
        datasets: [{
            label: 'Frequency',
            data: [6, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: 'blue'
        }]
    };

    const whiteData = {
        labels: ["white and", "white plastic", "white striped", "white negligee", "white dorm", "white with", "white cat", "white lettering,", "white walls,", "white shirt,", "white candles.", "white dress", "white stucco", "white garbage", "white room.", "white woman.", "white bone", "white flower.", "white orchid.", "white cars"],
        datasets: [{
            label: 'Frequency',
            data: [3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: 'lightgray'
        }]
    };

    const ctxPurple = document.getElementById('purpleChart').getContext('2d');
    const ctxBlue = document.getElementById('blueChart').getContext('2d');
    const ctxWhite = document.getElementById('whiteChart').getContext('2d');

    new Chart(ctxPurple, {
        type: 'bar',
        data: purpleData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctxBlue, {
        type: 'bar',
        data: blueData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctxWhite, {
        type: 'bar',
        data: whiteData,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
