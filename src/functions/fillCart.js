import { getOrderDataFromLocalstorage } from "./getOrderDataFromLocalstorage";
import { fillData } from "../functions/fillData";
export function fillCart(choosed_product_id) {
    var Order_Data = getOrderDataFromLocalstorage();
    if (Order_Data.products.length === 0) {
        var span_count = document.getElementById("span_count");
        span_count.innerHTML = "Your cart is empty";
        var strong_sum = document.getElementById("strong_sum");
        strong_sum.innerHTML = "";
        return;
    }
    var span_count = document.getElementById("span_count");
    span_count.innerHTML = Order_Data.amount.toString() + " item(s) in your cart";
    var cart_price = document.getElementById("strong_sum");
    cart_price.innerHTML = "&euro;" + Order_Data.price.toFixed(2).toString();
    var div_cart = document.getElementById("cart_content_div");
    div_cart.style.display = "block";
    var div_cart_m = document.getElementById("cart_mob-list");
    div_cart_m.style.display = "block";
    var ul_cart = document.getElementById("cart_list_ul");
    var ul_cart_m = document.getElementById("cart_list_ul_m");
    div_cart.appendChild(ul_cart);
    div_cart_m.appendChild(ul_cart_m);
    function deleteChilds() {
        while (ul_cart.lastElementChild) {
            ul_cart.removeChild(ul_cart.lastElementChild);
        }
        while (ul_cart_m.lastElementChild) {
            ul_cart_m.removeChild(ul_cart_m.lastElementChild);
        }
    }
    deleteChilds();
    var _loop_1 = function (i) {
        var li_cart = document.createElement("li");
        var li_cart_m = document.createElement("li");
        ul_cart.appendChild(li_cart);
        ul_cart_m.appendChild(li_cart_m);
        var table_li = document.createElement("table");
        var table_li_m = document.createElement("table");
        li_cart.appendChild(table_li);
        li_cart_m.appendChild(table_li_m);
        table_li.setAttribute("id", "cart_table");
        table_li_m.setAttribute("id", "cart_table_m");
        var tr_1 = table_li.insertRow();
        var tr_1_m = table_li_m.insertRow();
        var td_1_1 = tr_1.insertCell();
        var td_1_1_m = tr_1_m.insertCell();
        td_1_1.style.position = "relative";
        td_1_1_m.style.position = "relative";
        td_1_1.style.width = "50px";
        td_1_1_m.style.width = "50px";
        td_1_1.rowSpan = 2;
        td_1_1_m.rowSpan = 2;
        td_1_1.innerHTML =
            '<img class="cart_product_img" src="img/' +
                Order_Data.products[i].name +
                '.jpg" alt="">';
        td_1_1_m.innerHTML =
            '<img class="cart_product_img" src="img/' +
                Order_Data.products[i].name +
                '.jpg" alt="">';
        var td_1_2 = tr_1.insertCell();
        var td_1_2_m = tr_1_m.insertCell();
        td_1_2.innerHTML = Order_Data.products[i].name;
        td_1_2_m.innerHTML = Order_Data.products[i].name;
        var td_1_3 = tr_1.insertCell();
        var td_1_3_m = tr_1_m.insertCell();
        td_1_3.rowSpan = 2;
        td_1_3_m.rowSpan = 2;
        td_1_3.style.position = "relative";
        td_1_3_m.style.position = "relative";
        td_1_3.style.width = "40px";
        td_1_3_m.style.width = "40px";
        var img = document.createElement("img");
        var img_m = document.createElement("img");
        img.setAttribute("class", "cart_product_delete_img");
        img_m.setAttribute("class", "cart_product_delete_img");
        img.src = "img/delete.png";
        img_m.src = "img/delete.png";
        img.alt = "";
        img_m.alt = "";
        var deleteButton = document.createElement("button");
        deleteButton.name = "deleted_element_id";
        deleteButton.id = Order_Data.products[i].id.toString();
        deleteButton.setAttribute("class", "btn_del");
        var deleteButton_m = document.createElement("button");
        deleteButton_m.name = "deleted_element_id";
        deleteButton_m.id = Order_Data.products[i].id.toString();
        deleteButton_m.setAttribute("class", "btn_del");
        deleteButton.appendChild(img);
        deleteButton_m.appendChild(img_m);
        td_1_3.appendChild(deleteButton);
        td_1_3_m.appendChild(deleteButton_m);
        var tr_2 = table_li.insertRow();
        var tr_2_m = table_li_m.insertRow();
        var td_2_1 = tr_2.insertCell();
        var td_2_1_m = tr_2_m.insertCell();
        td_2_1.innerHTML =
            Order_Data.products[i].count.toString() +
                "x" +
                Order_Data.products[i].price +
                "=&euro;" +
                Order_Data.products[i].price * Order_Data.products[i].count;
        td_2_1_m.innerHTML =
            Order_Data.products[i].count.toString() +
                "x" +
                Order_Data.products[i].price +
                "=&euro;" +
                Order_Data.products[i].price * Order_Data.products[i].count;
        deleteButton.onclick = function () {
            var idSTR = deleteButton.id;
            var id = +idSTR;
            choosed_product_id.splice(choosed_product_id.indexOf(id), 1);
            deleteChilds();
            fillData(id, choosed_product_id);
            Order_Data = getOrderDataFromLocalstorage();
            var cart_amount = document.getElementById("span_count");
            cart_amount.innerHTML =
                Order_Data.amount.toString() + " item(s) in your cart";
            var cart_price = document.getElementById("strong_sum");
            cart_price.innerHTML = "&euro;" + Order_Data.price.toFixed(2).toString();
            var div_cart = document.getElementById("cart_content_div");
            var ul_cart = document.getElementById("cart_list_ul");
            div_cart.appendChild(ul_cart);
            fillCart(choosed_product_id);
            if (Order_Data.products.length === 0) {
                div_cart.style.display = "none";
            }
        };
        deleteButton_m.onclick = function () {
            var idSTR = deleteButton_m.id;
            var id = +idSTR;
            choosed_product_id.splice(choosed_product_id.indexOf(id), 1);
            deleteChilds();
            fillData(id, choosed_product_id);
            Order_Data = getOrderDataFromLocalstorage();
            var cart_amount = document.getElementById("span_count");
            cart_amount.innerHTML =
                Order_Data.amount.toString() + " item(s) in your cart";
            var cart_price = document.getElementById("strong_sum");
            cart_price.innerHTML = "&euro;" + Order_Data.price.toFixed(2).toString();
            var div_cart_m = document.getElementById("cart_mob-list");
            if (Order_Data.products.length != 0) {
                div_cart_m.style.display = "block";
            }
            var ul_cart_m = document.getElementById("cart_list_ul_m");
            div_cart_m.appendChild(ul_cart_m);
            fillCart(choosed_product_id);
            if (Order_Data.products.length === 0) {
                div_cart_m.style.display = "none";
            }
            var div_cart = document.getElementById("cart_content_div");
            if (Order_Data.products.length === 0) {
                div_cart.style.display = "none";
            }
        };
    };
    for (var i = 0; i < Order_Data.products.length; i++) {
        _loop_1(i);
    }
}
