import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ProductTable } from "./ProductTable";
import { products } from "../data/products";
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

export function Main() {
    return (_jsx(_Fragment, { children: _jsxs("main", { children: [_jsxs("div", __assign({ id: "content" }, { children: [_jsx("figure", __assign({ id: "splash" }, { children: _jsx("img", { src: "./img/splash2.png", alt: "" }) })), _jsxs("article", __assign({ id: "store" }, { children: [_jsx("h1", { children: "This is The Store" }), _jsxs("h4", { children: [" ", "your one-stop ", _jsx("br", {}), "fashion destination"] }), _jsx("p", { children: "Shop from over 850 of the best brands. Including our own label. Plus, get your daily fix of the freshest style, celebrity and music news." })] }))] })), _jsxs("div", __assign({ className: "hr-divider" }, { children: [_jsx("hr", { className: "left" }), "our favorites", _jsx("hr", { className: "right" })] })), _jsx("table", __assign({ className: "tab", id: "tab1" }, { children: _jsx("tbody", { children: _jsx("tr", { children: products.map(function (item) { return (_jsx(ProductTable, { product: item }, item.id)); }) }) }) })), _jsx("table", __assign({ className: "tab-m", id: "tab2" }, { children: _jsxs("tbody", { children: [_jsx("tr", { children: products.map(function (item, index) {
                                    return index < 2 && (_jsx(ProductTable, { product: item }, item.id));
                                }) }), _jsx("tr", { children: products.map(function (item, index) {
                                    return index > 1 &&
                                        index < 4 && (_jsx(ProductTable, { product: item }, item.id));
                                }) })] }) }))] }) }));
}
