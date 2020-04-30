const button = document.getElementById('submit-button');
const upvote = document.getElementById('upvote');
const downvote = document.getElementById('downvote');
const voteCount = document.getElementById('vote-count');
let clicks = 0;

upvote.addEventListener('click', () => {
  upvote.src = 'assets/upvoted.png';
  downvote.src = 'assets/downvote.png';
  clicks += 1;
  voteCount.innerHTML = clicks;
});

downvote.addEventListener('click', () => {
  downvote.src = 'assets/downvoted.png';
  upvote.src = 'assets/upvote.png';
  clicks -= 1;
  voteCount.innerHTML = clicks;
});
