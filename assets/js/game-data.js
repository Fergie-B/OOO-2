// Image and Questions array to export to game.js
const imageChoices = [
    {
        question: "Who is the Odd One Out of these actors who played James Bond?",
        choice1: 'assets/images/daniel-craig.jpg',
        choice2: 'assets/images/david-niven.jpg',
        choice3: 'assets/images/george-lazenby.jpg',
        choice4: 'assets/images/roger-moore.jpg',
        correctAnswer: 3,
        answerReason: "George Lazenby was from Australia, all the other Bonds from England!"
    },
    {
        question: "Which of these Countries flags is the Odd One Out?",
        choice1: 'assets/images/finland.jpg',
        choice2: 'assets/images/germany.jpg',
        choice3: 'assets/images/iceland.jpg',
        choice4: 'assets/images/morocco.jpg',
        correctAnswer: 4,
        answerReason: "Morocco is the odd one out as it is in Africa, the other countries are all European!"
    },
    {
        question: "Which of these popular brands is the Odd One Out?",
        choice1: 'assets/images/burger-king.jpg',
        choice2: 'assets/images/facebook.jpg',
        choice3: 'assets/images/instagram.jpg',
        choice4: 'assets/images/twitter.jpg',
        correctAnswer: 1,
        answerReason: "Burger King is a fast food brand, Facebook, Twitter and Instagram are Social Media Brands!"
    },
    {
        question: "Which  is the Odd One Out of the Major cities?",
        choice1: 'assets/images/london.jpg',
        choice2: 'assets/images/new-york.jpg',
        choice3: 'assets/images/paris.jpg',
        choice4:  'assets/images/sydney.jpg',
        correctAnswer: 4,
        answerReason: ""
    },
    {
        question: "Who  is the Odd One Out of these Hollywood actors?",
        choice1: 'assets/images/christian-bale.jpg',
        choice2: 'assets/images/michael-keaton.jpg',
        choice3: 'assets/images/robert-downey-jr.jpg',
        choice4: 'assets/images/robert-pattinson.jpg',
        correctAnswer: 3,
        answerReason: "Robert Downey Jr is the odd one out as he has never played Batman!"
    },
    {
        question: "Which of the below foods is the Odd One Out?",
        choice1: 'assets/images/banana.jpg',
        choice2: 'assets/images/carrot.jpg',
        choice3: 'assets/images/potato.jpg',
        choice4: 'assets/images/turnip.jpg',
        correctAnswer: 1,
        answerReason: "Banana is the only fruit, the rest are all vegetables!"
    },
    {
        question: "Who is the Odd One out of these celebrities?",
        choice1: 'assets/images/axl-rose.jpg',
        choice2: 'assets/images/chris-pratt.jpg',
        choice3: 'assets/images/gwyneth-paltrow.jpg',
        choice4: 'assets/images/vince-vaughn.jpg',
        correctAnswer: 1,
        answerReason: "Axl Rose is a singer, the rest are actors or actresses."
    },
    {
        question: "Which of these singers is the Odd One Out?",
        choice1: 'assets/images/britney-spears.jpg',
        choice2: 'assets/images/christina-aguilera.jpg',
        choice3: 'assets/images/dua-lipa.jpg',
        choice4: 'assets/images/tina-turner.jpg',
        correctAnswer: 3,
        answerReason: "Dua Lipa is from England the rest are American singers."
    },
];

/**
 * Array of Bonus questions to export to game.js
 */
const bonusQuestion = [{
     bond: [{
        question: "Which actor did George Lazenby replace in the James Bond role?",
        answer1: "Roger Moore",
        answer2: "Timothy Dalton",
        answer3: "Sean Connery",
        answer4: "Daniel Craig",
        correctAnswer: 3
    }],
    flags: [{
        question: "Which city in Morrocco has the highest population?",
        answer1: "Tangier",
        answer2: "Casablanca",
        answer3: "Fez",
        answer4: "Marrakesh",
        correctAnswer: 2
    }],
    brands: [{
        question: "What US State was Burger King founded in?",
        answer1: "Delaware",
        answer2: "California",
        answer3: "Alabama",
        answer4: "Florida",
        correctAnswer: 4
    }],
    cities: [{
        question: "What is the nickname of the Sydney Harbour Bridge?",
        answer1: "The Coathanger",
        answer2: "The Bay Bridge",
        answer3: "The Swans Neck",
        answer4: "The Botany Bridge",
        correctAnswer: 1
    }],
    actors: [{
        question: "What superhero did Robert Downey Jr play?",
        answer1: "Captain America",
        answer2: "Green Arrow",
        answer3: "Iron Man",
        answer4: "Spider Man",
        correctAnswer: 3
    }],
    food: [{
        question: "How many varieties of banana are there in the world?",
        answer1: "Over 500",
        answer2: "Over 1000",
        answer3: "Over 5000",
        answer4: "Over 10,000",
        correctAnswer: 2
    }],
    celebrities: [{
        question: "In which US city did the band Guns N Roses form?",
        answer1: "Seattle",
        answer2: "Los Angeles",
        answer3: "Dallas",
        answer4: "New York",
        correctAnswer: 2
    }],
    music: [{
        question: "What is the name of Dua Lipa's first album?",
        answer1: "Past Retro",
        answer2: "Future Nostalgia",
        answer3: "The One",
        answer4: "Dua Lipa",
        correctAnswer: 4
    }],
}];