const ordersByCustomerContext = document.getElementById(
    "revenue-by-customer-chart"
);

const ordersByCustomerData = {
    labels: ordersByCustomerReport.labels,
    datasets: [
        {
            label: "Customer revenue",
            data: ordersByCustomerReport.data,
            fill: true,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};

const ordersByCustomerConfig = {
    type: "bar",
    data: ordersByCustomerData,
};

const ordersByCustomerChart = new Chart(
    ordersByCustomerContext,
    ordersByCustomerConfig
);
