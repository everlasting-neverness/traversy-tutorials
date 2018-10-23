const options = {
  chart: {
    width: "100%",
    height: 450,
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "population",
      data: [
        8550405,
        3971883,
        2720546,
        2296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
      ]
    }
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#f44336"]
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Largest USA Cities by population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

const chart = new ApexCharts(document.getElementById("chart"), options);

chart.render();

document.querySelector("button").addEventListener("click", function(e) {
  if (e.target.innerText === "Horizontal") {
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: true
        }
      }
    });
    e.target.innerText = "Vertical";
  } else {
    chart.updateOptions({
      plotOptions: {
        bar: {
          horizontal: false
        }
      }
    });
    e.target.innerText = "Horizontal";
  }
})
