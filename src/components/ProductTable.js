import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { fillData } from "../functions/fillData";
import { fillCart } from "../functions/fillCart";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var choosed_product_id = [];
function get_choosed_product_id_FromLocalstorage() {
    var choosed_product_id_JSON = localStorage.getItem("choosed_product_id");
    if (choosed_product_id_JSON == null)
        return [];
    return JSON.parse(choosed_product_id_JSON);
}
var choosed_product_id_old = get_choosed_product_id_FromLocalstorage();
if (choosed_product_id_old.length !== 0) {
    for (var _i = 0, choosed_product_id_old_1 = choosed_product_id_old; _i < choosed_product_id_old_1.length; _i++) {
        var id = choosed_product_id_old_1[_i];
        choosed_product_id.push(id);
    }
}
setTimeout(function () {
    fillCart(choosed_product_id);
}, 100);
export function ProductTable(props) {
    function addProduct() {
        var id = props.product.id;
        if (id == null) {
            return;
        }
        choosed_product_id.push(id);
        fillData(id, choosed_product_id);
        fillCart(choosed_product_id);
    }
    return (_jsx(_Fragment, { children: props.product.offer === 0 ? (_jsxs("td", { children: [_jsx("img", { src: "./img/" + props.product.name + ".jpg", alt: "" }), _jsx("br", {}), props.product.name, _jsx("br", {}), "\u20AC", props.product.price.toFixed(2), _jsx("br", {}), _jsx("button", __assign({ onClick: addProduct }, { children: "Add" }))] })) : (_jsxs("td", { children: [_jsx("img", { src: "./img/" + props.product.name + ".jpg", alt: "" }), _jsx("br", {}), props.product.name, _jsx("br", {}), _jsxs("del", { children: ["\u20AC", props.product.price.toFixed(2)] }), " ", _jsxs("span", __assign({ style: { color: "red" } }, { children: ["\u20AC", props.product.offer.toFixed(2)] })), _jsx("br", {}), _jsx("button", __assign({ onClick: addProduct }, { children: "Add" }))] })) }));
}
