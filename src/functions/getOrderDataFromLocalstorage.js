export function getOrderDataFromLocalstorage() {
    var Order_Data_JSON = localStorage.getItem("Order_Data");
    if (Order_Data_JSON == null)
        return [];
    return JSON.parse(Order_Data_JSON);
}
