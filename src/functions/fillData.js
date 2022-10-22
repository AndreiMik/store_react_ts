import { products } from "../data/products";
import { getOrderDataFromLocalstorage } from "./getOrderDataFromLocalstorage";
export function fillData(id, choosed_product_id) {
    var choosed_product_id_filtered = [];
    var count_id = [];
    for (var _i = 0, choosed_product_id_1 = choosed_product_id; _i < choosed_product_id_1.length; _i++) {
        var id_1 = choosed_product_id_1[_i];
        if (count_id[id_1] === undefined) {
            count_id[id_1] = 1;
            if (!choosed_product_id_filtered.includes(id_1)) {
                choosed_product_id_filtered.push(id_1);
            }
        }
        else {
            count_id[id_1]++;
        }
    }
    var choosed_products = [];
    for (var _a = 0, choosed_product_id_filtered_1 = choosed_product_id_filtered; _a < choosed_product_id_filtered_1.length; _a++) {
        var id_2 = choosed_product_id_filtered_1[_a];
        var product_price = void 0;
        if (products[id_2 - 1].offer !== 0) {
            product_price = products[id_2 - 1].offer;
        }
        else {
            product_price = products[id_2 - 1].price;
        }
        choosed_products.push({
            id: id_2,
            name: products[id_2 - 1]["name"],
            price: product_price,
            count: count_id[id_2],
            offer: products[id_2 - 1]["offer"],
        });
    }
    var total_price = 0;
    var product;
    for (var _b = 0, choosed_products_1 = choosed_products; _b < choosed_products_1.length; _b++) {
        product = choosed_products_1[_b];
        var calculated_price = 0;
        calculated_price = product.price * product.count;
        total_price = total_price + calculated_price;
    }
    var Order_Data = {
        products: choosed_products,
        price: total_price,
        amount: choosed_product_id.length,
    };
    localStorage.setItem("choosed_product_id", JSON.stringify(choosed_product_id));
    localStorage.setItem("Order_Data", JSON.stringify(Order_Data));
    var Order_Data_saved = getOrderDataFromLocalstorage();
    return Order_Data_saved;
}
