window.onload = function() {
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
