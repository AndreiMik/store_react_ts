import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
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

function emailValidate(email_text) {
    var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    var p_verification = document.getElementById("p_verification");
    var img_verification_failed = document.getElementById("verification_failed_img");
    if (regex.test(email_text) == true && email_text !== "") {
        p_verification.setAttribute("class", "verification_ok_p");
        p_verification.innerHTML = "Subscription successful.";
        img_verification_failed === null || img_verification_failed === void 0 ? void 0 : img_verification_failed.setAttribute("src", "img/ok_icon.png");
    }
    else {
        p_verification.setAttribute("class", "verification_failed_p");
        p_verification.innerHTML = "Email verification failed..";
        img_verification_failed === null || img_verification_failed === void 0 ? void 0 : img_verification_failed.setAttribute("src", "img/exclamation_icon.png");
    }
}
export function Footer() {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var submitHandler = function (event) {
        event.preventDefault();
        emailValidate(email);
    };
    var changeHandler = function (event) {
        setEmail(event.target.value);
    };
    return (_jsx(_Fragment, { children: _jsx("footer", { children: _jsxs("div", __assign({ id: "foot-content" }, { children: [_jsx("article", { children: _jsxs("ul", { children: [_jsx("li", __assign({ className: "li-top" }, { children: "top categories" })), _jsxs("li", { children: [" ", _jsx("a", __assign({ href: "" }, { children: "women" })), " "] }), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "men" })) }), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "junior" })) }), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "accessories" })) })] }) }), _jsx("article", { children: _jsxs("ul", { children: [_jsx("li", __assign({ className: "li-top" }, { children: "customer service" })), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "returns" })) }), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "shipping" })) }), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "about us" })) }), _jsx("li", { children: _jsx("a", __assign({ href: "" }, { children: "contact us" })) })] }) }), _jsx("article", __assign({ className: "foot3" }, { children: _jsxs("ul", __assign({ id: "subscribe_ul" }, { children: [_jsx("li", __assign({ className: "li-top" }, { children: "newsletter subscribe" })), _jsx("div", __assign({ className: "envelope_div" }, { children: _jsxs("form", __assign({ onSubmit: submitHandler, action: "" }, { children: [_jsx("img", { id: "envelope", src: "./img/envelope.png", alt: "" }), _jsx("input", { id: "envelope_input", name: "email", onChange: changeHandler, value: email, placeholder: "Enter your email address", type: "text" }), _jsx("button", __assign({ className: "store_button", name: "subscribe_btn", type: "submit" }, { children: "Subscribe" }))] })) })), _jsxs("li", { children: [_jsx("img", { id: "verification_failed_img", src: "", alt: "" }), _jsx("span", __assign({ id: "p_verification" }, { children: " " }))] })] })) }))] })) }) }));
}
