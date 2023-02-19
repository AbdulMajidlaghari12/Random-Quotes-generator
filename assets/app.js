const Quoteslist = {
  1: {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  2: {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  3: {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  4: {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  5: {
    quote: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  6: {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  7: {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  8: {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  9: {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  10: {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
    },
  11: {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  12: {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson"
  },
  13: {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  14: {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  15: {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller"
  },
  16: {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  17: {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  18: {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  19: {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  20: {
    quote: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
21: {
     quote:"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life"
    },
22: {
quote: "I have not failed. I've just found 10,000 ways that won't work.",
author: "Thomas A. Edison"
},
23: {
quote: "A person who never made a mistake never tried anything new.",
author: "Albert Einstein"
},
24: {
quote: "I would rather die of passion than of boredom.",
author: "Vincent van Gogh"
},
25: {
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
author: "Winston Churchill"
},
26: {
quote: "The only source of knowledge is experience.",
author: "Albert Einstein"
},
27: {
quote: "You can't build a reputation on what you are going to do.",
author: "Henry Ford"
},
28: {
quote: "It is not the mountain we conquer, but ourselves.",
author: "Sir Edmund Hillary"
},
29: {
quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
author: "Thomas A. Edison"
},
30: {
quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
author: "Maya Angelou"
},
31: {
quote: "The two most important days in your life are the day you are born and the day you find out why.",
author: "Mark Twain"
},
32: {
quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
author: "Nelson Mandela"
},
33: {
quote: "In three words I can sum up everything I've learned about life: it goes on.",
author: "Robert Frost"
},
34: {
quote: "The secret of getting ahead is getting started.",
author: "Mark Twain"
},
35: {
quote: "Life is 10% what happens to us and 90% how we react to it.",
author: "Charles R. Swindoll"
},
36: {
quote: "The greatest weapon against stress is our ability to choose one thought over another.",
author: "William James"
},
37: {
quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
author: "Albert Einstein"
},
38: {
quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
author: "Albert Einstein"
},
39: {
quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
author: "Roy T. Bennett"
},
40: {
quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
author: "Ralph Waldo Emerson"
},
41: {
quote: "Do what you can, with what you have, where you are.",
author: "Theodore Roosevelt"
},
42: {
quote: "The only true wisdom is in knowing you know nothing.",
author: "Socrates"
    },
43: {
    quote: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African Proverb"
  },
  44: {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  45: {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln"
  },
  46: {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  47: {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  48: {
    quote: "The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg"
  },
  49: {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  50: {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  }
}

//Dom element selection 
const quoteDisplay = document.querySelector('#blockquote');
const authorNameDisplay = document.querySelector('cite')
const btn = document.querySelector('button')


function randomIndex()
{
   return  Math.floor(Math.random()*Object.keys(Quoteslist).length+1)
     
} 

//Event lisner 

btn.addEventListener('click',()=> {
    const quoteObj = Quoteslist[randomIndex()];
    const quoteStr = quoteObj.quote;
    const authorName = quoteObj.author;
    quoteDisplay.textContent = `" ${ quoteStr } "`
    authorNameDisplay.textContent = authorName;
})