const topIngredient = document.getElementById("top-ingredient")
const topIngredientRequests = document.getElementById("top-ingredient-requests")
const topMonth = document.getElementById("top-revenue-month")
const topMonthRevenue = document.getElementById("top-revenue-month-revenue")
const topCustomer = document.getElementById("top-customer")
const topCustomerRevenue = document.getElementById("top-customer-revenue")

const ingredientNameText = document.getElementById("ingredient-name")
const ingredientRequestsText = document.getElementById("ingredient-requests")
const monthNameText = document.getElementById("month-name")
const revenueByMonthText = document.getElementById("revenue-by-month")
const topCustomer1NameText = document.getElementById("top-customer-1")
const topCustomer1RevenueText = document.getElementById("top-customer-1-revenue")
const topCustomer2NameText = document.getElementById("top-customer-2")
const topCustomer2RevenueText = document.getElementById("top-customer-2-revenue")
const topCustomer3NameText = document.getElementById("top-customer-3")
const topCustomer3RevenueText = document.getElementById("top-customer-3-revenue")

setTimeout(() => {
    topIngredient.innerText = ingredientReport.topIngredient.ingredient_name
    topIngredientRequests.innerText = "Requests: " + ingredientReport.topIngredient.requests

    topMonth.innerText = monthsOfYear[revenueByMonthReport.topMonth.month - 1]
    topMonthRevenue.innerText = "Revenue: USD $" + revenueByMonthReport.topMonth.revenue

    topCustomer.innerText = ordersByCustomerReport.topCustomers[0].client_name
    topCustomerRevenue.innerText = "Orders: " + ordersByCustomerReport.topCustomers[0].orders


    ingredientNameText.innerText = ingredientReport.topIngredient.ingredient_name
    ingredientRequestsText.innerText = "Requests: " + ingredientReport.topIngredient.requests
    
    monthNameText.innerText = monthsOfYear[revenueByMonthReport.topMonth.month - 1]
    revenueByMonthText.innerText = "Revenue: USD $" + revenueByMonthReport.topMonth.revenue


    topCustomer1NameText.innerText = ordersByCustomerReport.topCustomers[0].client_name
    topCustomer1RevenueText.innerText = "Orders: " + ordersByCustomerReport.topCustomers[0].orders
    topCustomer2NameText.innerText = ordersByCustomerReport.topCustomers[1].client_name
    topCustomer2RevenueText.innerText = "Orders: " + ordersByCustomerReport.topCustomers[1].orders
    topCustomer3NameText.innerText = ordersByCustomerReport.topCustomers[2].client_name
    topCustomer3RevenueText.innerText = "Orders: " + ordersByCustomerReport.topCustomers[2].orders
}, 1000)