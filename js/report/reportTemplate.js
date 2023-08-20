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

    topCustomer.innerText = revenueByCustomerReport.topCustomers[0].client_name
    topCustomerRevenue.innerText = "Revenue: USD $" + revenueByCustomerReport.topCustomers[0].revenue


    ingredientNameText.innerText = ingredientReport.topIngredient.ingredient_name
    ingredientRequestsText.innerText = "Requests: " + ingredientReport.topIngredient.requests
    
    monthNameText.innerText = monthsOfYear[revenueByMonthReport.topMonth.month - 1]
    revenueByMonthText.innerText = "Revenue: USD $" + revenueByMonthReport.topMonth.revenue


    topCustomer1NameText.innerText = revenueByCustomerReport.topCustomers[0].client_name
    topCustomer1RevenueText.innerText = "USD $" + revenueByCustomerReport.topCustomers[0].revenue
    topCustomer2NameText.innerText = revenueByCustomerReport.topCustomers[1].client_name
    topCustomer2RevenueText.innerText = "USD $" + revenueByCustomerReport.topCustomers[1].revenue
    topCustomer3NameText.innerText = revenueByCustomerReport.topCustomers[2].client_name
    topCustomer3RevenueText.innerText = "USD $" + revenueByCustomerReport.topCustomers[2].revenue
}, 1000)