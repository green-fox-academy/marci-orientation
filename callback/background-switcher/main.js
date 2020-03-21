var BGImage = /** @class */ (function () {
    function BGImage(order, image, endingChars) {
        var _this = this;
        if (order === void 0) { order = Math.random() * 133333777777; }
        if (image === void 0) { image = (document.querySelector("body").style.backgroundImage =
            "url(https://loremflickr.com/1280/800/hungary/?ord="); }
        if (endingChars === void 0) { endingChars = ")"; }
        this.setBGImage = function () {
            return _this.image + _this.order + _this.endingChars;
        };
        this.order = order;
        this.image = image;
        this.endingChars = endingChars;
    }
    return BGImage;
}());
var temp = new BGImage();
temp.setBGImage();
// const refresh = setInterval(() => {
//   temp.setBGImage();
// }, 500);
// const BGImage = () => {
//   const order = Math.random() * 1132412341234;
//   document.querySelector("body").style.backgroundImage =
//     "url(https://loremflickr.com/1280/800/hungary/?ord=" + ord + ")";
// };
//
// BGImage();
//
// const timedBGImage = setInterval(() => {
//   BGImage();
// }, 5000);
