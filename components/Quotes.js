const quotes = [
  "Believe in yourself, and the world will believe in you. The power to succeed is within you.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big, start small, act now.",
  "Every great achievement was once considered impossible.",
  "You don't have to be great to start, but you have to start to be great.",
  "Discipline is the bridge between goals and accomplishment.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Fall seven times, stand up eight.",
  "The future depends on what you do today."
];

export function getRandomQuote(){
  const index = Math.floor(Math.random()*quotes.length)
  return quotes[index]
}

