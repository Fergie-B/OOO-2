// Image and Questions array to export to game.js
export const imageChoices = [{
    bond: [{
        question: "Who is the odd one out of these actors who played James Bond?",
        choice1: 'assets/images/1-bond-question/daniel-craig.jpg',
        choice2: 'assets/images/1-bond-question/david-niven.jpg',
        choice3: 'assets/images/1-bond-question/george-lazenby.jpg',
        choice4: 'assets/images/1-bond-question/roger-moore.jpg',
        correctAnswer: 3
    }]

    flags: [{
        question: "Which of these Countries flags is the odd one out?",
        choice1: 'assets/images/2-flags-question/finland.jpg',
        choice2: 'assets/images/2-flags-question/germany.jpg',
        choice3: 'assets/images/2-flags-question/iceland.jpg',
        choice4: 'assets/images/2-flags-question/morocco.jpg',
        correctAnswer: 4
    }],

    brands: [
        'assets/images/3-brands-question/burger-king.jpg',
        'assets/images/3-brands-question/facebook.jpg',
        'assets/images/3-brands-question/instagram.jpg',
        'assets/images/3-brands-question/twitter.jpg',
    ],

    cities: [
        'assets/images/4-cities-question/london.jpg',
        'assets/images/4-cities-question/new-york.jpg',
        'assets/images/4-cities-question/paris.jpg',
        'assets/images/4-cities-question/sydney.jpg',
    ],

    actors: [
        'assets/images/5-actors-question/christian-bale.jpg',
        'assets/images/5-actors-question/michael-keaton.jpg',
        'assets/images/5-actors-question/robert-downey-jr.jpg',
        'assets/images/5-actors-question/robert-pattinson.jpg',
    ],

    food: [
        'assets/images/6-food-question/banana.jpg',
        'assets/images/6-food-question/carrot.jpg',
        'assets/images/6-food-question/potato.jpg',
        'assets/images/6-food-question/turnip.jpg',
    ],

    celebrities: [
        'assets/images/7-celebrities-question/axl-rose.jpg',
        'assets/images/7-celebrities-question/chris-pratt.jpg',
        'assets/images/7-celebrities-question/gwyneth-paltrow.jpg',
        'assets/images/7-celebrities-question/vince-vaughn.jpg',
    ],

    music: [
        'assets/images/8-music-question/britney-spears.jpg',
        'assets/images/8-music-question/christina-aguilera.jpg',
        'assets/images/8-music-question/dua-lipa.jpg',
        'assets/images/8-music-question/tina-turner.jpg',
    ],
}
];

/**
 * Array of Bonus questions to export to game.js
 */
export const bonusQuestion = [{
     
        question: "Which actor did George Lazenby replace in the James Bond role?",
        answers: {
            answer1: "Roger Moore",
            answer2: "Timothy Dalton",
            answer3: "Sean Connery",
            answer4: "Daniel Craig"
        },
        correctAnswer: "answer3",
},
     {
        question: "Which city in Morrocco has the highest population?",
        answers: {
            answer1: "Tangier",
            answer2: "Casablanca",
            answer3: "Fez",
            answer4: "Marrakesh"
        },
        correctAnswer: "answer2"
 },
     {
        question: "What US State was Burger King founded in?",
        answers: {
            answer1: "Delaware",
            answer2: "California",
            answer3: "Alabama",
            answer4: "Florida"
        },
        correctAnswer: "answer4"
},
     {
        question: "What is the nickname of the Sydney Harbour Bridge?",
        answers: {
            answer1: "The Coathanger",
            answer2: "The Bay Bridge",
            answer3: "The Swans Neck",
            answer4: "The Botany Bridge"
        },
        correctAnswer: "answer1"
},
     {
        question: "What superhero did Robert Downey Jr play?",
        answers: {
            answer1: "Captain America",
            answer2: "Green Arrow",
            answer3: "Iron Man",
            answer4: "Spider Man"
        },
        correctAnswer: "answer3"
 },
     {
        question: "How many varieties of banana are there in the world?",
        answers: {
            answer1: "Over 500",
            answer2: "Over 1000",
            answer3: "Over 5000",
            answer4: "Over 10,000"
        },
        correctAnswer: "answer2"
 },
     {
        question: "In which US city did the band Guns N Roses form?",
        answers: {
            answer1: "Seattle",
            answer2: "Los Angeles",
            answer3: "Dallas",
            answer4: "New York",
        },
        correctAnswer: "answer2",
},
     {
        question: "What is the name of Dua Lipa's first album?",
        answers: {
            answer1: "Past Retro",
            answer2: "Future Nostalgia",
            answer3: "The One",
            answer4: "Dua Lipa"
        },
        correctAnswer: "answer4"
}
];