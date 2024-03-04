// Sample data for the chart
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales Data",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      data: [50, 60, 70, 65, 80, 75],
    },
  ],
};

// Options for the chart
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

// Initialize the chart
const ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});

// Function to update the chart based on dropdown selection
function updateChart() {
  const chartType = document.getElementById("select-chart").value;

  // Destroy the current chart
  myChart.destroy();

  // Create a new chart based on the selected type
  myChart = new Chart(ctx, {
    type: chartType,
    data: data,
    options: options,
  });
}
