import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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

export function Header() {
    return (_jsx(_Fragment, { children: _jsxs("header", { children: [_jsxs("div", __assign({ id: "banner-left" }, { children: [_jsx("img", { src: "./img/log2.png", alt: "logo" }), _jsx("p", { children: "The Store" }), _jsxs("div", __assign({ id: "cart" }, { children: [_jsx("img", { id: "cart_img", src: "img/cart_icon.png", alt: "" }), _jsxs("p", __assign({ id: "p_cart" }, { children: [" ", _jsx("span", __assign({ id: "span_count" }, { children: "Your cart is empty" })), _jsx("strong", { id: "strong_sum" })] })), _jsx("div", __assign({ id: "cart_content_div" }, { children: _jsx("ul", { id: "cart_list_ul" }) }))] }))] })), _jsxs("div", __assign({ id: "cart_mob", style: { marginRight: "60px" } }, { children: [" ", _jsx("img", { src: "./img/cart_icon.png", style: { left: "5px" }, alt: "cart" }), _jsx("div", __assign({ id: "cart_mob-list", style: { display: "block" } }, { children: _jsx("ul", { id: "cart_list_ul_m" }) }))] }))] }) }));
}
