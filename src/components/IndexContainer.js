import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Main } from "./Main";
import { Footer } from "./Footer";
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

export function IndexContainer() {
    return (_jsxs("div", __assign({ id: "container" }, { children: [_jsx("div", { id: "strip-top" }), _jsx(Header, {}), _jsx(Menu, {}), _jsx(Main, {}), _jsx(Footer, {})] })));
}
