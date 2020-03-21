class BGImage {
  private readonly order: number;
  private readonly image: any;
  private readonly endingChars: string;

  constructor(
    order: number = Math.random() * 133333777777,
    image: any = (document.querySelector("body").style.backgroundImage =
      "url(https://loremflickr.com/1280/800/hungary/?ord="),
    endingChars: string = ")"
  ) {
    this.order = order;
    this.image = image;
    this.endingChars = endingChars;
  }

  public setBGImage = (): string => {
    return this.image + this.order + this.endingChars;
  };
}

const temp = new BGImage();
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
