let inputRange = document.getElementById('progress-slider'),
  maxValue = 100,
  currValue,
  rafID;

inputRange.min = 0;
inputRange.max = maxValue;

function animateHandler() {
  const transX = currValue - maxValue;

  inputRange.value = currValue;

  if (currValue < 20) {
    inputRange.classList.remove('ltpurple');
  }
  if (currValue < 40) {
    inputRange.classList.remove('purple');
  }
  if (currValue < 60) {
    inputRange.classList.remove('pink');
  }
}

function unlockStartHandler() {
  window.cancelAnimationFrame(rafID);
  currValue = +this.value;
}
inputRange.addEventListener('input', function () {
  console.log('progress', this.value);
  if (this.value > 20) {
    inputRange.classList.add('ltpurple');
  }
  if (this.value > 40) {
    inputRange.classList.add('purple');
  }
  if (this.value > 60) {
    inputRange.classList.add('pink');
  }

  if (this.value < 20) {
    inputRange.classList.remove('ltpurple');
  }
  if (this.value < 40) {
    inputRange.classList.remove('purple');
  }
  if (this.value < 60) {
    inputRange.classList.remove('pink');
  }
});

let volumeControl = document.getElementById('volume-control'),
  maxVal = 100,
  speedTwo = 5,
  currVal,
  rafIDTwo;

volumeControl.min = 0;
volumeControl.max = maxVal;

function animateHandler() {
  const transTwo = currVal - maxVal;

  volumeControl.value = currVal;

  if (currVal < 20) {
    volumeControl.classList.remove('ltpurple');
  }
  if (currVal < 40) {
    volumeControl.classList.remove('purple');
  }
  if (currVal < 60) {
    volumeControl.classList.remove('pink');
  }
}

function unlockStartHandlerTwo() {
  window.cancelAnimationFrame(rafIDTwo);
  currVal = +this.value;
}
volumeControl.addEventListener('input', function () {
  if (this.value > 20) {
    volumeControl.classList.add('ltpurple');
  }
  if (this.value > 40) {
    volumeControl.classList.add('purple');
  }
  if (this.value > 60) {
    volumeControl.classList.add('pink');
  }

  if (this.value < 20) {
    volumeControl.classList.remove('ltpurple');
  }
  if (this.value < 40) {
    volumeControl.classList.remove('purple');
  }
  if (this.value < 60) {
    volumeControl.classList.remove('pink');
  }
});
