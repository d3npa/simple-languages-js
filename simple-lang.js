/*
    MIT License

    Copyright (c) 2020 でんぱ

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

function initLanguage() {
    var head = document.querySelector("head");
    var languageStyle = document.createElement("style");
    var language = document.documentElement.getAttribute("lang");
    languageStyle.setAttribute("id", "language-style");
    head.appendChild(languageStyle);
    setLanguage(language);
}

function setLanguage(language) {
    var languageStyle = document.querySelector("#language-style");
    languageStyle.innerHTML = "t { display: none; } t[" + language + "] { display: initial; }";
}

// Source: https://stackoverflow.com/a/4722710
if (window.addEventListener) {
    window.addEventListener("load", initLanguage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", initLanguage);
}
