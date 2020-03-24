"use strict";
var GIPHY = /** @class */ (function () {
    function GIPHY(API_URL, API_KEY, myRequest, myGIF, limitGIF) {
        if (API_URL === void 0) { API_URL = "https://api.giphy.com/v1/gifs/search"; }
        if (API_KEY === void 0) { API_KEY = "vtAtAQfLZXRy6YbSA8EPnPzwfwtRvbcQ"; }
        if (myRequest === void 0) { myRequest = new XMLHttpRequest(); }
        if (myGIF === void 0) { myGIF = document.getElementById("gif-container"); }
        if (limitGIF === void 0) { limitGIF = 16; }
        this.API_URL = API_URL;
        this.API_KEY = API_KEY;
        this.myRequest = myRequest;
        this.myGIF = myGIF;
        this.limitGIF = limitGIF;
    }
    GIPHY.prototype.load = function () {
        var _this = this;
        this.myRequest.onload = function () {
            if (_this.myRequest.status === 200) {
                var myResponse = JSON.parse(_this.myRequest.responseText);
                myResponse.data.forEach(function (e) {
                    var GIF = document.createElement("img");
                    GIF.setAttribute("src", e.images.fixed_width_small_still.url);
                    _this.myGIF.appendChild(GIF);
                });
            }
        };
    };
    GIPHY.prototype.open = function () {
        this.myRequest.open("GET", this.API_URL + "?api_key=" + this.API_KEY + "&q=random&limit=" + this.limitGIF);
    };
    GIPHY.prototype.send = function () {
        this.myRequest.send();
    };
    return GIPHY;
}());
var GIFGenerator = new GIPHY();
GIFGenerator.load();
GIFGenerator.open();
GIFGenerator.send();
