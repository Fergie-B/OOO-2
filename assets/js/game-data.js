// Image and Questions array to export to game.js
const imageChoices = [
    {
        question: "Who is the Odd One Out of these actors who played James Bond?",
        choice1: 'Daniel Craig',
        choice2: 'David Niven',
        choice3: 'George Lazenby',
        choice4: 'Roger Moore',
        correctAnswer: 3,
        answerReason: "George Lazenby was from Australia, all the other Bonds from England!"
    },
    {
        question: "Which of these Countries is the Odd One Out?",
        choice1: 'Finland',
        choice2: 'Germany',
        choice3: 'Iceland',
        choice4: 'Morocco',
        correctAnswer: 4,
        answerReason: "Morocco is the odd one out as it is in Africa, the other countries are all European!"
    },
    {
        question: "Which of these popular brands is the Odd One Out?",
        choice1: 'Burger King',
        choice2: 'Facebook',
        choice3: 'Instagram',
        choice4: 'Twitter',
        correctAnswer: 1,
        answerReason: "Burger King is a fast food brand, Facebook, Twitter and Instagram are Social Media Brands!"
    },
    {
        question: "Which  is the Odd One Out of these four Major cities?",
        choice1: 'London',
        choice2: 'Madrid',
        choice3: 'Sydney',
        choice4:  'Paris',
        correctAnswer: 3,
        answerReason: "Sydney is the odd one out, the other cities are all in Europe!"
    },
    {
        question: "Who is the Odd One Out of these Hollywood actors?",
        choice1: 'Christian Bale',
        choice2: 'Michael Keaton',
        choice3: 'Robert Downey Jr',
        choice4: 'Robert Pattinson',
        correctAnswer: 3,
        answerReason: "Robert Downey Jr is the odd one out as he has never played Batman!"
    },
    {
        question: "Which of the below listed foods is the Odd One Out?",
        choice1: 'Banana',
        choice2: 'Carrot',
        choice3: 'Potato',
        choice4: 'Turnip',
        correctAnswer: 1,
        answerReason: "Banana is the only fruit, the rest are all vegetables!"
    },
    {
        question: "Who is the Odd One out of these celebrities?",
        choice1: 'Axl Rose',
        choice2: 'Chris Pratt',
        choice3: 'Gwynet Paltrow',
        choice4: 'Vince Vaughn',
        correctAnswer: 1,
        answerReason: "Axl Rose is a singer, the rest are actors or actresses."
    },
    {
        question: "Which of these singers is the Odd One Out?",
        choice1: 'Britney Spears',
        choice2: 'Christina Aguilera',
        choice3: 'Dua Lipa',
        choice4: 'Tina Turner',
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