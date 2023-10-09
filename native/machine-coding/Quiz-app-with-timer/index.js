//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
     {
        "question": "A flashing red traffic light signifies that a driver should do what?",
        "options": [
            "stop",
            "speed up",
            "proceed with caution",
            "honk the horn"
        ],
        correct: "stop",
        id: "0"
    },
    {
        "question": "A knish is traditionally stuffed with what filling?",
        "options": [
            "potato",
            "creamed corn",
            "lemon custard",
            "raspberry jelly"
        ],
        correct: "potato",
        id: "1"
    },
    {
        "question": "A pita is a type of what?",
        "options": [
            "fresh fruit",
            "flat bread",
            "French tart",
            "friend bean dip"
        ],
        correct: "flat bread",
        id: "2"
    },
    {
        "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
        "options": [
            "landscape",
            "caricature",
            "still life",
            "Impressionism"
        ],
        correct: "caricature",
        id: "3"
    },
    {
        "question": "A second-year college student is usually called a what?",
        "options": [
            "sophomore",
            "senior",
            "freshman ",
            "junior "
        ],
        correct: "sophomore",
        id: "4"
    },
    {
        "question": "A student who earns a J.D. can begin his or her career as a what?",
        "options": [
            "lawyer",
            "bricklayer",
            "doctor",
            "accountant"
        ],
        correct: "lawyer",
        id: "5"
    },
    {
        "question": "A triptych is a work of art that is painted on how many panels?",
        "options": [
            "two",
            "three",
            "five",
            "eight"
        ],
        correct: "three",
        id: "6"
    },
    {
        "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
        "options": [
            "oneself",
            "other people",
            "little made large",
            "hued in green and blue"
        ],
        correct: "other people",
        id: "7"
    },
    {
        "question": "According to a popular slogan, what state should people not 'mess with'?",
        "options": [
            "New York",
            "Texas",
            "Montana",
            "Rhode Island"
        ],
        correct: "Texas",
        id: "8"
    },
    {
        "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
        "options": [
            "tuna",
            "laundry",
            "popcorn",
            "coffee"
        ],
        correct: "coffee",
        id: "9"
    },
    {
        "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
        "options": [
            "chicken",
            "rabbit",
            "moose",
            "snake"
        ],
        correct: "rabbit",
        id: "10"
    },
    {
        "question": "According to Greek mythology, who was Apollo's twin sister?",
        "options": [
            "Aphrodite",
            "Artemis",
            "Venus",
            "Athena"
        ],
        correct: "Artemis",
        id: "11"
    },
    {
        "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
        "options": [
            "cursing them",
            "blessing a child",
            "counting money",
            "passing time"
        ],
        correct: "cursing them",
        id: "12"
    },
    {
        "question": "According to legend, in what country are you most likely to meet a leprechaun?",
        "options": [
            "Ireland",
            "Poland",
            "Greenland",
            "Scotland"
        ],
        correct: "Ireland",
        id: "13"
    },
    {
        "question": "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
        "options": [
            "Poodle",
            "Beagle",
            "German shepherd",
            "Labrador retriever"
        ],
        correct: "Labrador retriever",
        id: "14"
    },
    {
        "question": "According to the Bible, Moses and Aaron had a sister named what?",
        "options": [
            "Jochebed",
            "Ruth",
            "Leah",
            "Miriam"
        ],
        correct: "Miriam",
        id: "15"
    },
    {
        "question": "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
        "options": [
            "calm",
            "blue",
            "windy",
            "really big"
        ],
        correct: "blue",
        id: "16"
    },
    {
        "question": "According to the Mother Goose nursery rhyme, which child is full of woe?",
        "options": [
            "Monday's child",
            "Wednesday's child",
            "Thursday's child",
            "Saturday's child"
        ],
        correct: "Wednesday's child",
        id: "17"
    },
    {
        "question": "According to the popular saying, what should you do 'when in Rome'?",
        "options": [
            "watch your wallet",
            "see the Coliseum",
            "as the Romans do",
            "don't drink the water"
        ],
        correct: "as the Romans do",
        id: "18"
    },
    {
        "question": "According to the proverb, necessity is the mother of what?",
        "options": [
            "Invention",
            "Luck",
            "Problems",
            "Procrastination"
        ],
        correct: "Invention",
        id: "19"
    },
    {
        "question": "According to the title of a popular children's TV show, what color is Bear's big house?",
        "options": [
            "red",
            "green",
            "purple",
            "blue"
        ],
        correct: "blue",
        id: "20"
    },
    {
        "question": "According to the USDA, which food group should you eat the most servings of per day?",
        "options": [
            "vegetables",
            "dairy",
            "meats",
            "breads"
        ],
        correct: "breads",
        id: "21"
    },
    {
        "question": "Ada Lovelace is credited with being the first person to have made what?",
        "options": [
            "a computer program",
            "a souffle",
            "a brassiere",
            "a mystery novel"
        ],
        correct: "a computer program",
        id: "22"
    },
    {
        "question": "After Prince Charles, who is next in line to be the king of England?",
        "options": [
            "Prince William",
            "Prince Andrew",
            "Prince Edward",
            "Fresh Prince"
        ],
        correct: "Prince William",
        id: "23"
    },
    {
        "question": "An airplane's black box is usually what color?",
        "options": [
            "black",
            "white",
            "orange",
            "purple"
        ],
        correct: "orange",
        id: "24"
    },
    {
        "question": "As of 1999, which state has the most Girl Scouts?",
        "options": [
            "California",
            "Illinois",
            "New York",
            "Pennsylvania"
        ],
        correct: "California",
        id: "25"
    },
    {
        "question": "Astronaut John Glenn served as a pilot in what branch of the military?",
        "options": [
            "Army",
            "Air Force",
            "Marines",
            "Navy"
        ],
        correct: "Marines",
        id: "26"
    },
    {
        "question": "At the equator, how fast is the earth's surface turning?",
        "options": [
            "about 100 miles per hour",
            "about 500 miles per hour",
            "about 1000 miles per hour",
            "about 2000 miles per hour"
        ],
        correct: "about 1000 miles per hour",
        id: "27"
    },
    {
        "question": "At what age can someone first attend an R-rated movie without an accompanying adult?",
        "options": [
            "15",
            "17",
            "18",
            "21"
        ],
        correct: "18",
        id: "28"
    },
    {
        "question": "Backgammon is a how many player game?",
        "options": [
            "Two",
            "Three",
            "Four",
            "Six"
        ],
        correct: "Two",
        id: "29"
    },
    {
        "question": "Before he went into coaching, Phil Jackson played for which of the following NBA teams?",
        "options": [
            "Boston Celtics",
            "Los Angeles Lakers",
            "New York Knicks",
            "Philadelphia 76ers"
        ],
        correct: "New York Knicks",
        id: "30"
    },
    {
        "question": "By what name is Bob Keeshan better known?",
        "options": [
            "Bozo the Clown",
            "Pee Wee Herman",
            "Captain Kangaroo",
            "Buffalo Bob"
        ],
        correct: "Captain Kangaroo",
        id: "31"
    },
    {
        "question": "By what collective name do Christians refer to God the Father, God the Son and the Holy Ghost?",
        "options": [
            "the Trio",
            "the Troika",
            "the Triumvirate",
            "the Trinity"
        ],
        correct: "the Trinity",
        id: "32"
    },
    {
        "question": "By what nickname is the Federal National Mortgage Association known?",
        "options": [
            "Morty",
            "FEMA",
            "Freddie Mac",
            "Fannie Mae"
        ],
        correct: "Fannie Mae",
        id: "33"
    },
    {
        "question": "Cheddar cheese got its name from a village in what country?",
        "options": [
            "England",
            "France",
            "Switzerland",
            "Denmark"
        ],
        correct: "England",
        id: "34"
    },
    {
        "question": "Cheese is a necessary ingredient in which of these dishes?",
        "options": [
            "sushi",
            "french fries",
            "veal parmigiano",
            "chicken pot pie"
        ],
        correct: "veal parmigiano",
        id: "35"
    },
    {
        "question": "During what war did Francis Scott Key write the words to 'The Star-Spangled Banner'?",
        "options": [
            "American Revolution",
            "War of 1812",
            "Civil War",
            "World War I"
        ],
        correct: "War of 1812",
        id: "36"
    },
    {
        "question": "During which war did US troops fight the Battle of New Orleans?",
        "options": [
            "American Revolution",
            "Civil War",
            "Mexican War",
            "War of 1812"
        ],
        correct: "War of 1812",
        id: "37"
    },
    {
        "question": "Each year in pro baseball, the player voted as the best fielder at his position wins what?",
        "options": [
            "a brand new car",
            "the Gold Glove",
            "the Silver Bat",
            "the Brass Baseball"
        ],
        correct: "the Gold Glove",
        id: "38"
    },
    {
        "question": "Elephant tusks are made of what material?",
        "options": [
            "coral",
            "ivory",
            "bone",
            "calcium"
        ],
        correct: "ivory",
        id: "39"
    },
    {
        "question": "Excluding wisdom teeth, how many adult teeth do humans have?",
        "options": [
            "28",
            "32",
            "35",
            "40"
        ],
        correct: "28",
        id: "40"
    },
    {
        "question": "For a man and woman on a date, 'dutch treat' means what?",
        "options": [
            "the man pays",
            "the woman pays",
            "the Dutch pay",
            "each pays their own way"
        ],
        correct: "each pays their own way",
        id: "41"
    },
    {
        "question": "For what purpose would you use an awl?",
        "options": [
            "to shoot ducks",
            "to polish floors",
            "to make holes",
            "to weigh fruit"
        ],
        correct: "to make holes",
        id: "42"
    },
    {
        "question": "From 1971 to 1997, the Democratic Republic of Congo was known as what?",
        "options": [
            "Zaire",
            "Angola",
            "Rhodesia",
            "Belgian Congo"
        ],
        correct: "Zaire",
        id: "43"
    },
    {
        "question": "From what language does the term 'R.S.V.P.' originate?",
        "options": [
            "Russian",
            "Italian",
            "Portuguese",
            "French"
        ],
        correct: "French",
        id: "44"
    },
    {
        "question": "From whom does the Lutheran Church get its name?",
        "options": [
            "Martin Luther King Jr",
            "Martin Luther",
            "Luther Vandross",
            "Lex Luthor"
        ],
        correct: "Martin Luther",
        id: "45"
    },
    {
        "question": "Gerry Adams is the president of what organization?",
        "options": [
            "Greenpeace",
            "NASCAR",
            "Sinn Fein",
            "PLO"
        ],
        correct: "Sinn Fein",
        id: "46"
    },
    {
        "question": "Girls of what religious community traditionally wear bonnets?",
        "options": [
            "Amish",
            "Sikh",
            "Roman Catholic",
            "Christian"
        ],
        correct: "Amish",
        id: "47"
    },
    {
        "question": "How are actors Charlie Sheen and Emilio Estevez related?",
        "options": [
            "they're cousins",
            "they're brothers",
            "they're father and son",
            "they're uncle and nephew"
        ],
        correct: "they're brothers",
        id: "48"
    },
    {
        "question": "How do you express 3/4 as a decimal?",
        "options": [
            ".25",
            ".50",
            ".75",
            ".90"
        ],
        correct: ".75",
        id: "49"
    },
    {
        "question": "How is 4:00 pm expressed in military time?",
        "options": [
            "1600",
            "004",
            "0400 ",
            "4:00"
        ],
        correct: "1600",
        id: "50"
    },
    {
        "question": "How is the Arabic numeral for '2' written?",
        "options": [
            "2",
            "II",
            "I",
            "ii"
        ],
        correct: "2",
        id: "51"
    },
    {
        "question": "How is the word 'ambulance' normally written on the front of American ambulances?",
        "options": [
            "in French",
            "in reverse",
            "in braille",
            "in gibberish"
        ],
        correct: "in reverse",
        id: "52"
    },
    {
        "question": "How long is a single term in the US Senate?",
        "options": [
            "two years",
            "four years",
            "six years",
            "eight years"
        ],
        correct: "six years",
        id: "53"
    },
    {
        "question": "How long is the time on an NBA shot clock?",
        "options": [
            "18 seconds",
            "24 seconds",
            "30 seconds",
            "35 seconds"
        ],
        correct: "24 seconds",
        id: "54"
    },
    {
        "question": "How many $100 bills does it take to equal one million dollars?",
        "options": [
            "one thousand",
            "five thousand",
            "ten thousand",
            "one hundred thousand"
        ],
        correct: "ten thousand",
        id: "55"
    },
    {
        "question": "How many axles does a standard automobile have?",
        "options": [
            "one",
            "two",
            "four",
            "eight"
        ],
        correct: "two",
        id: "56"
    },
    {
        "question": "How many digits are in a standard Visa credit card number?",
        "options": [
            "12",
            "15",
            "16",
            "20"
        ],
        correct: "16",
        id: "57"
    },
    {
        "question": "How many eyes does a Giraffe have?",
        "options": [
            "one",
            "two",
            "three",
            "four"
        ],
        correct: "two",
        id: "58"
    },
    {
        "question": "How many innings are there in a regular Major League Baseball game?",
        "options": [
            "seven",
            "eight",
            "nine",
            "ten"
        ],
        correct: "nine",
        id: "59"
    },
    {
        "question": "How many keys are on a standard piano?",
        "options": [
            "20",
            "54",
            "88",
            "100"
        ],
        correct: "88",
        id: "60"
    },
    {
        "question": "How many men has actress Elizabeth Taylor been divorced from?",
        "options": [
            "five",
            "six",
            "seven",
            "eight"
        ],
        correct: "seven",
        id: "61"
    },
    {
        "question": "How many ounces are in a pound?",
        "options": [
            "4",
            "12",
            "16",
            "32"
        ],
        correct: "16",
        id: "62"
    },
    {
        "question": "How many periods are there in an ice hockey game?",
        "options": [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correct: "Three",
        id: "63"
    },
    {
        "question": "How many quarts are there in a gallon?",
        "options": [
            "one",
            "two",
            "three",
            "four"
        ],
        correct: "four",
        id: "64"
    },
    {
        "question": "How many ribs are there in the human body?",
        "options": [
            "18",
            "24",
            "30",
            "42"
        ],
        correct: "24",
        id: "65"
    },
    {
        "question": "How many ships did Columbus set sail with on his initial voyage to the New World?",
        "options": [
            "Two",
            "Three",
            "Five",
            "Ten"
        ],
        correct: "Three",
        id: "66"
    },
    {
        "question": "How many spikes are on the Statue of Liberty's crown?",
        "options": [
            "five",
            "seven",
            "nine",
            "thirteen"
        ],
        correct: "seven",
        id: "67"
    },
    {
        "question": "How many stars are on the American flag?",
        "options": [
            "13",
            "48",
            "50",
            "51"
        ],
        correct: "50",
        id: "68"
    },
    {
        "question": "How many states were in the Confederate States of America?",
        "options": [
            "11",
            "13",
            "16",
            "22"
        ],
        correct: "11",
        id: "69"
    },
    {
        "question": "How much does Peanuts character Lucy charge for her psychiatric advice?",
        "options": [
            "5 cents",
            "10 cents",
            "75 cents",
            "$125"
        ],
        correct: "5 cents",
        id: "70"
    },
    {
        "question": "How long is Hanukkah?",
        "options": [
            "one day",
            "five days",
            "eight days",
            "two weeks"
        ],
        correct: "eight days",
        id: "71"
    },
    {
        "question": "Huffy, Schwinn and Raleigh are all brands of what?",
        "options": [
            "sportswear",
            "dishwashers",
            "cigarettes",
            "bicycles"
        ],
        correct: "bicycles",
        id: "72"
    },
    {
        "question": "If a business files under Chapter 11 what is it doing?",
        "options": [
            "declaring bankruptcy",
            "selling stock",
            "buying a smaller",
            "company suing the government"
        ],
        correct: "declaring bankruptcy",
        id: "73"
    },
    {
        "question": "If a piece of music is in 'common time' how many quarter notes are there per measure?",
        "options": [
            "one",
            "four",
            "five",
            "ten"
        ],
        correct: "four",
        id: "74"
    },
    {
        "question": "If a ring has the number 925 stamped into it, it is most likely made of what material?",
        "options": [
            "platinum",
            "gold",
            "steel",
            "silver"
        ],
        correct: "silver",
        id: "75"
    },
    {
        "question": "If Christmas Day is on a Saturday, then the following New Year's Day falls on what day of the week?",
        "options": [
            "Sunday",
            "Monday",
            "Friday",
            "Saturday"
        ],
        correct: "Saturday",
        id: "76"
    },
    {
        "question": "If someone has cataracts, what part of their body might need an operation?",
        "options": [
            "ear",
            "hand",
            "eye",
            "knee"
        ],
        correct: "eye",
        id: "77"
    },
    {
        "question": "If you are 'riding fakie' inside a 'half pipe' what are you probably doing?",
        "options": [
            "skiing",
            "biking",
            "snowboarding",
            "surfing"
        ],
        correct: "snowboarding",
        id: "78"
    },
    {
        "question": "If you are truly afraid of the dark, what do you suffer from?",
        "options": [
            "hypnophobia",
            "cryptophobia",
            "hadephobia",
            "nyctophobia"
        ],
        correct: "nyctophobia",
        id: "79"
    },
    {
        "question": "If you are watching a Shavian play, who is the author?",
        "options": [
            "Shakespeare",
            "Aeschylus",
            "George Bernard Shaw",
            "Anton Chekhov"
        ],
        correct: "George Bernard Shaw",
        id: "80"
    },
    {
        "question": "If you ask for 'gai' at a Thai restaurant, what will you get?",
        "options": [
            "shrimp",
            "chicken",
            "beef",
            "pork"
        ],
        correct: "chicken",
        id: "81"
    },
    {
        "question": "If you dial '411' on a telephone, who are you calling?",
        "options": [
            "the police",
            "the White House",
            "directory assistance",
            "Moviefone"
        ],
        correct: "directory assistance",
        id: "82"
    },
    {
        "question": "If you have a 'sawbuck' how much money do you have?",
        "options": [
            "$1",
            "$5",
            "$10",
            "$20"
        ],
        correct: "$10",
        id: "83"
    },
    {
        "question": "If you work as a 'dolly grip' what business are you in?",
        "options": [
            "sheep farming",
            "film production",
            "construction",
            "moving"
        ],
        correct: "film production",
        id: "84"
    },
    {
        "question": "In 1909, Frederick Cook claimed to be the first explorer to reach what location?",
        "options": [
            "Mount Everest",
            "Bermuda Triangle",
            "Atlantis",
            "North Pole"
        ],
        correct: "North Pole",
        id: "85"
    },
    {
        "question": "In 1926, the Harlem Globetrotters basketball team was formed in what city?",
        "options": [
            "Boston",
            "Philadelphia",
            "Chicago",
            "New York City"
        ],
        correct: "Chicago",
        id: "86"
    },
    {
        "question": "In 1960, Nazi official Adolph Eichmann was finally captured in what country?",
        "options": [
            "Brazil",
            "East Germany",
            "Argentina",
            "Paraguay"
        ],
        correct: "Argentina",
        id: "87"
    },
    {
        "question": "In 1978, who became the youngest jockey ever to win horse racing's triple crown?",
        "options": [
            "Jerry Bailey",
            "Steve Cauthen",
            "Willie Shoemaker",
            "Pasquale Devito"
        ],
        correct: "Steve Cauthen",
        id: "88"
    },
    {
        "question": "In 1986, Libyan leader Muammar Qaddafi drew a so-called 'Line of Death' over what body of water?",
        "options": [
            "Gulf of Sidra",
            "Gulf of Oman",
            "Red Sea",
            "Persian Gulf"
        ],
        correct: "Gulf of Sidra",
        id: "89"
    },
    {
        "question": "In a game with no wild cards, what is the highest possible poker hand?",
        "options": [
            "straight flush",
            "royal flush",
            "full house",
            "four of a kind"
        ],
        correct: "royal flush",
        id: "90"
    },
    {
        "question": "In America, what is the main ingredient in pepperoni?",
        "options": [
            "fish",
            "pepper",
            "wheat",
            "meat"
        ],
        correct: "meat",
        id: "91"
    },
    {
        "question": "In American football, how many points is a touchdown worth?",
        "options": [
            "two",
            "three",
            "six",
            "seven"
        ],
        correct: "six",
        id: "92"
    },
    {
        "question": "In an adult human, how long is the large intestine?",
        "options": [
            "one foot",
            "five feet",
            "twelve feet",
            "twenty feet"
        ],
        correct: "five feet",
        id: "93"
    },
    {
        "question": "In baseball, how many balls make a walk?",
        "options": [
            "one",
            "two",
            "three",
            "four"
        ],
        correct: "four",
        id: "94"
    },
    {
        "question": "In bowling, how many pins must you knock down to get a strike?",
        "options": [
            "zero",
            "8",
            "10",
            "12"
        ],
        correct: "10",
        id: "95"
    },
    {
        "question": "In British currency, how many pence make a pound?",
        "options": [
            "10",
            "100",
            "500",
            "1000"
        ],
        correct: "100",
        id: "96"
    },
    {
        "question": "In computer terminology, what does the acronym 'FTP' stand for?",
        "options": [
            "file transfer protocol",
            "full time portal",
            "full text processor",
            "free to print"
        ],
        correct: "file transfer protocol",
        id: "97"
    },
    {
        "question": "In computer terminology, what does the acronym 'ISP' stand for?",
        "options": [
            "Individual Site Privacy",
            "Investment Stability Plan",
            "Internal Security Position",
            "Internet Service Provider"
        ],
        correct: "Internet Service Provider",
        id: "98"
    },
    {
        "question": "In cooking, the term 'au gratin' is sometimes used to describe a dish with what topping?",
        "options": [
            "cheese",
            "fruit",
            "gravy",
            "whipped cream"
        ],
        correct: "cheese",
        id: "99"
    },
    {
        "question": "In golf, what is one stroke over par called?",
        "options": [
            "eagle",
            "bogey",
            "dormy",
            "birdie"
        ],
        correct: "bogey",
        id: "100"
    },
    {
        "question": "In Greek mythology, what is the name of Zeus' father?",
        "options": [
            "Apollo",
            "Cronus",
            "Prometheus",
            "Hercules"
        ],
        correct: "Cronus",
        id: "101"
    },
    {
        "question": "In horse racing, what is the term for a wager on the 1st, 2nd and 3rd place finishers in a specific race?",
        "options": [
            "triple action",
            "trifecta",
            "exacta",
            "triple crown"
        ],
        correct: "trifecta",
        id: "102"
    },
    {
        "question": "In ice hockey, which of the following is not a penalty?",
        "options": [
            "hooking",
            "charging",
            "carving",
            "butt-ending"
        ],
        correct: "carving",
        id: "103"
    },
    {
        "question": "In Mister Rogers' theme song, what does he ask you to be?",
        "options": [
            "his cook",
            "his student",
            "his neighbor",
            "all you can be"
        ],
        correct: "his neighbor",
        id: "104"
    },
    {
        "question": "In mobster lingo, if you 'sing like a canary' what are you doing?",
        "options": [
            "impersonating Sinatra",
            "talking to the cops",
            "killing an enemy",
            "betting on horses"
        ],
        correct: "talking to the cops",
        id: "105"
    },
    {
        "question": "In soccer, which player is allowed to use his or her hands in the field of play?",
        "options": [
            "midfielder",
            "center",
            "sweeper",
            "goalkeeper"
        ],
        correct: "goalkeeper",
        id: "106"
    },
    {
        "question": "In the 1960s 'Batman' TV series, who was not a guest villain?",
        "options": [
            "The Minstrel",
            "The Archer",
            "The Bookworm",
            "The Squeegee Guy"
        ],
        correct: "The Squeegee Guy",
        id: "107"
    },
    {
        "question": "In the 1976 remake of the classic film 'King Kong' what New York landmark does the giant ape climb?",
        "options": [
            "Statue of Liberty",
            "Empire State Building",
            "World Trade Center",
            "Chrysler Building"
        ],
        correct: "World Trade Center",
        id: "108"
    },
    {
        "question": "In the 1992 animated film 'Aladdin' what device does the hero use to travel from place to place?",
        "options": [
            "talking car",
            "winged horse",
            "magic carpet",
            "hot air balloon"
        ],
        correct: "magic carpet",
        id: "109"
    },
    {
        "question": "In the Arthurian legend, who is married to Guinevere?",
        "options": [
            "Merlin",
            "King Arthur",
            "Lancelot",
            "Camelot"
        ],
        correct: "King Arthur",
        id: "110"
    },
    {
        "question": "In the card game blackjack, how much are a queen and a king worth-together?",
        "options": [
            "11",
            "15",
            "20",
            "21"
        ],
        correct: "20",
        id: "111"
    },
    {
        "question": "In the children's game, what color is 'Rover'?",
        "options": [
            "green",
            "black",
            "red",
            "blue"
        ],
        correct: "red",
        id: "112"
    },
    {
        "question": "In the classic song 'Take Me Out to the Ballgame' for whom do we 'root root root'?",
        "options": [
            "the umpire",
            "the home team",
            "the bat boy",
            "Mighty Casey"
        ],
        correct: "the home team",
        id: "113"
    },
    {
        "question": "In the comic strip 'Peanuts' what is Schroeder known for doing?",
        "options": [
            "Dancing",
            "playing football",
            "playing the piano",
            "Flying an imaginary plane"
        ],
        correct: "playing the piano",
        id: "114"
    },
    {
        "question": "In the famous ballet 'The Nutcracker' who does the hero defeat?",
        "options": [
            "Sugar Plum Fairy",
            "Rat King",
            "Snow Queen",
            "Marzipan"
        ],
        correct: "Rat King",
        id: "115"
    },
    {
        "question": "In the famous baseball poem 'Casey at the Bat' Casey plays for the team from what town?",
        "options": [
            "Stormfield",
            "Fog City",
            "Mudville",
            "Waterlog"
        ],
        correct: "Mudville",
        id: "116"
    },
    {
        "question": "In the film 'Easy Rider' what emblem is on the back of Peter Fonda's leather jacket?",
        "options": [
            "peace symbol",
            "American flag",
            "two white doves",
            "Harley-Davidson logo"
        ],
        correct: "American flag",
        id: "117"
    },
    {
        "question": "In the film 'The Talented Mr. Ripley' who plays Mr. Ripley?",
        "options": [
            "Jude Law",
            "Matt Damon",
            "Dustin Hoffman",
            "Ben Affleck"
        ],
        correct: "Matt Damon",
        id: "118"
    },
    {
        "question": "In the Jimmy Buffet song 'Margaritaville' what is the singer searching for?",
        "options": [
            "a lime",
            "a shaker of salt",
            "his car keys",
            "the bartender"
        ],
        correct: "a shaker of salt",
        id: "119"
    },
    {
        "question": "In the movie 'Austin Powers: The Spy Who Shagged Me' what is the name of Dr. Evil's diminitive clone?",
        "options": [
            "Little Buddy",
            "Mini-Me",
            "Small Fry",
            "Dr. Evil Jr"
        ],
        correct: "Mini-Me",
        id: "120"
    },
    {
        "question": "In the movie 'Star Wars' what kind of creature is Chewbacca?",
        "options": [
            "Woolie",
            "Boobie",
            "Wookie",
            "Klingon"
        ],
        correct: "Wookie",
        id: "121"
    },
    {
        "question": "In the novel 'Around the World in 80 Days' Phileas Fogg's faithful valet is named what?",
        "options": [
            "Sancho Panza",
            "Passepartout",
            "Renfield",
            "Savoir Faire"
        ],
        correct: "Passepartout",
        id: "122"
    },
    {
        "question": "In the novel 'The Adventures of Tom Sawyer' what is the name of Tom's sweetheart?",
        "options": [
            "Polly Finn",
            "Becky Thatcher",
            "Nancy Drew",
            "Emma Bovary"
        ],
        correct: "Becky Thatcher",
        id: "123"
    },
    {
        "question": "In the original 'Get Smart' TV series, what is agent Maxwell Smart's code name?",
        "options": [
            "Agent 86",
            "Agent 99",
            "Larrabee",
            "The Chief"
        ],
        correct: "Agent 86",
        id: "124"
    },
    {
        "question": "In the sci-fi movie 'Fantastic Voyage' where do the voyagers travel?",
        "options": [
            "through outer space",
            "through a human body",
            "to the ocean floor",
            "to the center of the earth"
        ],
        correct: "through a human body",
        id: "125"
    },
    {
        "question": "In the story 'Jack and the Beanstalk' what does Jack trade to get the magic beans?",
        "options": [
            "a cow",
            "a hat",
            "a harp",
            "a goose"
        ],
        correct: "a cow",
        id: "126"
    },
    {
        "question": "In the television network abbreviation 'ABC' what does the 'A' stand for?",
        "options": [
            "Artistic",
            "Audio",
            "American",
            "Adult"
        ],
        correct: "American",
        id: "127"
    },
    {
        "question": "In the phrase 'Y2K' what does 'K' stand for?",
        "options": [
            "millennium",
            "computer code",
            "catastrophe",
            "thousand"
        ],
        correct: "thousand",
        id: "128"
    },
    {
        "question": "In the United States, what is the first day of spring?",
        "options": [
            "February 21",
            "March 21",
            "April 21",
            "May 21"
        ],
        correct: "March 21",
        id: "129"
    },
    {
        "question": "In traditional English puppet shows, who is married to the character Punch?",
        "options": [
            "Debbie",
            "Victoria",
            "Judy",
            "Barbara"
        ],
        correct: "Judy",
        id: "130"
    },
    {
        "question": "In what city is TV's 'The Mary Tyler Moore Show' set?",
        "options": [
            "Dallas",
            "Chicago",
            "New York",
            "Minneapolis"
        ],
        correct: "Minneapolis",
        id: "131"
    },
    {
        "question": "In what city would you find people studying art and design at the Fashion Institute of Technology?",
        "options": [
            "Paris",
            "New York",
            "Los Angeles",
            "Melbourne"
        ],
        correct: "New York",
        id: "132"
    },
    {
        "question": "In what country are police officers referred to as 'bobbies'?",
        "options": [
            "Israel",
            "Greece",
            "England",
            "France"
        ],
        correct: "England",
        id: "133"
    },
    {
        "question": "In what country did Magic Johnson play professional basketball during the 1999 season?",
        "options": [
            "United States",
            "Sweden",
            "Israel",
            "Turkey"
        ],
        correct: "Sweden",
        id: "134"
    },
    {
        "question": "In what country did Pokemon originate?",
        "options": [
            "France",
            "Hungary",
            "Japan",
            "Canada"
        ],
        correct: "Japan",
        id: "135"
    },
    {
        "question": "In what decade did Israel become an independent state?",
        "options": [
            "1920s",
            "1940s",
            "1950s",
            "1960s"
        ],
        correct: "1940s",
        id: "136"
    },
    {
        "question": "In what decade was the Hula-Hoop invented?",
        "options": [
            "1890s",
            "1920s",
            "1950s",
            "1970s"
        ],
        correct: "1950s",
        id: "137"
    },
    {
        "question": "In what forest did Robin Hood live?",
        "options": [
            "Black Forest",
            "Petrified Forest",
            "Nottingham Forest",
            "Sherwood Forest"
        ],
        correct: "Sherwood Forest",
        id: "138"
    },
    {
        "question": "In what restaurant can you order a Grand Slam breakfast?",
        "options": [
            "Denny's",
            "McDonald's",
            "Burger King",
            "Hardee's"
        ],
        correct: "Denny's",
        id: "139"
    },
    {
        "question": "In what sport do athletes compete for the Walker Cup?",
        "options": [
            "cricket",
            "tennis",
            "squash",
            "golf"
        ],
        correct: "golf",
        id: "140"
    },
    {
        "question": "In what sport do you find 'steel cage' matches?",
        "options": [
            "boxing",
            "fencing",
            "pro wrestling",
            "college basketball"
        ],
        correct: "pro wrestling",
        id: "141"
    },
    {
        "question": "In what state is the 1999 movie 'Magnolia' set?",
        "options": [
            "California",
            "South Carolina",
            "Georgia",
            "Texas"
        ],
        correct: "California",
        id: "142"
    },
    {
        "question": "In what U.S. city can you find the Basketball Hall of Fame?",
        "options": [
            "Canton, Ohio",
            "Cooperstown, New York",
            "Springfield, Massachusetts",
            "Lawrence, Kansas"
        ],
        correct: "Springfield, Massachusetts",
        id: "143"
    },
    {
        "question": "In what year did the Great Depression begin?",
        "options": [
            "1884",
            "1929",
            "1953",
            "1975"
        ],
        correct: "1929",
        id: "144"
    },
    {
        "question": "In what year did the United States last win an Olympic gold medal in men's ice hockey?",
        "options": [
            "1976",
            "1980",
            "1984",
            "1988"
        ],
        correct: "1980",
        id: "145"
    },
    {
        "question": "In which of the following bands did Jimmy Page not play guitar?",
        "options": [
            "Bad Company",
            "The Firm",
            "Led Zeppelin",
            "The Yardbirds"
        ],
        correct: "Bad Company",
        id: "146"
    },
    {
        "question": "In which of these sports do competitors use a 'funny car'?",
        "options": [
            "supercross",
            "dogsledding",
            "gymnastics",
            "drag racing"
        ],
        correct: "drag racing",
        id: "147"
    },
    {
        "question": "In what war did Joan of Arc fight?",
        "options": [
            "Hundred Years' War",
            "Franco-Prussian War",
            "French Revolution",
            "French and Indian War"
        ],
        correct: "Hundred Years' War",
        id: "148"
    },
    {
        "question": "Including the bottom, how many sides are on a square-based pyramid?",
        "options": [
            "three",
            "four",
            "five",
            "six"
        ],
        correct: "five",
        id: "149"
    },
    {
        "question": "Into what body of water does the Rhone River flow?",
        "options": [
            "Atlantic Ocean",
            "Caspian Sea",
            "North Sea",
            "Mediterranean Sea"
        ],
        correct: "Mediterranean Sea",
        id: "150"
    },
    {
        "question": "John D. Rockefeller made his fortune in what industry?",
        "options": [
            "automobile ",
            "oil",
            "steel",
            "railroad"
        ],
        correct: "oil",
        id: "151"
    },
    {
        "question": "Modern computer microchips are primarily composed of what element?",
        "options": [
            "Sodium",
            "Silicon",
            "Aluminum",
            "Silver"
        ],
        correct: "Silicon",
        id: "152"
    },
    {
        "question": "Mohair is made from the fleece of what animal?",
        "options": [
            "camel",
            "llama",
            "goat",
            "mole"
        ],
        correct: "goat",
        id: "153"
    },
    {
        "question": "'Nature, Mr. Allnut, is what we are put in this world to rise above' is a line from what film?",
        "options": [
            "'Citizen Kane'",
            "'The African Queen'",
            "'The Deer Hunter'",
            "'Adam's Rib'"
        ],
        correct: "'The African Queen'",
        id: "154"
    },
    {
        "question": "On a set of jumper cables, what color designates the negative connector?",
        "options": [
            "black",
            "red",
            "orange",
            "blue"
        ],
        correct: "black",
        id: "155"
    },
    {
        "question": "On average, what length of time passes between high tides?",
        "options": [
            "3 hours, 25 minutes",
            "6 hours, 25 minutes",
            "12 hours, 25 minutes",
            "24 hours, 25 minutes"
        ],
        correct: "12 hours, 25 minutes",
        id: "156"
    },
    {
        "question": "On the TV show 'CHiPs' what was Officer Frank Poncherello's nickname?",
        "options": [
            "Franky",
            "Ponch",
            "Chipper",
            "Hot Dog"
        ],
        correct: "Ponch",
        id: "157"
    },
    {
        "question": "On the TV show 'Hill Street Blues' what is Joyce Davenport's nickname for Captain Frank Furillo?",
        "options": [
            "Furry Monster",
            "Pizza Man",
            "Snookums",
            "Baby Cakes"
        ],
        correct: "Pizza Man",
        id: "158"
    },
    {
        "question": "On TV's 'Seinfeld' what type of doctor did Mr. Costanza go to when he sat on 'fusilli Jerry'?",
        "options": [
            "ophthalmologist",
            "cardiologist",
            "neurologist",
            "proctologist"
        ],
        correct: "proctologist",
        id: "159"
    },
    {
        "question": "On Valentine's Day 2000, NASA's NEAR spacecraft began a yearlong orbit of what asteroid?",
        "options": [
            "Eros",
            "Cupid",
            "Aphrodite",
            "Venus"
        ],
        correct: "Eros",
        id: "160"
    },
    {
        "question": "On what continent can you find tigers in the wild?",
        "options": [
            "Africa",
            "Asia",
            "Europe",
            "South America"
        ],
        correct: "Asia",
        id: "161"
    },
    {
        "question": "On what body part should you wear a babushka?",
        "options": [
            "head",
            "hands",
            "foot",
            "legs"
        ],
        correct: "head",
        id: "162"
    },
    {
        "question": "On which part of a car would you find the 'caliper'?",
        "options": [
            "battery",
            "engine",
            "radiator",
            "brakes"
        ],
        correct: "brakes",
        id: "163"
    },
    {
        "question": "Paper will burn at approximately what temperature, in Fahrenheit?",
        "options": [
            "98.6 degrees",
            "212.5 degrees",
            "398.5 degrees",
            "451 degrees"
        ],
        correct: "451 degrees",
        id: "164"
    },
    {
        "question": "People are supposed to drive on the left-hand side of the road in which country?",
        "options": [
            "France",
            "Italy",
            "England",
            "Germany"
        ],
        correct: "England",
        id: "165"
    },
    {
        "question": "Phoebe, Dione and Helene are moons of what planet?",
        "options": [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Pluto"
        ],
        correct: "Saturn",
        id: "166"
    },
    {
        "question": "Pop icon Tiny Tim was famous for playing what musical instrument?",
        "options": [
            "ukulele",
            "kazoo",
            "accordion",
            "fiddle"
        ],
        correct: "ukulele",
        id: "167"
    },
    {
        "question": "Someone would most likely contract salmonella poisoning from eating which of the following?",
        "options": [
            "carrots",
            "chicken",
            "tofu",
            "rice"
        ],
        correct: "chicken",
        id: "168"
    },
    {
        "question": "Stevie Wonder and Michael Jackson have both recorded duets with which former Beatle?",
        "options": [
            "Paul McCartney",
            "John Lennon",
            "George Harrison",
            "Ringo Starr"
        ],
        correct: "Paul McCartney",
        id: "169"
    },
    {
        "question": "The American patriot Paul Revere was named for his father, whose original name was what?",
        "options": [
            "John Paul Revere",
            "Paul Silver",
            "Apollos Rivoire",
            "Paolo Reverini"
        ],
        correct: "Apollos Rivoire",
        id: "170"
    },
    {
        "question": "The Original Apple iMac computer was available in all of the following colors except which?",
        "options": [
            "Tangerine",
            "Strawberry",
            "Kiwi",
            "Grape"
        ],
        correct: "Kiwi",
        id: "171"
    },
    {
        "question": "The 'Arkansas toothpick' is better known by what name?",
        "options": [
            "Scottie Pippen",
            "spare rib",
            "pinkie finger",
            "Bowie knife"
        ],
        correct: "Bowie knife",
        id: "172"
    },
    {
        "question": "The British dish 'bangers and mash' is made up of sausage and what?",
        "options": [
            "eggs",
            "bacon",
            "liver",
            "potatoes"
        ],
        correct: "potatoes",
        id: "173"
    },
    {
        "question": "The common term for someone who has difficulty seeing objects in the distance is what?",
        "options": [
            "farsighted",
            "nearsighted",
            "hindsighted",
            "hypermetropic"
        ],
        correct: "nearsighted",
        id: "174"
    },
    {
        "question": "The dance known as the 'fandango' is of what origin?",
        "options": [
            "Australian",
            "African",
            "Native American",
            "Spanish"
        ],
        correct: "Spanish",
        id: "175"
    },
    {
        "question": "The disco band ABBA comes from what country?",
        "options": [
            "Norway",
            "Sweden",
            "Switzerland",
            "The Netherlands"
        ],
        correct: "Sweden",
        id: "176"
    },
    {
        "question": "The film 'Stand By Me' is based on a novel by what author?",
        "options": [
            "Anne Proulx",
            "Stephen King",
            "Dean Koontz",
            "Frank McCourt"
        ],
        correct: "Stephen King",
        id: "177"
    },
    {
        "question": "The first commercial radio station was located in what city?",
        "options": [
            "Chicago",
            "Austin",
            "Pittsburgh",
            "Cleveland"
        ],
        correct: "Pittsburgh",
        id: "178"
    },
    {
        "question": "The first sound recording to be made and reproduced was a recitation of what nursery rhyme?",
        "options": [
            "'Humpty Dumpty'",
            "'Mary Had a Little Lamb'",
            "'Jack Be Nimble'",
            "'Home, Sweet Home'"
        ],
        correct: "'Mary Had a Little Lamb'",
        id: "179"
    },
    {
        "question": "The majority of calcium in the human body is found where?",
        "options": [
            "hair",
            "blood",
            "bones",
            "digestive tract"
        ],
        correct: "bones",
        id: "180"
    },
    {
        "question": "The phrase 'hospital corners' refers to what?",
        "options": [
            "bed sheets",
            "paint",
            "landscaping",
            "scissors"
        ],
        correct: "bed sheets",
        id: "181"
    },
    {
        "question": "The process of drilling holes in the skull is called what?",
        "options": [
            "bifurcation",
            "trepanation",
            "aeronomy",
            "skullduggery"
        ],
        correct: "trepanation",
        id: "182"
    },
    {
        "question": "The sport of judo comes from what Asian country?",
        "options": [
            "Japan",
            "Vietnam",
            "Laos",
            "Philippines"
        ],
        correct: "Japan",
        id: "183"
    },
    {
        "question": "The Strauss family of composers popularized what dance?",
        "options": [
            "waltz",
            "tango",
            "fox-trot",
            "square dance"
        ],
        correct: "waltz",
        id: "184"
    },
    {
        "question": "The term 'chili con carne' refers to chili with what?",
        "options": [
            "beans ",
            "meat",
            "cheese",
            "chili peppers"
        ],
        correct: "meat",
        id: "185"
    },
    {
        "question": "The TV show 'House of Style' airs on what network?",
        "options": [
            "E",
            "WB",
            "MTV",
            "Home Shopping Network"
        ],
        correct: "MTV",
        id: "186"
    },
    {
        "question": "To create a tapestry, one must traditionally engage in what activity?",
        "options": [
            "weaving",
            "sculpting",
            "baking",
            "singing"
        ],
        correct: "weaving",
        id: "187"
    },
    {
        "question": "To make an international telephone call from within the US, what are the first numbers you should dial?",
        "options": [
            "011",
            "101",
            "888",
            "911"
        ],
        correct: "011",
        id: "188"
    },
    {
        "question": "To ward off bad luck, what do many people do to wood?",
        "options": [
            "knock on it",
            "kiss it",
            "thank it",
            "scratch it"
        ],
        correct: "knock on it",
        id: "189"
    },
    {
        "question": "What actress starred on 'Charlie's Angels' for the show's entire run?",
        "options": [
            "Cheryl Ladd",
            "Farrah Fawcett",
            "Jaclyn Smith",
            "Kate Jackson"
        ],
        correct: "Jaclyn Smith",
        id: "190"
    },
    {
        "question": "What animal is considered sacred in India?",
        "options": [
            "sheep",
            "cow",
            "chicken",
            "dog"
        ],
        correct: "cow",
        id: "191"
    },
    {
        "question": "What animal is used to make lard?",
        "options": [
            "pig",
            "cow",
            "snake",
            "chicken"
        ],
        correct: "pig",
        id: "192"
    },
    {
        "question": "What animal represents the year 2000 on the Chinese calendar?",
        "options": [
            "dragon",
            "rabbit",
            "tiger",
            "monkey"
        ],
        correct: "dragon",
        id: "193"
    },
    {
        "question": "What animated character has a crush on the Little Red Haired Girl?",
        "options": [
            "Richie Rich",
            "Charlie Brown",
            "Bugs Bunny",
            "Jonny Quest"
        ],
        correct: "Charlie Brown",
        id: "194"
    },
    {
        "question": "What are fans of the TV show 'Mystery Science Theater 3000' known as?",
        "options": [
            "Mysterians",
            "MiSTies",
            "'Bot Brigade",
            "Gizmonics"
        ],
        correct: "MiSTies",
        id: "195"
    },
    {
        "question": "What are the dimensions of a 'letter size' piece of paper?",
        "options": [
            "3 1/2 x 5 inches",
            "5 x 10 inches",
            "8 1/2 x 11 inches",
            "11 x 17 inches"
        ],
        correct: "8 1/2 x 11 inches",
        id: "196"
    },
    {
        "question": "What are the names of Donald Duck's three nephews?",
        "options": [
            "Quick, Quack, Quock",
            "Alvin, Simon, Theodore",
            "Robbie, Chip, Ernie",
            "Huey, Dewey, Louie"
        ],
        correct: "Huey, Dewey, Louie",
        id: "197"
    },
    {
        "question": "What are the names of the two primary M&M's spokes-candies?",
        "options": [
            "Peanut and Plain",
            "Red and Yellow",
            "Mort and Marty",
            "They don't have names"
        ],
        correct: "Red and Yellow",
        id: "198"
    },
    {
        "question": "What are the plastic boxes that hold compact discs called?",
        "options": [
            "frame cases",
            "jewel cases",
            "slip cases",
            "wafer boxes"
        ],
        correct: "jewel cases",
        id: "199"
    },
    {
        "question": "What are the Smothers Brothers' first names?",
        "options": [
            "Frank and Bill",
            "Tom and Dick",
            "Dave and George",
            "Ed and Pete"
        ],
        correct: "Tom and Dick",
        id: "200"
    },
    {
        "question": "What article of clothing best describes a 'pashmina'?",
        "options": [
            "shoes",
            "pants",
            "scarf",
            "underwear"
        ],
        correct: "scarf",
        id: "201"
    },
    {
        "question": "What automobile company makes the Sonata?",
        "options": [
            "Toyota",
            "Honda",
            "Subaru",
            "Hyundai"
        ],
        correct: "Hyundai",
        id: "202"
    },
    {
        "question": "What biological process replicates DNA?",
        "options": [
            "molting",
            "mitosis",
            "diffusion",
            "peristalsis"
        ],
        correct: "mitosis",
        id: "203"
    },
    {
        "question": "What car company once manufactured and sold the 'Datsun' line of automobiles?",
        "options": [
            "Nissan",
            "Mazda",
            "Toyota",
            "Daihatsu"
        ],
        correct: "Nissan",
        id: "204"
    },
    {
        "question": "What cartoon character traveled in a time machine with Mr. Peabody?",
        "options": [
            "Rocky",
            "Jonny Quest",
            "Underdog",
            "Sherman"
        ],
        correct: "Sherman",
        id: "205"
    },
    {
        "question": "What character did Woody replace on the TV show 'Cheers'?",
        "options": [
            "Coach",
            "Diane",
            "Norm",
            "Frasier"
        ],
        correct: "Coach",
        id: "206"
    },
    {
        "question": "What chemical do people frequently use to bleach hair?",
        "options": [
            "folic acid",
            "hydrogen peroxide",
            "sodium chloride",
            "nitrous oxide"
        ],
        correct: "hydrogen peroxide",
        id: "207"
    },
    {
        "question": "What children's storybook character believes that the sky is falling?",
        "options": [
            "Chicken Little",
            "Curious George",
            "Jack Sprat",
            "Tom Thumb"
        ],
        correct: "Chicken Little",
        id: "208"
    },
    {
        "question": "What children's TV character is known as 'Da Niao' in China?",
        "options": [
            "Barney",
            "Big Bird",
            "Mickey Mouse",
            "Tinky Winky"
        ],
        correct: "Big Bird",
        id: "209"
    },
    {
        "question": "What city did the Beatles originally call home?",
        "options": [
            "London",
            "Leeds",
            "Liverpool",
            "Manchester"
        ],
        correct: "Liverpool",
        id: "210"
    },
    {
        "question": "What city is known as 'the rubber capital of the world'?",
        "options": [
            "Omaha, Nebraska",
            "Rockford, Illinois",
            "Grand Rapids, Michigan",
            "Akron, Ohio"
        ],
        correct: "Akron, Ohio",
        id: "211"
    },
    {
        "question": "What city's airport uses the code ORD?",
        "options": [
            "Chicago",
            "Orlando",
            "New York City",
            "Portland"
        ],
        correct: "Chicago",
        id: "212"
    },
    {
        "question": "What city's residents are known as 'Knickerbockers'?",
        "options": [
            "Boston",
            "Philadelphia",
            "New York City",
            "London"
        ],
        correct: "New York City",
        id: "213"
    },
    {
        "question": "What color is a ruby?",
        "options": [
            "red",
            "black",
            "yellow",
            "blue"
        ],
        correct: "red",
        id: "214"
    },
    {
        "question": "What color is cartoon character Marge Simpson's hair?",
        "options": [
            "yellow",
            "purple",
            "blue",
            "brown"
        ],
        correct: "blue",
        id: "215"
    },
    {
        "question": "What color is the masthead of USA Today's 'Life' section?",
        "options": [
            "green",
            "purple",
            "red",
            "blue"
        ],
        correct: "purple",
        id: "216"
    },
    {
        "question": "What color is Uncle Sam's goatee?",
        "options": [
            "brown",
            "black ",
            "white",
            "dishwater blond"
        ],
        correct: "white",
        id: "217"
    },
    {
        "question": "What colors are the two circles in the MasterCard logo?",
        "options": [
            "pink and orange",
            "blue and green",
            "black and white",
            "red and yellow"
        ],
        correct: "red and yellow",
        id: "218"
    },
    {
        "question": "What color is Pepto-Bismol liquid?",
        "options": [
            "pink",
            "blue",
            "clear",
            "green"
        ],
        correct: "pink",
        id: "219"
    },
    {
        "question": "What company makes Oreo cookies?",
        "options": [
            "General Mills",
            "Nabisco",
            "Keebler",
            "Kraft"
        ],
        correct: "Nabisco",
        id: "220"
    },
    {
        "question": "What company makes perfumes called 'Beautiful' and 'Pleasures'?",
        "options": [
            "Estee Lauder",
            "Ralph Lauren",
            "Elizabeth Arden",
            "Calvin Klein"
        ],
        correct: "Estee Lauder",
        id: "221"
    },
    {
        "question": "What condition is caused by malfunctioning sebaceous glands?",
        "options": [
            "bad breath",
            "shingles",
            "acne",
            "carpal tunnel syndrome"
        ],
        correct: "acne",
        id: "222"
    },
    {
        "question": "What corporation was founded by a candlemaker and a soapmaker?",
        "options": [
            "Simon & Schuster",
            "Procter & Gamble",
            "Johnson & Johnson",
            "Smith & Wesson"
        ],
        correct: "Procter & Gamble",
        id: "223"
    },
    {
        "question": "What country does Bordeaux wine come from?",
        "options": [
            "France",
            "Spain",
            "Australia",
            "United States"
        ],
        correct: "France",
        id: "224"
    },
    {
        "question": "What country gave us the fashionable headgear called the beret?",
        "options": [
            "Switzerland",
            "China",
            "Mexico",
            "France"
        ],
        correct: "France",
        id: "225"
    },
    {
        "question": "What country is famous for making wooden shoes?",
        "options": [
            "Russia",
            "Thailand",
            "The Netherlands",
            "Australia"
        ],
        correct: "The Netherlands",
        id: "226"
    },
    {
        "question": "What country is the rock group U2 from?",
        "options": [
            "England",
            "Ireland",
            "Belgium",
            "Germany"
        ],
        correct: "Ireland",
        id: "227"
    },
    {
        "question": "What country was once ruled by shoguns?",
        "options": [
            "China",
            "Japan",
            "North Korea",
            "Taiwan"
        ],
        correct: "Japan",
        id: "228"
    },
    {
        "question": "What day of the week is sometimes called 'hump day'?",
        "options": [
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        correct: "Wednesday",
        id: "229"
    },
    {
        "question": "What disease does a carcinogen cause?",
        "options": [
            "cancer",
            "influenza",
            "emphysema",
            "heart disease"
        ],
        correct: "cancer",
        id: "230"
    },
    {
        "question": "What disease is characterized by a body's inability to properly metabolize glucose?",
        "options": [
            "Influenza",
            "Septicemia",
            "Diabetes",
            "Arthritis"
        ],
        correct: "Diabetes",
        id: "231"
    },
    {
        "question": "What disease is sometimes referred to as the 'royal disease'?",
        "options": [
            "rickets",
            "measles",
            "hemophilia",
            "tuberculosis"
        ],
        correct: "hemophilia",
        id: "232"
    },
    {
        "question": "What do the initials 'E. E.' in poet E. E. Cummings' name stand for?",
        "options": [
            "Edward Estlin",
            "Edmund Earl",
            "Ernest Eakins",
            "Eugene Evan"
        ],
        correct: "Edward Estlin",
        id: "233"
    },
    {
        "question": "What do you call a young cow?",
        "options": [
            "mare",
            "lamb",
            "kid",
            "calf"
        ],
        correct: "calf",
        id: "234"
    },
    {
        "question": "What do you call three consecutive strikes in bowling?",
        "options": [
            "yahtzee",
            "mulligan",
            "turkey",
            "ace"
        ],
        correct: "turkey",
        id: "235"
    },
    {
        "question": "What does a pH level measure?",
        "options": [
            "acidity",
            "density",
            "wavelength",
            "humidity"
        ],
        correct: "acidity",
        id: "236"
    },
    {
        "question": "What does an animal produce when it lactates?",
        "options": [
            "sweat",
            "wool",
            "milk",
            "methane"
        ],
        correct: "milk",
        id: "237"
    },
    {
        "question": "What does it mean to work 'pro bono'?",
        "options": [
            "work overtime",
            "work without pay",
            "work as your own boss",
            "not work at all"
        ],
        correct: "work without pay",
        id: "238"
    },
    {
        "question": "What does the acronym 'REM' stand for?",
        "options": [
            "random energy module",
            "rapid eye movement",
            "red entertainment machine",
            "really energetic music"
        ],
        correct: "rapid eye movement",
        id: "239"
    },
    {
        "question": "What does the Latin phrase 'e pluribus unum' mean?",
        "options": [
            "What a crazy life.",
            "In God we trust.",
            "from many, one",
            "for the greater good"
        ],
        correct: "from many, one",
        id: "240"
    },
    {
        "question": "What does the 'ROM' in CD-ROM stand for?",
        "options": [
            "Really Obscure Memory",
            "Run-Other Memory",
            "Random Object Memory",
            "Read-Only Memory"
        ],
        correct: "Read-Only Memory",
        id: "241"
    },
    {
        "question": "What does the Yiddish word 'meshuga' mean?",
        "options": [
            "crazy",
            "sacred",
            "stingy",
            "sweet"
        ],
        correct: "crazy",
        id: "242"
    },
    {
        "question": "What exercise apparatus is used during a 'Spinning' class?",
        "options": [
            "stationary bicycle",
            "treadmill",
            "rowing machine",
            "barbells"
        ],
        correct: "stationary bicycle",
        id: "243"
    },
    {
        "question": "What famous folksinger founded the Institute for the Study of Non-Violence in 1965?",
        "options": [
            "Bob Dylan",
            "Woody Guthrie",
            "Joan Baez",
            "Peter Yarrow"
        ],
        correct: "Joan Baez",
        id: "244"
    },
    {
        "question": "What famous radio personality was also the voice of Shaggy on the cartoon 'Scooby-Doo'?",
        "options": [
            "Rush Limbaugh",
            "Casey Kasem",
            "Larry King",
            "Howard Stern"
        ],
        correct: "Casey Kasem",
        id: "245"
    },
    {
        "question": "What fictional character claims to be 'smarter than the average bear'?",
        "options": [
            "Paddington Bear",
            "Fozzie Bear",
            "Smokey Bear",
            "Yogi Bear"
        ],
        correct: "Yogi Bear",
        id: "246"
    },
    {
        "question": "What French city is home to a famous international film festival each spring?",
        "options": [
            "Cannes",
            "Marseille",
            "Dijon",
            "Lyon"
        ],
        correct: "Cannes",
        id: "247"
    },
    {
        "question": "What football player was known as 'The Galloping Ghost'?",
        "options": [
            "Jim Thorpe",
            "Dick Butkus",
            "Red Grange",
            "George Halas"
        ],
        correct: "Red Grange",
        id: "248"
    },
    {
        "question": "What force causes an ice cream cone to fly off of a spinning merry-go-round?",
        "options": [
            "centrifugal",
            "vehicular",
            "gravitational",
            "torsal"
        ],
        correct: "centrifugal",
        id: "249"
    },
    {
        "question": "What former 'Today' show personality played a neighbor on the TV sitcom 'The Hogan Family'?",
        "options": [
            "Jane Pauley",
            "Willard Scott",
            "Deborah Norville",
            "Joe Garagiola"
        ],
        correct: "Willard Scott",
        id: "250"
    },
    {
        "question": "What Greek poet wrote 'The Iliad' and 'The Odyssey'?",
        "options": [
            "Sophocles",
            "Plato",
            "Homer",
            "Socrates"
        ],
        correct: "Homer",
        id: "251"
    },
    {
        "question": "What high school does the gang from the 'Archie' comic strip attend?",
        "options": [
            "Ridgemont High",
            "Riverdale High",
            "Rumson High",
            "Riker's Island High"
        ],
        correct: "Riverdale High",
        id: "252"
    },
    {
        "question": "What important food crop is grown in fields called paddies?",
        "options": [
            "wheat",
            "rye",
            "corn",
            "rice"
        ],
        correct: "rice",
        id: "253"
    },
    {
        "question": "What internet company goes by the acronym AOL?",
        "options": [
            "America Over Lines",
            "America Online",
            "Americans On Links",
            "Americans On LOR"
        ],
        correct: "America Online",
        id: "254"
    },
    {
        "question": "What is a balalaika?",
        "options": [
            "musical instrument",
            "Russian peasant",
            "type of hat",
            "breed of shark"
        ],
        correct: "musical instrument",
        id: "255"
    },
    {
        "question": "What is a Dutch oven?",
        "options": [
            "a toaster oven",
            "a microwave",
            "a kettle pot",
            "a sauna"
        ],
        correct: "a kettle pot",
        id: "256"
    },
    {
        "question": "What is actor Antonio Banderas native language?",
        "options": [
            "Spanish",
            "Russian",
            "German",
            "French"
        ],
        correct: "Spanish",
        id: "257"
    },
    {
        "question": "What is an alternate name for the food dish 'Beijing duck'?",
        "options": [
            "Shanghai duck",
            "Peking duck",
            "Hong Kong duck",
            "Brooklyn duck"
        ],
        correct: "Peking duck",
        id: "258"
    },
    {
        "question": "What is another name for the camelopard?",
        "options": [
            "circus",
            "giraffe",
            "cantaloupe",
            "oasis"
        ],
        correct: "giraffe",
        id: "259"
    },
    {
        "question": "What is another way of writing 'six feet'?",
        "options": [
            "6'",
            "6",
            "6''",
            "6#"
        ],
        correct: "6'",
        id: "260"
    },
    {
        "question": "What is called a 'lorry' in Britain?",
        "options": [
            "a toaster",
            "a truck",
            "a babysitter",
            "an elevator"
        ],
        correct: "a truck",
        id: "261"
    },
    {
        "question": "What is considered the proper way to address a duke?",
        "options": [
            "'Your Majesty'",
            "'Your Eminence'",
            "'Your Excellency'",
            "'Your Grace'"
        ],
        correct: "'Your Grace'",
        id: "262"
    },
    {
        "question": "What is Delta Burke's character's job on the sitcom 'Designing Women'?",
        "options": [
            "fashion designer",
            "graphic designer",
            "interior designer",
            "website designer"
        ],
        correct: "interior designer",
        id: "263"
    },
    {
        "question": "What is New Mexico's nickname?",
        "options": [
            "'The Desert State'",
            "'Gateway to Paradise'",
            "'Land of Enchantment'",
            "'The Garden State'"
        ],
        correct: "'Land of Enchantment'",
        id: "264"
    },
    {
        "question": "What is produced during photosynthesis?",
        "options": [
            "hydrogen",
            "nylon",
            "oxygen",
            "light"
        ],
        correct: "oxygen",
        id: "265"
    },
    {
        "question": "What is the 7-Eleven company's trademarked name for its super-large sodas?",
        "options": [
            "Big Slurp",
            "Big Gulp",
            "Big Drink",
            "Big Sip"
        ],
        correct: "Big Gulp",
        id: "266"
    },
    {
        "question": "What is the approximate speed of light?",
        "options": [
            "165 miles per hour",
            "122,000 miles per hour",
            "186,000 miles per second",
            "293,000 miles per second"
        ],
        correct: "186,000 miles per second",
        id: "267"
    },
    {
        "question": "What is the art of elegant handwriting called?",
        "options": [
            "calligraphy",
            "engraving",
            "decoupage",
            "lithography"
        ],
        correct: "calligraphy",
        id: "268"
    },
    {
        "question": "What is the baseball term for a batter who substitutes for another batter?",
        "options": [
            "switchhitter",
            "shadow hitter",
            "clip hitter ",
            "pinch hitter"
        ],
        correct: "pinch hitter",
        id: "269"
    },
    {
        "question": "What is the birthstone for the month of January?",
        "options": [
            "topaz",
            "garnet",
            "opal",
            "diamond"
        ],
        correct: "garnet",
        id: "270"
    },
    {
        "question": "What is the capital of New Zealand?",
        "options": [
            "Sydney",
            "Wellington",
            "Auckland",
            "Melbourne"
        ],
        correct: "Wellington",
        id: "271"
    },
    {
        "question": "What is the capital of North Dakota?",
        "options": [
            "Bismarck",
            "Fargo",
            "Sioux Falls",
            "Pierre"
        ],
        correct: "Bismarck",
        id: "272"
    },
    {
        "question": "What is the chemical process wherein a solid is turned to a liquid via the application of heat?",
        "options": [
            "distillation",
            "photosynthesis",
            "freezing",
            "melting"
        ],
        correct: "melting",
        id: "273"
    },
    {
        "question": "What is the colored part of the eye called?",
        "options": [
            "iris",
            "pupil",
            "retina",
            "cochlea"
        ],
        correct: "iris",
        id: "274"
    },
    {
        "question": "What is the correct spelling of New Mexico's largest city?",
        "options": [
            "Albuqerque",
            "Albuquerque",
            "Albequerque",
            "Santa Fe"
        ],
        correct: "Albuquerque",
        id: "275"
    },
    {
        "question": "What is the final word of the Pledge of Allegiance?",
        "options": [
            "America",
            "stands",
            "indivisible",
            "all"
        ],
        correct: "all",
        id: "276"
    },
    {
        "question": "What is the largest animal ever to live on Earth?",
        "options": [
            "blue whale",
            "giant squid",
            "woolly mammoth",
            "Tyrannosaurus"
        ],
        correct: "blue whale",
        id: "277"
    },
    {
        "question": "What is the largest city in Pennsylvania?",
        "options": [
            "Philadelphia",
            "Stewartsville",
            "Harrisburg",
            "Pittsburgh"
        ],
        correct: "Philadelphia",
        id: "278"
    },
    {
        "question": "What is the last book of the New Testament?",
        "options": [
            "Revelation",
            "Judges",
            "Ruth",
            "John"
        ],
        correct: "Revelation",
        id: "279"
    },
    {
        "question": "What is the last letter of the Greek alphabet?",
        "options": [
            "omicron",
            "omega",
            "upsilon",
            "zeta"
        ],
        correct: "omega",
        id: "280"
    },
    {
        "question": "What is the meaning of 'Betelgeuse', the name of the brightest star in the constellation Orion?",
        "options": [
            "blossom on a shield",
            "eye of the archer",
            "the lion's mane",
            "armpit of the giant"
        ],
        correct: "armpit of the giant",
        id: "281"
    },
    {
        "question": "What is the medical term for a doctor's identification of a disease?",
        "options": [
            "Hypnosis",
            "Prognosis",
            "Trichinosis",
            "Diagnosis"
        ],
        correct: "Diagnosis",
        id: "282"
    },
    {
        "question": "What is the more common name for the disease 'pertussis'?",
        "options": [
            "whooping cough",
            "tennis elbow",
            "black lung",
            "German measles"
        ],
        correct: "whooping cough",
        id: "283"
    },
    {
        "question": "What is the most popular month for weddings in America?",
        "options": [
            "January",
            "May",
            "August",
            "November"
        ],
        correct: "August",
        id: "284"
    },
    {
        "question": "What is the name for the thin board used to mix colors while painting?",
        "options": [
            "pestle",
            "easel",
            "shoe",
            "palette"
        ],
        correct: "palette",
        id: "285"
    },
    {
        "question": "What is the name of Howard Stern's female on-air sidekick?",
        "options": [
            "Allison Norris",
            "Jackie Reeses",
            "Jackie Martling",
            "Robin Quivers"
        ],
        correct: "Robin Quivers",
        id: "286"
    },
    {
        "question": "What is the name of Mario's brother in the 'Super Mario' video games?",
        "options": [
            "Louis",
            "Luigi",
            "Luciano",
            "Zelda"
        ],
        correct: "Luigi",
        id: "287"
    },
    {
        "question": "What is the name of Raggedy Ann's doll brother?",
        "options": [
            "Red",
            "Freckles",
            "Randy",
            "Andy"
        ],
        correct: "Andy",
        id: "288"
    },
    {
        "question": "What is the name of the baby who appears in cartoons and comic strips with Popeye the Sailor?",
        "options": [
            "Pun'kin",
            "Lamikins",
            "Suga'baby",
            "Swee'pea"
        ],
        correct: "Swee'pea",
        id: "289"
    },
    {
        "question": "What is the name of the character Played by Woody Allen in the 1967 James Bond film 'Casino Royale'?",
        "options": [
            "Dr. Evil",
            "Q",
            "Little Jimmy Bond",
            "M"
        ],
        correct: "Little Jimmy Bond",
        id: "290"
    },
    {
        "question": "What is the name of the female character played by comedian Flip Wilson on his 1970s TV show?",
        "options": [
            "Miss Jackie",
            "Elizabeth Sanford",
            "Geraldine Jones",
            "Gladys Knight"
        ],
        correct: "Geraldine Jones",
        id: "291"
    },
    {
        "question": "What is the name of the fruit that is half tangerine and half grapefruit?",
        "options": [
            "graperine",
            "tangefruit",
            "tangelo",
            "kumquat"
        ],
        correct: "tangelo",
        id: "292"
    },
    {
        "question": "What is the name of the mountain where the mythological Greek gods live?",
        "options": [
            "Jupiter",
            "Olympus",
            "Vesuvius",
            "Valhalla"
        ],
        correct: "Olympus",
        id: "293"
    },
    {
        "question": "What is the name of the Newtonian law that states 'An object in Motion tends to stay in motion'?",
        "options": [
            "Law of Inertia",
            "Law of Thermodynamics",
            "Law of Relativity",
            "Law of Gravitation"
        ],
        correct: "Law of Inertia",
        id: "294"
    },
    {
        "question": "What is the name of the POW camp where 'Hogan's Heroes' are held?",
        "options": [
            "Stalag 13",
            "Alcatraz 17",
            "Devil's Island",
            "Leavenworth"
        ],
        correct: "Stalag 13",
        id: "295"
    },
    {
        "question": "What is the name of the South African political party that was headed by Nelson Mandela?",
        "options": [
            "African National Congress",
            "South African Democrats",
            "Inkatha Freedom Party",
            "Aryan National Assembly"
        ],
        correct: "African National Congress",
        id: "296"
    },
    {
        "question": "What is the name of the StarKist tuna mascot?",
        "options": [
            "Charlie",
            "Sam",
            "Al",
            "Morris"
        ],
        correct: "Charlie",
        id: "297"
    },
    {
        "question": "What is the name of the Swedish company that specializes in affordable furniture?",
        "options": [
            "Gambro",
            "Electrolux",
            "Saab",
            "IKEA"
        ],
        correct: "IKEA",
        id: "298"
    },
    {
        "question": "What is the national animal of Australia?",
        "options": [
            "koala",
            "kangaroo",
            "platypus",
            "alligator"
        ],
        correct: "kangaroo",
        id: "299"
    },
    {
        "question": "What is the nickname of Florida's controversial death row electric chair?",
        "options": [
            "Old Yeller",
            "Old Geezer",
            "Old Smoky",
            "Old Sparky"
        ],
        correct: "Old Sparky",
        id: "300"
    },
    {
        "question": "What is the normal playback speed of a 12\" long-playing record?",
        "options": [
            "12 1/2 rpm",
            "33 1/3 rpm",
            "45 rpm",
            "100 rpm"
        ],
        correct: "33 1/3 rpm",
        id: "301"
    },
    {
        "question": "What is the official language of The Netherlands?",
        "options": [
            "Danish",
            "Swedish",
            "German",
            "Dutch"
        ],
        correct: "Dutch",
        id: "302"
    },
    {
        "question": "What is the oldest continuously run sporting event in the United States?",
        "options": [
            "Westminster Dog Show",
            "Boston Marathon",
            "Kentucky Derby",
            "Indianapolis 500"
        ],
        correct: "Kentucky Derby",
        id: "303"
    },
    {
        "question": "What is the oldest permanent European settlement in the United States?",
        "options": [
            "St. Augustine, Florida",
            "Plymouth, Massachusetts",
            "Newport News, Virginia",
            "Charlotte, North Carolina"
        ],
        correct: "St. Augustine, Florida",
        id: "304"
    },
    {
        "question": "What is the principal ingredient in traditional cole slaw?",
        "options": [
            "lettuce",
            "spinach ",
            "cabbage",
            "chicory"
        ],
        correct: "cabbage",
        id: "305"
    },
    {
        "question": "What is the proletariat?",
        "options": [
            "the homeless",
            "the royalty",
            "the upper class",
            "the working class"
        ],
        correct: "the working class",
        id: "306"
    },
    {
        "question": "What is the proper nautical use of an anchor?",
        "options": [
            "to catch large fish",
            "to calculate water depth",
            "to hold a ship in place",
            "to damage other boats"
        ],
        correct: "to hold a ship in place",
        id: "307"
    },
    {
        "question": "What is the singular form of the word 'graffiti'?",
        "options": [
            "graffita",
            "graffitem",
            "graffito",
            "graffitus"
        ],
        correct: "graffito",
        id: "308"
    },
    {
        "question": "What is the square root of 81 squared?",
        "options": [
            "9",
            "27",
            "81",
            "729"
        ],
        correct: "81",
        id: "309"
    },
    {
        "question": "What is the technical term for someone who studies fish?",
        "options": [
            "entomologist",
            "ichthyologist",
            "marinologist",
            "herpetologist"
        ],
        correct: "ichthyologist",
        id: "310"
    },
    {
        "question": "What is the technical term for the offspring of a female donkey and a male horse?",
        "options": [
            "burro",
            "dorse",
            "hinny",
            "honker"
        ],
        correct: "hinny",
        id: "311"
    },
    {
        "question": "What is the traditional 20th wedding anniversary gift?",
        "options": [
            "paper",
            "leather",
            "china",
            "silver"
        ],
        correct: "china",
        id: "312"
    },
    {
        "question": "What is varicella?",
        "options": [
            "a fancy pasta",
            "a type of opera",
            "the chicken pox virus",
            "ancient Roman poetry"
        ],
        correct: "the chicken pox virus",
        id: "313"
    },
    {
        "question": "What is your astrological sign if you were born on Halloween?",
        "options": [
            "Scorpio",
            "Capricorn",
            "Libra",
            "Cancer"
        ],
        correct: "Scorpio",
        id: "314"
    },
    {
        "question": "What is your hallux?",
        "options": [
            "earlobe",
            "tongue",
            "eyelid",
            "big toe"
        ],
        correct: "big toe",
        id: "315"
    },
    {
        "question": "What kind of angle is formed where two perpendicular lines meet?",
        "options": [
            "obtuse",
            "acute",
            "right",
            "invisible"
        ],
        correct: "right",
        id: "316"
    },
    {
        "question": "What kind of animal is a peregrine?",
        "options": [
            "moose",
            "cat",
            "bird",
            "fish"
        ],
        correct: "bird",
        id: "317"
    },
    {
        "question": "What kind of animal is cartoon character Tennessee Tuxedo?",
        "options": [
            "cat",
            "skunk",
            "walrus",
            "penguin"
        ],
        correct: "penguin",
        id: "318"
    },
    {
        "question": "What kind of car did Burt Reynolds drive in the movie 'Smokey and the Bandit'?",
        "options": [
            "Lamborghini",
            "Camaro",
            "Corvette",
            "Trans Am"
        ],
        correct: "Trans Am",
        id: "319"
    },
    {
        "question": "What kind of flying contraption is featured in the movie 'Chitty Chitty Bang Bang'?",
        "options": [
            "boat",
            "car",
            "truck",
            "bike"
        ],
        correct: "car",
        id: "320"
    },
    {
        "question": "What kind of item is a ginsu?",
        "options": [
            "radio",
            "knife",
            "toothbrush",
            "martial arts weapon"
        ],
        correct: "knife",
        id: "321"
    },
    {
        "question": "What kind of worker uses a 'paddy wagon'?",
        "options": [
            "limo driver",
            "police officer",
            "rice farmer",
            "paramedic"
        ],
        correct: "police officer",
        id: "322"
    },
    {
        "question": "What letters are on the '3' button of a touch-tone telephone?",
        "options": [
            "ABC",
            "DEF",
            "GHI",
            "WXY"
        ],
        correct: "DEF",
        id: "323"
    },
    {
        "question": "What liqueur is used to make a Pink Lady cocktail pink?",
        "options": [
            "grenadine",
            "schnapps",
            "triple sec",
            "pernod"
        ],
        correct: "grenadine",
        id: "324"
    },
    {
        "question": "What literary work is the source of the quote 'Abandon every hope, all you who enter here'?",
        "options": [
            "'Paradise Lost'",
            "'The Divine Comedy'",
            "'Beowulf'",
            "'Twilight'"
        ],
        correct: "'The Divine Comedy'",
        id: "325"
    },
    {
        "question": "What mathematical term is used to describe the average of a series of numbers?",
        "options": [
            "median",
            "mode",
            "majority",
            "mean"
        ],
        correct: "mean",
        id: "326"
    },
    {
        "question": "What metal device is used by police to immobilize the wheels of repeat parking offenders?",
        "options": [
            "Brooklyn clamp",
            "Denver boot",
            "LoJack",
            "The Club"
        ],
        correct: "Denver boot",
        id: "327"
    },
    {
        "question": "What Mexican holiday takes place on May 5th?",
        "options": [
            "Mexican Independence Day",
            "Santa Anna's Birthday",
            "Cinco de Mayo",
            "Christmas"
        ],
        correct: "Cinco de Mayo",
        id: "328"
    },
    {
        "question": "What nationality was Karl Marx?",
        "options": [
            "Russian",
            "German",
            "Danish",
            "English"
        ],
        correct: "German",
        id: "329"
    },
    {
        "question": "What Native American tribe did chief Crazy Horse lead?",
        "options": [
            "Apache",
            "Comanche",
            "Sioux",
            "Iroquois"
        ],
        correct: "Sioux",
        id: "330"
    },
    {
        "question": "What native empire controlled Large areas of South African Territory during the 19th century?",
        "options": [
            "Hutu",
            "Zulu",
            "Aztec",
            "Masai"
        ],
        correct: "Zulu",
        id: "331"
    },
    {
        "question": "What New Age musician released a 1998 album titled 'King of the Pan Flute'?",
        "options": [
            "Zamfir",
            "Yanni",
            "Vangelis",
            "Kenny G"
        ],
        correct: "Zamfir",
        id: "332"
    },
    {
        "question": "What new token was recently added to the Monopoly board game?",
        "options": [
            "piggybank",
            "sack of money",
            "globe",
            "telephone"
        ],
        correct: "sack of money",
        id: "333"
    },
    {
        "question": "What newspaper do Lois Lane and Clark Kent work for?",
        "options": [
            "The Bugle",
            "The Daily Planet",
            "The Metropolis Tribune",
            "The New York Times"
        ],
        correct: "The Daily Planet",
        id: "334"
    },
    {
        "question": "What part of the human body does a gastroenterologist examine?",
        "options": [
            "brain",
            "skeleton",
            "stomach",
            "nose"
        ],
        correct: "stomach",
        id: "335"
    },
    {
        "question": "What part of the world was once known as Cathay?",
        "options": [
            "China",
            "India",
            "Iran",
            "Indonesia"
        ],
        correct: "China",
        id: "336"
    },
    {
        "question": "What people ruled the Andes Mountains until they were conquered by the Spanish in 1532?",
        "options": [
            "Pueblo",
            "Aztec",
            "Inca",
            "Apache"
        ],
        correct: "Inca",
        id: "337"
    },
    {
        "question": "What place is named in the title of the 1979 live album by rock legends Cheap Trick?",
        "options": [
            "Budapest",
            "Budokan",
            "Bhutan",
            "Britain"
        ],
        correct: "Budokan",
        id: "338"
    },
    {
        "question": "What popular toy is featured in the film 'The Hudsucker Proxy'?",
        "options": [
            "Beanie Babies",
            "Hula Hoop",
            "Lincoln Logs",
            "Lite Brite"
        ],
        correct: "Hula Hoop",
        id: "339"
    },
    {
        "question": "What pro wrestler grapples with Sylvester Stallone in the movie 'Rocky III'?",
        "options": [
            "Dolph Lundgren",
            "Hulk Hogan",
            "Andre the Giant",
            "The Iron Sheik"
        ],
        correct: "Hulk Hogan",
        id: "340"
    },
    {
        "question": "What professional sports team plays its home games in the Alamodome?",
        "options": [
            "New York Jets",
            "Detroit Tigers",
            "Boston Bruins",
            "San Antonio Spurs"
        ],
        correct: "San Antonio Spurs",
        id: "341"
    },
    {
        "question": "What rank entitles a general in the US Army to wear three stars?",
        "options": [
            "brigadier general",
            "corporal general",
            "lieutenant general",
            "major general"
        ],
        correct: "lieutenant general",
        id: "342"
    },
    {
        "question": "What recording artist claims that sportscaster Marv Albert was a major influence on his sound?",
        "options": [
            "David Lee Roth",
            "Meat Loaf",
            "Axl Rose",
            "Chuck D"
        ],
        correct: "Chuck D",
        id: "343"
    },
    {
        "question": "What singer appeared in the 1992 baseball film 'A League of Their Own'?",
        "options": [
            "Brandy",
            "Madonna",
            "Garth Brooks",
            "Whitney Houston"
        ],
        correct: "Madonna",
        id: "344"
    },
    {
        "question": "What sport is featured in the 1996 movie 'Kingpin'?",
        "options": [
            "wrestling",
            "golf",
            "chess",
            "bowling"
        ],
        correct: "bowling",
        id: "345"
    },
    {
        "question": "What sport is known as 'The Sport of Kings'?",
        "options": [
            "polo",
            "archery",
            "yachting",
            "horse racing"
        ],
        correct: "horse racing",
        id: "346"
    },
    {
        "question": "What sporting event is held annually on Memorial Day weekend?",
        "options": [
            "iditarod",
            "Kentucky Derby",
            "Indianapolis 500",
            "Super Bowl"
        ],
        correct: "Indianapolis 500",
        id: "347"
    },
    {
        "question": "What substance was used for blood in the famous shower scene from the movie 'Psycho'?",
        "options": [
            "tomato juice",
            "red wine",
            "chocolate syrup",
            "ketchup"
        ],
        correct: "chocolate syrup",
        id: "348"
    },
    {
        "question": "What tea is known for its distinctive bergamot flavor?",
        "options": [
            "Earl Grey",
            "Darjeeling",
            "English Breakfast",
            "Prince of Wales"
        ],
        correct: "Earl Grey",
        id: "349"
    },
    {
        "question": "What team has won the most World Series?",
        "options": [
            "Chicago Cubs",
            "Los Angeles Dodgers",
            "New York Yankees",
            "San Francisco Giants"
        ],
        correct: "New York Yankees",
        id: "350"
    },
    {
        "question": "What term describes a tribe that has no set homeland and wanders from place to place?",
        "options": [
            "Nomadic",
            "Pedantic",
            "Schematic",
            "Cathartic"
        ],
        correct: "Nomadic",
        id: "351"
    },
    {
        "question": "What term describes a word created by rearranging the letters of another word?",
        "options": [
            "onomatopoeia",
            "malapropism",
            "anagram",
            "antonym"
        ],
        correct: "anagram",
        id: "352"
    },
    {
        "question": "What term describes someone who does not believe in the existence of God?",
        "options": [
            "hedonist",
            "deist",
            "agnostic",
            "atheist"
        ],
        correct: "atheist",
        id: "353"
    },
    {
        "question": "What term describes the passing of genetic traits from one generation to the next?",
        "options": [
            "heredity",
            "heresy",
            "homogeneity",
            "hemoglobin"
        ],
        correct: "heredity",
        id: "354"
    },
    {
        "question": "What term is used to describe a group of fish?",
        "options": [
            "knot",
            "drape",
            "school",
            "gaggle"
        ],
        correct: "school",
        id: "355"
    },
    {
        "question": "What term is used to describe a group of geese?",
        "options": [
            "gaggle",
            "gang",
            "gander",
            "grist"
        ],
        correct: "gaggle",
        id: "356"
    },
    {
        "question": "What topic does Spin magazine primarily cover?",
        "options": [
            "politics",
            "washing machines",
            "books",
            "music"
        ],
        correct: "music",
        id: "357"
    },
    {
        "question": "What type of meat is on a traditional Reuben sandwich?",
        "options": [
            "turkey",
            "bologna",
            "corned beef",
            "pepperoni"
        ],
        correct: "corned beef",
        id: "358"
    },
    {
        "question": "What type of substance is 'terra-cotta'?",
        "options": [
            "metal",
            "ceramic",
            "wood",
            "glass"
        ],
        correct: "ceramic",
        id: "359"
    },
    {
        "question": "What U.S. president is mentioned by name in the opening theme song of TV's 'All in the Family'?",
        "options": [
            "Calvin Coolidge",
            "Harry Truman",
            "Herbert Hoover",
            "Richard Nixon"
        ],
        correct: "Herbert Hoover",
        id: "360"
    },
    {
        "question": "What was Ludwig Van Beethoven's final symphony?",
        "options": [
            "Ninth",
            "Tenth",
            "Eleventh",
            "Twelfth"
        ],
        correct: "Ninth",
        id: "361"
    },
    {
        "question": "What was Richard Nixon's middle name?",
        "options": [
            "Michael",
            "Milhous",
            "Mortimer",
            "Matthew"
        ],
        correct: "Milhous",
        id: "362"
    },
    {
        "question": "What was the birth name of civil rights leader Malcolm X?",
        "options": [
            "Michael Brown",
            "Malcolm Little",
            "Malcolm Lincoln",
            "Michael Lloyd"
        ],
        correct: "Malcolm Little",
        id: "363"
    },
    {
        "question": "What was the first American college to become coeducational?",
        "options": [
            "Oberlin College",
            "Dartmouth College",
            "Grinnell College",
            "Antioch College"
        ],
        correct: "Oberlin College",
        id: "364"
    },
    {
        "question": "What was the name of Huey Lewis' band?",
        "options": [
            "The News",
            "The Attractions",
            "The Silver Bullet Band",
            "Louie and Dewey"
        ],
        correct: "The News",
        id: "365"
    },
    {
        "question": "What was the name of the 1999 art exhibit that sparked a national debate about censorship?",
        "options": [
            "'Sticks & Stones'",
            "'Pulsation'",
            "'Black & White'",
            "'Sensation'"
        ],
        correct: "'Sensation'",
        id: "366"
    },
    {
        "question": "What was the name of the first nuclear-powered submarine?",
        "options": [
            "Nautilus",
            "Neptune",
            "Nordenfelt III",
            "Nicholas"
        ],
        correct: "Nautilus",
        id: "367"
    },
    {
        "question": "What was the name of the first ship to sail around the world?",
        "options": [
            "Triton",
            "Victoria",
            "Magellan",
            "Elizabeth II"
        ],
        correct: "Victoria",
        id: "368"
    },
    {
        "question": "What was the original name of the Apple Macintosh XL computer?",
        "options": [
            "Lisa 2",
            "Mac Daddy",
            "Granny Smith",
            "Orange XL"
        ],
        correct: "Lisa 2",
        id: "369"
    },
    {
        "question": "What was the title of Beethoven's only completed opera?",
        "options": [
            "'Faust'",
            "'The Silence'",
            "'Immortal Beloved'",
            "'Fidelio'"
        ],
        correct: "'Fidelio'",
        id: "370"
    },
    {
        "question": "What were the first names of the early American explorers Lewis and Clark?",
        "options": [
            "Morgan and Mason",
            "Meriwether and William",
            "Cabot and Joseph",
            "Meredith and George"
        ],
        correct: "Meriwether and William",
        id: "371"
    },
    {
        "question": "What's the popular name of the breakfast meal consisting of sausages wrapped in pancakes?",
        "options": [
            "ducks in a pond",
            "pigs in a blanket",
            "cows in a pasture",
            "dogs in the oven"
        ],
        correct: "pigs in a blanket",
        id: "372"
    },
    {
        "question": "What's the third letter of the Greek alphabet?",
        "options": [
            "delta",
            "gamma",
            "phi",
            "theta"
        ],
        correct: "gamma",
        id: "373"
    },
    {
        "question": "What's unique about a skeleton key?",
        "options": [
            "It opens many locks.",
            "It's made of bone.",
            "It's extremely old.",
            "It hangs in a closet."
        ],
        correct: "It opens many locks.",
        id: "374"
    },
    {
        "question": "When daylight-saving time arrives in the spring, how do most Americans turn their clocks?",
        "options": [
            "one hour forward",
            "one hour backward",
            "two hours forward",
            "two hours backward"
        ],
        correct: "one hour backward",
        id: "375"
    },
    {
        "question": "When driving, which of the following gestures means 'left turn'?",
        "options": [
            "arm bent upwards",
            "thumbs up",
            "closed fist",
            "arm straight out"
        ],
        correct: "arm straight out",
        id: "376"
    },
    {
        "question": "In the presidential election of 1932, how many U.S. states did FDR not win the electoral votes for?",
        "options": [
            "six",
            "seven",
            "eight",
            "ten"
        ],
        correct: "six",
        id: "377"
    },
    {
        "question": "When it comes to measuring horses, how long is a 'hand'?",
        "options": [
            "four inches",
            "seven inches",
            "ten inches",
            "two feet"
        ],
        correct: "four inches",
        id: "378"
    },
    {
        "question": "When it first appeared on the Internet, amazon.com sold only what?",
        "options": [
            "books",
            "compact discs",
            "cars",
            "clothes"
        ],
        correct: "books",
        id: "379"
    },
    {
        "question": "When it's noon in New York during daylight-saving time, what time is it in Honolulu?",
        "options": [
            "6:00 a.m.",
            "6:30 a.m.",
            "7:00 a.m.",
            "8:00 a.m."
        ],
        correct: "6:00 a.m.",
        id: "380"
    },
    {
        "question": "Where are fireworks first known to have been developed?",
        "options": [
            "Italy",
            "China",
            "Great Britain",
            "Greece"
        ],
        correct: "China",
        id: "381"
    },
    {
        "question": "Where did jazz great Sun Ra claim he was born?",
        "options": [
            "Atlantis",
            "Mount Olympus",
            "Saturn",
            "in a saxophone"
        ],
        correct: "Saturn",
        id: "382"
    },
    {
        "question": "Where did Lewis and Clark begin their famous expedition in 1804?",
        "options": [
            "Seattle",
            "St. Louis",
            "New Orleans",
            "Washington, DC"
        ],
        correct: "St. Louis",
        id: "383"
    },
    {
        "question": "Where did the Exxon Valdez run aground in March of 1989?",
        "options": [
            "Monterey Bay",
            "Prince William Sound",
            "Cape Cod",
            "Gulf of Mexico"
        ],
        correct: "Prince William Sound",
        id: "384"
    },
    {
        "question": "Where is Ghirardelli Square located?",
        "options": [
            "Milan",
            "Rome",
            "Washington DC",
            "San Francisco"
        ],
        correct: "San Francisco",
        id: "385"
    },
    {
        "question": "Where is the Louvre museum?",
        "options": [
            "Paris",
            "Lyon",
            "Geneva",
            "Vichy"
        ],
        correct: "Paris",
        id: "386"
    },
    {
        "question": "Where was the chicken first domesticated?",
        "options": [
            "France",
            "India",
            "Peru",
            "Zaire"
        ],
        correct: "India",
        id: "387"
    },
    {
        "question": "Where would you typically find a bailiff?",
        "options": [
            "grocery store",
            "courtroom",
            "football stadium",
            "doctor's office"
        ],
        correct: "courtroom",
        id: "388"
    },
    {
        "question": "Where is the Frank Lloyd Wright-designed house known as Falling Water?",
        "options": [
            "Connecticut",
            "Pennsylvania",
            "Illinois",
            "New York"
        ],
        correct: "Pennsylvania",
        id: "389"
    },
    {
        "question": "Which actress played a pointy-eared Vulcan in the movie 'Star Trek II: The Wrath of Khan'?",
        "options": [
            "Whoopi Goldberg",
            "Jennifer Grey",
            "Kirstie Alley",
            "Helen Hunt"
        ],
        correct: "Kirstie Alley",
        id: "390"
    },
    {
        "question": "Which American colony, known for its religious tolerance, did Roger Williams found in 1636?",
        "options": [
            "Massachusetts",
            "Rhode Island",
            "Virginia",
            "Vermont"
        ],
        correct: "Rhode Island",
        id: "391"
    },
    {
        "question": "Which brand of cat food claims it's so tasty that 'cats ask for it by name'?",
        "options": [
            "Fancy Feast",
            "Cat Chow",
            "Meow Mix",
            "9-Lives"
        ],
        correct: "Meow Mix",
        id: "392"
    },
    {
        "question": "Which character on the TV show 'Friends' is a chef?",
        "options": [
            "Joey",
            "Monica",
            "Ross",
            "Rachel"
        ],
        correct: "Monica",
        id: "393"
    },
    {
        "question": "Which company holds an annual self-named 'Bake-Off'?",
        "options": [
            "Betty Crocker",
            "Duncan Hines",
            "Pillsbury",
            "Keebler"
        ],
        correct: "Pillsbury",
        id: "394"
    },
    {
        "question": "Which famed modeling agency shares its name with a top U.S. automaker?",
        "options": [
            "Ford",
            "Chevrolet",
            "Chrysler",
            "Saturn"
        ],
        correct: "Ford",
        id: "395"
    },
    {
        "question": "Which fast food chain used the advertising slogan, 'Where's the beef?'",
        "options": [
            "Wendy's",
            "Kentucky Fried Chicken",
            "Burger King",
            "McDonald's"
        ],
        correct: "Wendy's",
        id: "396"
    },
    {
        "question": "Which of the boys on the TV show 'My Three Sons' is adopted?",
        "options": [
            "Mike",
            "Ernie",
            "Chip",
            "Robbie"
        ],
        correct: "Ernie",
        id: "397"
    },
    {
        "question": "Which of the following articles of clothing has a hood?",
        "options": [
            "parka",
            "kilt",
            "lederhosen",
            "sarong"
        ],
        correct: "parka",
        id: "398"
    },
    {
        "question": "Which of the following beverages is brewed from the leaves of a plant?",
        "options": [
            "tea",
            "coffee",
            "ginger ale",
            "wine"
        ],
        correct: "tea",
        id: "399"
    },
    {
        "question": "Which of the following breakfast cereals is shaped like the letter O?",
        "options": [
            "Life Corn",
            "Chex",
            "Cheerios",
            "Raisin Bran"
        ],
        correct: "Cheerios",
        id: "400"
    },
    {
        "question": "Which of the following candies is traditionally fruit flavored?",
        "options": [
            "M&M's",
            "Skittles",
            "Reese's Pieces",
            "Junior Mints"
        ],
        correct: "Skittles",
        id: "401"
    },
    {
        "question": "Which of the following is a natural sugar found in most fruits?",
        "options": [
            "necrose",
            "fructose",
            "bellicose",
            "pantiose"
        ],
        correct: "fructose",
        id: "402"
    },
    {
        "question": "Which of the following is a sports award?",
        "options": [
            "Oscar",
            "Emmy",
            "Nobel",
            "Espy"
        ],
        correct: "Espy",
        id: "403"
    },
    {
        "question": "Which of the following is about the Watergate scandal?",
        "options": [
            "'All the King's Men'",
            "'All the Pretty Horses'",
            "'All the President's Men'",
            "'All the Right Moves'"
        ],
        correct: "'All the President's Men'",
        id: "404"
    },
    {
        "question": "Which of the following is most commonly kept in a terrarium?",
        "options": [
            "money",
            "books",
            "ice",
            "plants"
        ],
        correct: "plants",
        id: "405"
    },
    {
        "question": "Which of the following is not a flavor of Ben & Jerry's Ice Cream?",
        "options": [
            "Wavy Gravy",
            "Bovinity Divinity",
            "Cutie Patootie",
            "Chubby Hubby"
        ],
        correct: "Cutie Patootie",
        id: "406"
    },
    {
        "question": "Which of the following is not a TV cartoon duo?",
        "options": [
            "Chip and Dale",
            "Beavis and Butt-head",
            "Simon and Garfunkel",
            "Tom and Jerry"
        ],
        correct: "Simon and Garfunkel",
        id: "407"
    },
    {
        "question": "Which of the following is not in Nevada?",
        "options": [
            "Liberace Museum",
            "Pikes Peak",
            "Lake Mead",
            "Hoover Dam"
        ],
        correct: "Pikes Peak",
        id: "408"
    },
    {
        "question": "Which of the following must be obtained by foreigners wishing to permanently reside in the US?",
        "options": [
            "visa",
            "bill of landing",
            "driver's license",
            "carte blanche"
        ],
        correct: "visa",
        id: "409"
    },
    {
        "question": "Which of the following requires the use of at least two needles?",
        "options": [
            "macrame",
            "braiding",
            "crocheting",
            "hand knitting"
        ],
        correct: "hand knitting",
        id: "410"
    },
    {
        "question": "Which of the following words does not appear in the Lewis Carroll poem 'Jabberwocky'?",
        "options": [
            "brillig",
            "bandersnatch",
            "wabe",
            "grelp"
        ],
        correct: "grelp",
        id: "411"
    },
    {
        "question": "Which of the Three Stooges was not related to the others?",
        "options": [
            "Moe",
            "Larry",
            "Curly",
            "Shemp"
        ],
        correct: "Larry",
        id: "412"
    },
    {
        "question": "Which of these actors did one-handed push-ups on stage at the 1992 Academy Awards?",
        "options": [
            "Sylvester Stallone",
            "Jack Nicholson",
            "Jack Palance",
            "Marisa Tomei"
        ],
        correct: "Jack Palance",
        id: "413"
    },
    {
        "question": "Which of these animals lays eggs?",
        "options": [
            "cow",
            "gerbil",
            "frog",
            "elephant"
        ],
        correct: "frog",
        id: "414"
    },
    {
        "question": "Which of these animals shares its name with a luxury car?",
        "options": [
            "yak",
            "gazelle",
            "sloth",
            "jaguar"
        ],
        correct: "jaguar",
        id: "415"
    },
    {
        "question": "Which of these are not legumes?",
        "options": [
            "beans",
            "peas",
            "radishes",
            "peanuts"
        ],
        correct: "radishes",
        id: "416"
    },
    {
        "question": "Which of these Australian birds is most closely related to the ostrich?",
        "options": [
            "puffin",
            "kookaburra",
            "cockatoo",
            "emu"
        ],
        correct: "emu",
        id: "417"
    },
    {
        "question": "Which of these candy bars was named for a baseball player?",
        "options": [
            "Baby Ruth",
            "Clark Bar",
            "Reggie Bar",
            "Butterfinger"
        ],
        correct: "Baby Ruth",
        id: "418"
    },
    {
        "question": "Which of these college football programs has produced the most Heisman Trophy winners?",
        "options": [
            "Notre Dame",
            "USC",
            "Oklahoma",
            "Michigan"
        ],
        correct: "Notre Dame",
        id: "419"
    },
    {
        "question": "Which of these colors is a shade of blue?",
        "options": [
            "ochre",
            "periwinkle",
            "mauve",
            "ecru"
        ],
        correct: "periwinkle",
        id: "420"
    },
    {
        "question": "Which of these countries does not participate in NAFTA?",
        "options": [
            "United States",
            "Canada",
            "Mexico",
            "Guatemala"
        ],
        correct: "Guatemala",
        id: "421"
    },
    {
        "question": "Which of these companies is not an online stock brokerage?",
        "options": [
            "E*Trade",
            "EDigital",
            "Datek Online",
            "DLJ Direct"
        ],
        correct: "EDigital",
        id: "422"
    },
    {
        "question": "Which of these countries is not in Europe?",
        "options": [
            "Italy",
            "Spain",
            "Greece",
            "Israel"
        ],
        correct: "Israel",
        id: "423"
    },
    {
        "question": "Which of these countries was not a member of the Axis nations during World War II?",
        "options": [
            "Germany",
            "Italy",
            "Spain",
            "Japan"
        ],
        correct: "Spain",
        id: "424"
    },
    {
        "question": "Which of these Democrats lost to Ronald Reagan in the 1984 presidential elections?",
        "options": [
            "Michael Dukakis",
            "Walter Mondale",
            "Gary Hart",
            "Jimmy Carter"
        ],
        correct: "Walter Mondale",
        id: "425"
    },
    {
        "question": "Which of these dishes is made from pig intestines?",
        "options": [
            "haggis",
            "chitlins",
            "grits",
            "chop suey"
        ],
        correct: "chitlins",
        id: "426"
    },
    {
        "question": "Which of these evangelists is a cousin of rocker Jerry Lee Lewis?",
        "options": [
            "Billy Graham",
            "Oral Roberts",
            "Jerry Falwell",
            "Jimmy Swaggart"
        ],
        correct: "Jimmy Swaggart",
        id: "427"
    },
    {
        "question": "Which of these famous baseball figures was once acquitted at court-martial for insubordination?",
        "options": [
            "Abner Doubleday",
            "Ty Cobb",
            "Jackie Robinson",
            "Billy Martin"
        ],
        correct: "Jackie Robinson",
        id: "428"
    },
    {
        "question": "Which of these fashion designers was born in the United States?",
        "options": [
            "Laura Ashley",
            "Helmut Lang",
            "Donna Karan",
            "Christian Dior"
        ],
        correct: "Donna Karan",
        id: "429"
    },
    {
        "question": "Which of these foods could contain small amounts of naturally occurring opium?",
        "options": [
            "chocolate truffles",
            "poppy seed bagels",
            "carbonated soda",
            "sesame chicken"
        ],
        correct: "poppy seed bagels",
        id: "430"
    },
    {
        "question": "Which of these foods could you catch at sea?",
        "options": [
            "shallot",
            "stollen",
            "scallop",
            "scone"
        ],
        correct: "scallop",
        id: "431"
    },
    {
        "question": "Which of these foods is poisonous to dogs?",
        "options": [
            "peanut butter",
            "bananas",
            "chocolate",
            "olives"
        ],
        correct: "chocolate",
        id: "432"
    },
    {
        "question": "Which of these games is not played with cards?",
        "options": [
            "baccarat",
            "rummy",
            "craps",
            "solitaire"
        ],
        correct: "craps",
        id: "433"
    },
    {
        "question": "Which of these foods is not traditionally considered kosher?",
        "options": [
            "citrus fruits",
            "barley",
            "chicken",
            "shellfish"
        ],
        correct: "shellfish",
        id: "434"
    },
    {
        "question": "Which of these Hemingway characters is a newspaperman?",
        "options": [
            "Jake Barnes",
            "Rogelio Gomez",
            "Frederic Henry",
            "John MacWalsey"
        ],
        correct: "Jake Barnes",
        id: "435"
    },
    {
        "question": "Which of these holidays is not attached to a specific date?",
        "options": [
            "Independence Day",
            "New Year's Day",
            "Thanksgiving",
            "Christmas"
        ],
        correct: "Thanksgiving",
        id: "436"
    },
    {
        "question": "Which of these horror films spawned the most sequels?",
        "options": [
            "'Scream'",
            "'Jaws'",
            "'Halloween'",
            "'Friday the 13th'"
        ],
        correct: "'Friday the 13th'",
        id: "437"
    },
    {
        "question": "Which of these household pets should be vaccinated for parvovirus?",
        "options": [
            "hamster",
            "cat",
            "dog",
            "bird"
        ],
        correct: "dog",
        id: "438"
    },
    {
        "question": "Which of these is a commonly-known investment account?",
        "options": [
            "CNN",
            "EMC",
            "IRA",
            "IRS"
        ],
        correct: "IRA",
        id: "439"
    },
    {
        "question": "Which of these is a fish?",
        "options": [
            "sea horse",
            "sea cow",
            "sea snake",
            "sea lion"
        ],
        correct: "sea horse",
        id: "440"
    },
    {
        "question": "Which of these is a government agency established to protect investors?",
        "options": [
            "AAA",
            "NBA",
            "SEC",
            "MADD"
        ],
        correct: "SEC",
        id: "441"
    },
    {
        "question": "Which of these is a member of the cucumber family?",
        "options": [
            "green pepper",
            "watermelon",
            "potato",
            "green bean"
        ],
        correct: "watermelon",
        id: "442"
    },
    {
        "question": "Which of these is a slang term for 'police'?",
        "options": [
            "fuzz",
            "shrinks",
            "bean counters",
            "aardvarks"
        ],
        correct: "fuzz",
        id: "443"
    },
    {
        "question": "Which of these is a type of artwork consisting of pieces of wood inlaid in geometric patterns?",
        "options": [
            "marquetry",
            "parquetry",
            "harquetry",
            "sharquetry"
        ],
        correct: "parquetry",
        id: "444"
    },
    {
        "question": "Which of these is an Italian Design firm?",
        "options": [
            "Escada",
            "Fendi",
            "Ghost",
            "Mainbocher"
        ],
        correct: "Fendi",
        id: "445"
    },
    {
        "question": "Which of these is another name for a golf course?",
        "options": [
            "Pitch",
            "Links",
            "Steps",
            "Suite"
        ],
        correct: "Links",
        id: "446"
    },
    {
        "question": "Which of these is commonly used to treat allergies?",
        "options": [
            "antimatter",
            "anticoagulants",
            "antiseptics",
            "antihistamines"
        ],
        correct: "antihistamines",
        id: "447"
    },
    {
        "question": "Which of these is made from cacao seeds?",
        "options": [
            "marzipan",
            "soy sauce",
            "chocolate",
            "anchovies"
        ],
        correct: "chocolate",
        id: "448"
    },
    {
        "question": "Which of these is not a breed of cat?",
        "options": [
            "Persian",
            "Turkish Angora",
            "Bichon Frise",
            "Maine Coon"
        ],
        correct: "Bichon Frise",
        id: "449"
    },
    {
        "question": "Which of these is not a city in the state of New York?",
        "options": [
            "Perskippity",
            "Kerhonkson",
            "Schenectady",
            "Lackawanna"
        ],
        correct: "Perskippity",
        id: "450"
    },
    {
        "question": "Which of these is not a fabric?",
        "options": [
            "Velveteen",
            "Celotex",
            "Seersucker",
            "Tencel"
        ],
        correct: "Celotex",
        id: "451"
    },
    {
        "question": "Which of these is not a Hindu deity?",
        "options": [
            "Shiva",
            "Vishnu",
            "Sanskrit",
            "Brahma"
        ],
        correct: "Sanskrit",
        id: "452"
    },
    {
        "question": "Which of these is not a 'lock' function on a standard desktop computer keyboard?",
        "options": [
            "print lock",
            "number lock",
            "scroll lock",
            "caps lock"
        ],
        correct: "print lock",
        id: "453"
    },
    {
        "question": "Which of these is not a position on an American football team?",
        "options": [
            "quarterback",
            "tight end",
            "striker",
            "free safety"
        ],
        correct: "striker",
        id: "454"
    },
    {
        "question": "Which of these is not a spice?",
        "options": [
            "dill",
            "aniseed",
            "cucumber",
            "cayenne"
        ],
        correct: "cucumber",
        id: "455"
    },
    {
        "question": "Which of these is not a style of shoe?",
        "options": [
            "gingham",
            "brogan",
            "espadrille",
            "docksider"
        ],
        correct: "gingham",
        id: "456"
    },
    {
        "question": "Which of these is not a traditional Greek dish?",
        "options": [
            "sukiyaki",
            "souvlaki",
            "moussaka",
            "finikia"
        ],
        correct: "sukiyaki",
        id: "457"
    },
    {
        "question": "Which of these is not a type of chili pepper?",
        "options": [
            "habanero",
            "cheyenne",
            "jalapeno",
            "guajillo"
        ],
        correct: "cheyenne",
        id: "458"
    },
    {
        "question": "Which of these is not a type of primate?",
        "options": [
            "baboon",
            "marmot",
            "orangutan",
            "chimpanzee"
        ],
        correct: "marmot",
        id: "459"
    },
    {
        "question": "Which of these is not a type of rock?",
        "options": [
            "metamorphic",
            "sedimentary",
            "igneous",
            "deciduous"
        ],
        correct: "deciduous",
        id: "460"
    },
    {
        "question": "Which of these is not an ingredient in Yorkshire pudding?",
        "options": [
            "eggs",
            "milk",
            "chocolate",
            "meat drippings"
        ],
        correct: "chocolate",
        id: "461"
    },
    {
        "question": "Which of these is not found in a Snickers candy bar?",
        "options": [
            "almonds",
            "chocolate",
            "nougat",
            "caramel"
        ],
        correct: "almonds",
        id: "462"
    },
    {
        "question": "Which of these is not one of Aesop's fables?",
        "options": [
            "'The Dog and the Squirrel'",
            "'The Hare and the Tortoise'",
            "'The Eagle and the Beetle'",
            "'The Ox and the Frogs'"
        ],
        correct: "'The Dog and the Squirrel'",
        id: "463"
    },
    {
        "question": "Which of these is not one of superhero Captain Marvel's abilities?",
        "options": [
            "the power of Apollo",
            "the strength of Hercules",
            "the courage of Achilles",
            "the wisdom of Solomon"
        ],
        correct: "the power of Apollo",
        id: "464"
    },
    {
        "question": "Which of these is not one of the four basic forces in nature?",
        "options": [
            "electromagnetic",
            "gravitational",
            "nuclear",
            "centrifugal"
        ],
        correct: "centrifugal",
        id: "465"
    },
    {
        "question": "Which of these is not one of the official languages of the United Nations?",
        "options": [
            "Japanese",
            "English",
            "Russian",
            "Spanish"
        ],
        correct: "Japanese",
        id: "466"
    },
    {
        "question": "Which of these is not one of the three branches of the US government?",
        "options": [
            "Judicial",
            "Executive",
            "Parliamentary",
            "Legislative"
        ],
        correct: "Parliamentary",
        id: "467"
    },
    {
        "question": "Which of these is not the name of one of rock musician Frank Zappa's children?",
        "options": [
            "Dweezil",
            "Ahmet",
            "Moon Unit",
            "Lumpy Gravy"
        ],
        correct: "Lumpy Gravy",
        id: "468"
    },
    {
        "question": "Which of these is referred to as a 'pigskin'?",
        "options": [
            "Football",
            "Basketball",
            "hockey puck",
            "catcher's Mitt"
        ],
        correct: "Football",
        id: "469"
    },
    {
        "question": "Which of these is typically not used as a spice?",
        "options": [
            "dill",
            "thyme",
            "hemlock",
            "marjoram"
        ],
        correct: "hemlock",
        id: "470"
    },
    {
        "question": "Which of these items is useful for removing ink stains?",
        "options": [
            "baking soda",
            "nail polish",
            "hair spray",
            "butter"
        ],
        correct: "baking soda",
        id: "471"
    },
    {
        "question": "Which of these measurements is equal to one square foot?",
        "options": [
            "50 square inches",
            "77 square inches",
            "100 square inches",
            "144 square inches"
        ],
        correct: "144 square inches",
        id: "472"
    },
    {
        "question": "Which of these magazines does not focus on natural science?",
        "options": [
            "Tiger Beat",
            "Outside",
            "National Geographic",
            "Smithsonian"
        ],
        correct: "Tiger Beat",
        id: "473"
    },
    {
        "question": "Which of these men has never been a head coach in the NFL?",
        "options": [
            "Dick Vermeil",
            "Bill Parcells",
            "Chuck Noll",
            "Pat Riley"
        ],
        correct: "Pat Riley",
        id: "474"
    },
    {
        "question": "Which of these months has 31 days?",
        "options": [
            "March",
            "April",
            "June",
            "September"
        ],
        correct: "March",
        id: "475"
    },
    {
        "question": "Which of these movies does not star Jim Carrey?",
        "options": [
            "'Patch Adams'",
            "'The Truman Show'",
            "'Dumb and Dumber'",
            "'The Mask'"
        ],
        correct: "'Patch Adams'",
        id: "476"
    },
    {
        "question": "Which of these names has never belonged to a Pope?",
        "options": [
            "Leo",
            "Lando",
            "Linus",
            "Lawrence"
        ],
        correct: "Lawrence",
        id: "477"
    },
    {
        "question": "Which of these organizations is not part of the U.S. government?",
        "options": [
            "NAACP",
            "NASA",
            "CIA",
            "FBI"
        ],
        correct: "NAACP",
        id: "478"
    },
    {
        "question": "Which of these organs comes in a pair?",
        "options": [
            "liver",
            "kidney",
            "stomach",
            "gallbladder"
        ],
        correct: "kidney",
        id: "479"
    },
    {
        "question": "Which of these painting tools has bristles on it?",
        "options": [
            "easel",
            "knife",
            "brush",
            "palette"
        ],
        correct: "brush",
        id: "480"
    },
    {
        "question": "Which of these pastas is spiral shaped?",
        "options": [
            "fettuccine",
            "rigatoni",
            "tortellini",
            "rotini"
        ],
        correct: "rotini",
        id: "481"
    },
    {
        "question": "Which of these people was buried in the Valley of the Kings?",
        "options": [
            "Louis XIV",
            "Elvis Presley",
            "Julius Caesar",
            "King Tut"
        ],
        correct: "King Tut",
        id: "482"
    },
    {
        "question": "Which of these people was not alive in the 20th century?",
        "options": [
            "Mark Twain",
            "Thomas Edison",
            "Sigmund Freud",
            "Ulysses S. Grant"
        ],
        correct: "Ulysses S. Grant",
        id: "483"
    },
    {
        "question": "Which of these performers made her film debut in Spike Lee's 'Do the Right Thing'?",
        "options": [
            "Jennifer Lopez",
            "Rosie Perez",
            "Paula Abdul",
            "Tisha Campbell"
        ],
        correct: "Rosie Perez",
        id: "484"
    },
    {
        "question": "Which of these places is known for art auctions?",
        "options": [
            "Shelby's",
            "Nickleby's",
            "Gatsby's",
            "Sotheby's"
        ],
        correct: "Sotheby's",
        id: "485"
    },
    {
        "question": "Which of these plants is the national emblem of Scotland?",
        "options": [
            "ivy",
            "thistle",
            "rose",
            "linden"
        ],
        correct: "thistle",
        id: "486"
    },
    {
        "question": "Which of these popular games relies on bluffing?",
        "options": [
            "Outburst",
            "Balderdash",
            "Pictionary",
            "Scattergories"
        ],
        correct: "Balderdash",
        id: "487"
    },
    {
        "question": "Which of these refers to an alcoholic drink laced with a knockout drug?",
        "options": [
            "Zombie",
            "Kamikaze",
            "Mickey Finn",
            "Molotov cocktail"
        ],
        correct: "Mickey Finn",
        id: "488"
    },
    {
        "question": "Which of these rivers flows through France?",
        "options": [
            "Volga",
            "Seine",
            "Mekong",
            "Allegheny"
        ],
        correct: "Seine",
        id: "489"
    },
    {
        "question": "Which of these rock guitarists designed a colorful line of men's neckties?",
        "options": [
            "Eric Clapton",
            "Jerry Garcia",
            "Jeff Beck",
            "Keith Richards"
        ],
        correct: "Jerry Garcia",
        id: "490"
    },
    {
        "question": "Which of these rocks will float in water?",
        "options": [
            "granite",
            "limestone",
            "shale",
            "pumice"
        ],
        correct: "pumice",
        id: "491"
    },
    {
        "question": "Which of these sentences is written in the subjunctive?",
        "options": [
            "I am not your man",
            "I wish I were your man",
            "Wherefore art your man?",
            "Your man is where?"
        ],
        correct: "I wish I were your man",
        id: "492"
    },
    {
        "question": "Which of these snakes is poisonous?",
        "options": [
            "anaconda",
            "boa constrictor",
            "copperhead",
            "python"
        ],
        correct: "copperhead",
        id: "493"
    },
    {
        "question": "Which of these songs was a Top 10 hit for the rock band The Police?",
        "options": [
            "'Radio Ga-Ga'",
            "'Ob-la-di, Ob-la-da'",
            "'De Do Do Do, De Da Da Da'",
            "'In-a-Gadda-Da-Vida'"
        ],
        correct: "'De Do Do Do, De Da Da Da'",
        id: "494"
    },
    {
        "question": "Which of these sounds is commonly associated with owls?",
        "options": [
            "chirp",
            "bark",
            "growl",
            "hoot"
        ],
        correct: "hoot",
        id: "495"
    },
    {
        "question": "Which of these states is not the birthplace of a US president?",
        "options": [
            "New Jersey",
            "Nebraska",
            "Kansas",
            "California"
        ],
        correct: "Kansas",
        id: "496"
    },
    {
        "question": "Which of these stores is not owned by Gap Inc?",
        "options": [
            "Gap",
            "Banana Republic",
            "Old Navy",
            "J Crew"
        ],
        correct: "J Crew",
        id: "497"
    },
    {
        "question": "Which of these television programs did not feature characters introduced on 'Happy Days'?",
        "options": [
            "'Mork & Mindy'",
            "'Perfect Strangers'",
            "'Joanie Loves Chachi'",
            "'Laverne & Shirley'"
        ],
        correct: "'Perfect Strangers'",
        id: "498"
    },
    {
        "question": "Which of these television series was not set in the United States?",
        "options": [
            "'Picket Fences'",
            "'M*A*S*H'",
            "'Northern Exposure'",
            "'The Paper Chase'"
        ],
        correct: "'M*A*S*H'",
        id: "499"
    },
    {
        "question": "Which of these toys answers questions?",
        "options": [
            "Magic 8 Ball",
            "Barbie",
            "Frisbee",
            "Slinky"
        ],
        correct: "Magic 8 Ball",
        id: "500"
    },
    {
        "question": "Which of these vitamins was the first to be named?",
        "options": [
            "Vitamin A",
            "Vitamin-12",
            "Vitamin E",
            "Vitameatavegimen"
        ],
        correct: "Vitamin A",
        id: "501"
    },
    {
        "question": "Which of these words is a synonym for 'perambulate'?",
        "options": [
            "kiss",
            "shout",
            "stroll",
            "heal"
        ],
        correct: "stroll",
        id: "502"
    },
    {
        "question": "Which of these words is an adverb?",
        "options": [
            "hurried",
            "fast",
            "speedy",
            "quickly"
        ],
        correct: "quickly",
        id: "503"
    },
    {
        "question": "Which of these words means 'yes' in French?",
        "options": [
            "qui",
            "oui",
            "ja",
            "okey-dokey"
        ],
        correct: "oui",
        id: "504"
    },
    {
        "question": "Which of these words is spelled correctly?",
        "options": [
            "decieve",
            "foriegn",
            "hygiene",
            "wierd"
        ],
        correct: "hygiene",
        id: "505"
    },
    {
        "question": "Which one of these world leaders was assassinated?",
        "options": [
            "Indira Gandhi",
            "Ferdinand Marcos",
            "Golda Meir",
            "Neville Chamberlain"
        ],
        correct: "Indira Gandhi",
        id: "506"
    },
    {
        "question": "Which one of these World War II leaders was not at the Yalta Conference?",
        "options": [
            "Stalin",
            "Mussolini",
            "Churchill",
            "Roosevelt"
        ],
        correct: "Mussolini",
        id: "507"
    },
    {
        "question": "Which of these would you most commonly find in a sconce?",
        "options": [
            "candle",
            "food",
            "birds",
            "books"
        ],
        correct: "candle",
        id: "508"
    },
    {
        "question": "Which Pope immediately preceded John Paul II?",
        "options": [
            "John XXIII ",
            "Paul VI",
            "John Paul I",
            "Hank II"
        ],
        correct: "John Paul I",
        id: "509"
    },
    {
        "question": "Which 'Rocky' film features Mr. T?",
        "options": [
            "'Rocky II'",
            "'Rocky III'",
            "'Rocky IV'",
            "'Rocky '"
        ],
        correct: "'Rocky III'",
        id: "510"
    },
    {
        "question": "Who co-founded Microsoft with Bill Gates?",
        "options": [
            "Steve Jobs",
            "Steve Wozniak",
            "Paul Williams",
            "Paul Allen"
        ],
        correct: "Paul Allen",
        id: "511"
    },
    {
        "question": "Who composed the 'Moonlight Sonata'?",
        "options": [
            "Mozart",
            "Handel",
            "Bach",
            "Beethoven"
        ],
        correct: "Beethoven",
        id: "512"
    },
    {
        "question": "Who is an archenemy of the cartoon superhero Underdog?",
        "options": [
            "OverCat",
            "Muttley",
            "Mr. Whoopie",
            "Dick Dastardly"
        ],
        correct: "OverCat",
        id: "513"
    },
    {
        "question": "Who is considered the owner of a 'publicly held' company?",
        "options": [
            "the CEO",
            "the stockholders",
            "the president",
            "the government"
        ],
        correct: "the stockholders",
        id: "514"
    },
    {
        "question": "Who is the career hit leader among players never elected to Baseball's Hall of Fame?",
        "options": [
            "Steve Garvey",
            "Jim Rice",
            "Pete Rose",
            "Ken Griffey Jr"
        ],
        correct: "Pete Rose",
        id: "515"
    },
    {
        "question": "Who is the creator of the comic strip 'The Far Side'?",
        "options": [
            "Jim Davis",
            "Gary Larson",
            "Garry Trudeau",
            "Charles Schulz"
        ],
        correct: "Gary Larson",
        id: "516"
    },
    {
        "question": "Who is the mythological Roman goddess of flowers?",
        "options": [
            "Diana",
            "Echo",
            "Flora",
            "Niobe"
        ],
        correct: "Flora",
        id: "517"
    },
    {
        "question": "Who is the patron saint of animals?",
        "options": [
            "St. Isidore of Seville",
            "St. Anthony of Padua",
            "St. Francis of Assisi",
            "St. Joan of Arc"
        ],
        correct: "St. Francis of Assisi",
        id: "518"
    },
    {
        "question": "Who is the shortest man to ever win an NBA slam dunk competition?",
        "options": [
            "Anthony 'Spud' Webb",
            "Michael 'Air' Jordan",
            "Tyrone 'Muggsy' Bogues",
            "Julius 'Dr. J' Erving"
        ],
        correct: "Anthony 'Spud' Webb",
        id: "519"
    },
    {
        "question": "Who is the star of the movie 'Casablanca'?",
        "options": [
            "Errol Flynn",
            "Clark Gable",
            "Cary Grant",
            "Humphrey Bogart"
        ],
        correct: "Humphrey Bogart",
        id: "520"
    },
    {
        "question": "Who is the star of the TV show 'Everybody Loves Raymond'?",
        "options": [
            "Ray Liotta",
            "Ray Romano",
            "Ray Parker Jr.",
            "Sugar Ray Leonard"
        ],
        correct: "Ray Romano",
        id: "521"
    },
    {
        "question": "Who is the twin sister of 'Dear Abby' columnist Abigail VanBuren?",
        "options": [
            "Martha Stewart",
            "Dr Ruth Westheimer",
            "Ann Landers",
            "Miss Manners"
        ],
        correct: "Ann Landers",
        id: "522"
    },
    {
        "question": "Who kills Tony at the end of the film 'West Side Story'?",
        "options": [
            "Riff",
            "Chino",
            "Bernardo",
            "He kills himself."
        ],
        correct: "Chino",
        id: "523"
    },
    {
        "question": "Who led the 1831 slave insurrection in Southampton, Virginia?",
        "options": [
            "John Brown",
            "Dred Scott",
            "Nat Turner",
            "Harriet Tubman"
        ],
        correct: "Nat Turner",
        id: "524"
    },
    {
        "question": "Who or what was Big Bertha?",
        "options": [
            "a comet",
            "a World War I gun",
            "a pro wrestling champion",
            "a giant Muppet"
        ],
        correct: "a World War I gun",
        id: "525"
    },
    {
        "question": "Who originally proposed the idea of daylight-saving time?",
        "options": [
            "Benjamin Franklin",
            "Henry David Thoreau",
            "Galileo",
            "Albert Einstein"
        ],
        correct: "Benjamin Franklin",
        id: "526"
    },
    {
        "question": "Who sang lead vocals for the band Big Brother and the Holding Company?",
        "options": [
            "Grace Slick",
            "Janis Joplin",
            "Mama Cass",
            "Karen Carpenter"
        ],
        correct: "Janis Joplin",
        id: "527"
    },
    {
        "question": "Who was Charlie McCarthy?",
        "options": [
            "a U.S. senator",
            "a Chicago gangster",
            "a famous baseball pitcher",
            "a wooden dummy"
        ],
        correct: "a wooden dummy",
        id: "528"
    },
    {
        "question": "Who was not one of the Cartwright sons on the TV series 'Bonanza'?",
        "options": [
            "Adam",
            "Little Joe",
            "Hoss",
            "Ben"
        ],
        correct: "Ben",
        id: "529"
    },
    {
        "question": "Who was on the $500 bill?",
        "options": [
            "Calvin Coolidge",
            "Andrew Jackson",
            "Aaron Burr",
            "William McKinley"
        ],
        correct: "William McKinley",
        id: "530"
    },
    {
        "question": "Who was president of the United States when Bill Clinton was born?",
        "options": [
            "Herbert Hoover",
            "Harry S. Truman",
            "Franklin Roosevelt",
            "Dwight Eisenhower"
        ],
        correct: "Harry S. Truman",
        id: "531"
    },
    {
        "question": "Who was the English king at the time of the American Revolution?",
        "options": [
            "Charles I",
            "James I",
            "Edward III",
            "George III"
        ],
        correct: "George III",
        id: "532"
    },
    {
        "question": "Who was the first American in space?",
        "options": [
            "John Glenn",
            "Buzz Aldrin",
            "Alan Shepard",
            "Neil Armstrong"
        ],
        correct: "Alan Shepard",
        id: "533"
    },
    {
        "question": "Who was the first First Lady to run for political office?",
        "options": [
            "Hillary Clinton",
            "Rosalynn Carter",
            "Bess Truman",
            "Eleanor Roosevelt"
        ],
        correct: "Hillary Clinton",
        id: "534"
    },
    {
        "question": "Who was the first US president to resign from that office?",
        "options": [
            "Martin Van Buren",
            "Andrew Jackson",
            "Andrew Johnson",
            "Richard Nixon"
        ],
        correct: "Richard Nixon",
        id: "535"
    },
    {
        "question": "Who was the longest reigning monarch in French history?",
        "options": [
            "Louis XIII ",
            "Louis XIV",
            "Louis XV",
            "Louis XVI"
        ],
        correct: "Louis XIV",
        id: "536"
    },
    {
        "question": "Who was the mother of the Greek god Zeus?",
        "options": [
            "Gaia",
            "Phoebe",
            "Rhea",
            "Hera"
        ],
        correct: "Rhea",
        id: "537"
    },
    {
        "question": "Who was the WNBA's Most Valuable Player of 1999?",
        "options": [
            "Rebecca Lobo",
            "Sheryl Swoopes",
            "Lisa Leslie",
            "Yolanda Griffith"
        ],
        correct: "Yolanda Griffith",
        id: "538"
    },
    {
        "question": "Who were the Chicago Seven?",
        "options": [
            "war protesters",
            "bluegrass musicians",
            "bank robbers",
            "mobsters"
        ],
        correct: "war protesters",
        id: "539"
    },
    {
        "question": "Who were the Know-Nothings?",
        "options": [
            "a '60's comedy troupe",
            "computer designers",
            "a political party",
            "a spy ring"
        ],
        correct: "a political party",
        id: "540"
    },
    {
        "question": "Who wrote 'A Tale of Two Cities'?",
        "options": [
            "Charles Dickens",
            "Nathaniel Hawthorne",
            "Washington Irving",
            "Mark Twain"
        ],
        correct: "Charles Dickens",
        id: "541"
    },
    {
        "question": "Who wrote musicals with Oscar Hammerstein II?",
        "options": [
            "Richard Rodgers",
            "Rogers Hornsby",
            "Gilbert O' Sullivan",
            "George Rogers Clark"
        ],
        correct: "Richard Rodgers",
        id: "542"
    },
    {
        "question": "Who wrote the lyrics of the Frank Sinatra anthem 'My Way'?",
        "options": [
            "Frank Sinatra",
            "Kris Krist offerson",
            "Carole King",
            "Paul Anka"
        ],
        correct: "Paul Anka",
        id: "543"
    },
    {
        "question": "Whom did Billie Jean King defeat in the famous 'Battle of the Sexes' tennis match?",
        "options": [
            "Jimmy Connors",
            "Pete Sampras",
            "John McEnroe",
            "Bobby Riggs"
        ],
        correct: "Bobby Riggs",
        id: "544"
    },
    {
        "question": "Whose profile can you see on the front of dimes that are currently in circulation?",
        "options": [
            "George Washington",
            "Thomas Jefferson",
            "Benjamin Franklin",
            "Franklin Roosevelt"
        ],
        correct: "Franklin Roosevelt",
        id: "545"
    },
    {
        "question": "With what would you use a wah-wah pedal?",
        "options": [
            "bicycle",
            "stock car",
            "electric guitar",
            "baby"
        ],
        correct: "electric guitar",
        id: "546"
    }
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
