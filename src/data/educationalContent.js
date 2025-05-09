// src/data/educationalContent.js
// Central data store for all educational content with relationships between lessons and flashcards

// Unique subject definitions with metadata
export const subjects = [
    {
      id: 'math',
      name: 'Math',
      icon: '🔢',
      emoji: '🔢',
      color: '#58cc02',
      description: 'Learn numbers, counting, shapes and more!',
      ageGroups: ['4-6', '7-10'],
      backgroundImage: '/assets/images/subjects/math_bg.svg',
    },
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      emoji: '🔬',
      color: '#ce82ff',
      description: 'Discover animals, plants, and how things work!',
      ageGroups: ['4-6', '7-10'],
      backgroundImage: '/assets/images/subjects/science_bg.svg',
    },
    {
      id: 'english',
      name: 'English',
      icon: '📚',
      emoji: '📚',
      color: '#fa6400',
      description: 'Learn letters, words, and stories!',
      ageGroups: ['4-6', '7-10'],
      backgroundImage: '/assets/images/subjects/english_bg.svg',
    },
    {
      id: 'art',
      name: 'Art',
      icon: '🎨',
      emoji: '🎨',
      color: '#1cb0f6',
      description: 'Draw, color, and create amazing art!',
      ageGroups: ['4-6', '7-10'],
      backgroundImage: '/assets/images/subjects/art_bg.svg',
    },
    {
      id: 'music',
      name: 'Music',
      icon: '🎵',
      emoji: '🎵',
      color: '#ff9600',
      description: 'Explore sounds, instruments, and songs!',
      ageGroups: ['4-6'],
      backgroundImage: '/assets/images/subjects/music_bg.svg',
    },
    {
      id: 'history',
      name: 'History',
      icon: '🏛️',
      emoji: '🏛️',
      color: '#ff4b4b',
      description: 'Travel back in time and learn about the past!',
      ageGroups: ['7-10'],
      backgroundImage: '/assets/images/subjects/history_bg.svg',
    }
  ];
  
  // Sample flashcards data - you can expand this later
  export const flashcards = [
    {
      id: 'math-counting-4-6',
      subjectId: 'math',
      title: 'Counting Numbers',
      description: 'Learn to count from 1 to 10',
      ageGroup: '4-6',
      difficulty: 'easy',
      tags: ['numbers', 'counting', 'basics'],
      cards: [
        {
          id: 'math-count-1',
          front: 'How many apples?',
          back: '1',
          image: '/assets/images/flashcards/one_apple.svg',
        },
        {
          id: 'math-count-2',
          front: 'How many balloons?',
          back: '2',
          image: '/assets/images/flashcards/two_balloons.svg',
        }
      ]
    },
    {
      id: 'science-animals-4-6',
      subjectId: 'science',
      title: 'Animal Sounds',
      description: 'Learn animal names and sounds',
      ageGroup: '4-6',
      difficulty: 'easy',
      tags: ['animals', 'sounds', 'nature'],
      cards: [
        {
          id: 'sci-animal-1',
          front: 'What animal is this?',
          back: 'Dog',
          image: '/assets/images/flashcards/dog.svg',
        },
        {
          id: 'sci-animal-2',
          front: 'What animal is this?',
          back: 'Cat',
          image: '/assets/images/flashcards/cat.svg',
        }
      ]
    }
  ];
  
  // Sample lessons data - you can expand this later
  export const lessons = [
    {
      id: 'math-counting-lesson-4-6',
      subjectId: 'math',
      title: 'Counting Fun',
      description: 'Learn to count from 1 to 10 with fun examples!',
      ageGroup: '4-6',
      difficulty: 'easy',
      duration: '10 mins',
      tags: ['numbers', 'counting', 'basics'],
      thumbnail: '/assets/images/lessons/counting_thumbnail.svg',
    },
    {
      id: 'science-animals-lesson-4-6',
      subjectId: 'science',
      title: 'Animal Friends',
      description: 'Discover different animals and the sounds they make!',
      ageGroup: '4-6',
      difficulty: 'easy',
      duration: '15 mins',
      tags: ['animals', 'sounds', 'nature'],
      thumbnail: '/assets/images/lessons/animals_thumbnail.svg',
    }
  ];
  
  // Comprehensive quizzes collection
  export const quizzes = [
    // MATH QUIZZES (4-6)
    {
      id: 'math-counting-quiz-4-6',
      subjectId: 'math',
      title: 'Counting Quiz',
      description: 'Test your counting skills from 1 to 10!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'count-q1',
          question: 'How many apples are there?',
          image: '/assets/images/quizzes/counting_apples.svg',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
          explanation: 'There are 4 apples in the picture. Count them: 1, 2, 3, 4!'
        },
        {
          id: 'count-q2',
          question: 'How many stars are there?',
          image: '/assets/images/quizzes/counting_stars.svg',
          options: ['5', '6', '7', '8'],
          correctAnswer: '6',
          explanation: 'There are 6 stars in the picture. Count them: 1, 2, 3, 4, 5, 6!'
        },
        {
          id: 'count-q3',
          question: 'Which group has more balls?',
          image: '/assets/images/quizzes/counting_compare.svg',
          options: ['Group A', 'Group B', 'They are equal', 'I don\'t know'],
          correctAnswer: 'Group B',
          explanation: 'Group A has 3 balls. Group B has 5 balls. 5 is more than 3, so Group B has more balls.'
        }
      ]
    },
    {
      id: 'math-shapes-quiz-4-6',
      subjectId: 'math',
      title: 'Shapes Adventure',
      description: 'Learn about different shapes and their properties!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'shapes-q1',
          question: 'Which shape has 3 sides?',
          image: '/assets/images/quizzes/shapes_basic.svg',
          options: ['Circle', 'Square', 'Triangle', 'Rectangle'],
          correctAnswer: 'Triangle',
          explanation: 'A triangle has exactly 3 sides and 3 corners.'
        },
        {
          id: 'shapes-q2',
          question: 'Which shape is round?',
          image: '/assets/images/quizzes/shapes_round.svg',
          options: ['Triangle', 'Circle', 'Square', 'Rectangle'],
          correctAnswer: 'Circle',
          explanation: 'A circle is perfectly round with no corners or straight edges.'
        },
        {
          id: 'shapes-q3',
          question: 'How many corners does a square have?',
          image: '/assets/images/quizzes/shapes_square.svg',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
          explanation: 'A square has 4 corners where its 4 sides meet.'
        }
      ]
    },
    {
      id: 'math-addition-quiz-4-6',
      subjectId: 'math',
      title: 'Addition Fun',
      description: 'Practice adding numbers together!',
      ageGroup: '4-6',
      difficulty: 'medium',
      questions: [
        {
          id: 'add-q1',
          question: 'What is 1 + 2?',
          image: '/assets/images/quizzes/addition_1_plus_2.svg',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          explanation: '1 apple plus 2 apples equals 3 apples total.'
        },
        {
          id: 'add-q2',
          question: 'What is 3 + 2?',
          image: '/assets/images/quizzes/addition_3_plus_2.svg',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
          explanation: '3 stars plus 2 stars equals 5 stars total.'
        },
        {
          id: 'add-q3',
          question: 'What is 4 + 3?',
          image: '/assets/images/quizzes/addition_4_plus_3.svg',
          options: ['5', '6', '7', '8'],
          correctAnswer: '7',
          explanation: '4 balloons plus 3 balloons equals 7 balloons total.'
        }
      ]
    },
    {
      id: 'math-multiplication-quiz-7-10',
      subjectId: 'math',
      title: 'Multiplication Tables',
      description: 'Test your knowledge of multiplication facts!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'mult-q1',
          question: 'What is 3 × 4?',
          image: '/assets/images/quizzes/multiplication_3x4.svg',
          options: ['7', '10', '12', '15'],
          correctAnswer: '12',
          explanation: '3 × 4 means 3 groups of 4, which equals 12.'
        },
        {
          id: 'mult-q2',
          question: 'What is 5 × 2?',
          image: '/assets/images/quizzes/multiplication_5x2.svg',
          options: ['7', '8', '9', '10'],
          correctAnswer: '10',
          explanation: '5 × 2 means 5 groups of 2, which equals 10.'
        },
        {
          id: 'mult-q3',
          question: 'What is 6 × 3?',
          image: '/assets/images/quizzes/multiplication_6x3.svg',
          options: ['15', '17', '18', '21'],
          correctAnswer: '18',
          explanation: '6 × 3 means 6 groups of 3, which equals 18.'
        }
      ]
    },
    {
      id: 'math-fractions-quiz-7-10',
      subjectId: 'math',
      title: 'Fraction Fundamentals',
      description: 'Learn about parts of a whole with fractions!',
      ageGroup: '7-10',
      difficulty: 'hard',
      questions: [
        {
          id: 'frac-q1',
          question: 'What fraction of the pizza is shaded?',
          image: '/assets/images/quizzes/fractions_pizza.svg',
          options: ['1/2', '1/4', '3/4', '1/3'],
          correctAnswer: '3/4',
          explanation: 'The pizza is divided into 4 equal parts, and 3 of those parts are shaded. So 3/4 of the pizza is shaded.'
        },
        {
          id: 'frac-q2',
          question: 'Which fraction is bigger?',
          image: '/assets/images/quizzes/fractions_compare.svg',
          options: ['1/2', '1/4', 'They are equal', 'Cannot tell'],
          correctAnswer: '1/2',
          explanation: '1/2 means one out of two equal parts. 1/4 means one out of four equal parts. 1/2 is bigger than 1/4.'
        },
        {
          id: 'frac-q3',
          question: 'What fraction of the squares are blue?',
          image: '/assets/images/quizzes/fractions_squares.svg',
          options: ['1/3', '2/3', '1/2', '2/6'],
          correctAnswer: '2/6',
          explanation: 'There are 6 squares in total, and 2 of them are blue. So 2/6 of the squares are blue.'
        }
      ]
    },
    {
      id: 'math-time-quiz-7-10',
      subjectId: 'math',
      title: 'Time Teller',
      description: 'Learn to read analog and digital clocks!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'time-q1',
          question: 'What time does this clock show?',
          image: '/assets/images/quizzes/time_3oclock.svg',
          options: ['2:00', '3:00', '12:15', '6:00'],
          correctAnswer: '3:00',
          explanation: 'The hour hand (short hand) points to 3, and the minute hand (long hand) points to 12. So the time is 3:00 or 3 o\'clock.'
        },
        {
          id: 'time-q2',
          question: 'What time does this clock show?',
          image: '/assets/images/quizzes/time_930.svg',
          options: ['9:30', '6:45', '9:15', '6:30'],
          correctAnswer: '9:30',
          explanation: 'The hour hand (short hand) points between 9 and 10, and the minute hand (long hand) points to 6. So the time is 9:30 or half past 9.'
        },
        {
          id: 'time-q3',
          question: 'How many minutes are in an hour?',
          image: '/assets/images/quizzes/time_minutes.svg',
          options: ['30', '60', '12', '24'],
          correctAnswer: '60',
          explanation: 'There are 60 minutes in 1 hour.'
        }
      ]
    },
    
    // SCIENCE QUIZZES
    {
      id: 'science-animals-quiz-4-6',
      subjectId: 'science',
      title: 'Animal Kingdom',
      description: 'Learn about different animals and their sounds!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'animal-q1',
          question: 'Which animal has a long neck?',
          image: '/assets/images/quizzes/animals_neck.svg',
          options: ['Elephant', 'Giraffe', 'Lion', 'Monkey'],
          correctAnswer: 'Giraffe',
          explanation: 'A giraffe has a very long neck that helps it reach leaves high up in trees!'
        },
        {
          id: 'animal-q2',
          question: 'Which animal can fly?',
          image: '/assets/images/quizzes/animals_flying.svg',
          options: ['Fish', 'Bird', 'Snake', 'Frog'],
          correctAnswer: 'Bird',
          explanation: 'Birds have wings that allow them to fly in the sky!'
        },
        {
          id: 'animal-q3',
          question: 'Which animal lives in water?',
          image: '/assets/images/quizzes/animals_water.svg',
          options: ['Fish', 'Rabbit', 'Cow', 'Cat'],
          correctAnswer: 'Fish',
          explanation: 'Fish live in water and breathe through gills!'
        }
      ]
    },
    {
      id: 'science-plants-quiz-4-6',
      subjectId: 'science',
      title: 'Plant Life',
      description: 'Discover how plants grow and what they need!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'plant-q1',
          question: 'What do plants need to grow?',
          image: '/assets/images/quizzes/plants_needs.svg',
          options: ['Only darkness', 'Water and sunlight', 'Only water', 'Only sunlight'],
          correctAnswer: 'Water and sunlight',
          explanation: 'Plants need both water and sunlight to grow healthy and strong!'
        },
        {
          id: 'plant-q2',
          question: 'Which part of the plant is usually green?',
          image: '/assets/images/quizzes/plants_parts.svg',
          options: ['Roots', 'Leaves', 'Flower', 'Fruit'],
          correctAnswer: 'Leaves',
          explanation: 'Leaves are usually green because they contain chlorophyll, which helps plants make food from sunlight!'
        },
        {
          id: 'plant-q3',
          question: 'Where do most plants get their food?',
          image: '/assets/images/quizzes/plants_food.svg',
          options: ['From the soil', 'From the air', 'They make their own food', 'From animals'],
          correctAnswer: 'They make their own food',
          explanation: 'Plants make their own food using sunlight, water, and air through a process called photosynthesis!'
        }
      ]
    },
    {
      id: 'science-weather-quiz-4-6',
      subjectId: 'science',
      title: 'Weather Wonders',
      description: 'Learn about different types of weather and seasons!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'weather-q1',
          question: 'What falls from the sky when it rains?',
          image: '/assets/images/quizzes/weather_rain.svg',
          options: ['Snow', 'Water drops', 'Sand', 'Leaves'],
          correctAnswer: 'Water drops',
          explanation: 'When it rains, water drops fall from clouds in the sky!'
        },
        {
          id: 'weather-q2',
          question: 'What season do we usually see snow?',
          image: '/assets/images/quizzes/weather_snow.svg',
          options: ['Summer', 'Spring', 'Winter', 'Fall'],
          correctAnswer: 'Winter',
          explanation: 'Snow typically falls during winter when it\'s very cold outside!'
        },
        {
          id: 'weather-q3',
          question: 'What makes a rainbow appear in the sky?',
          image: '/assets/images/quizzes/weather_rainbow.svg',
          options: ['Moon and stars', 'Sun and rain', 'Wind and clouds', 'Lightning and thunder'],
          correctAnswer: 'Sun and rain',
          explanation: 'Rainbows appear when sunlight shines through raindrops! The water drops split the sunlight into many colors.'
        }
      ]
    },
    {
      id: 'science-solar-system-quiz-7-10',
      subjectId: 'science',
      title: 'Solar System Explorer',
      description: 'Blast off to learn about planets and space!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'space-q1',
          question: 'Which planet is closest to the Sun?',
          image: '/assets/images/quizzes/space_planets.svg',
          options: ['Earth', 'Venus', 'Mercury', 'Mars'],
          correctAnswer: 'Mercury',
          explanation: 'Mercury is the closest planet to the Sun in our solar system!'
        },
        {
          id: 'space-q2',
          question: 'Which planet has rings around it?',
          image: '/assets/images/quizzes/space_rings.svg',
          options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 'Saturn',
          explanation: 'Saturn is famous for its beautiful rings made of ice, dust, and rocks!'
        },
        {
          id: 'space-q3',
          question: 'How many planets are in our solar system?',
          image: '/assets/images/quizzes/space_solar_system.svg',
          options: ['7', '8', '9', '10'],
          correctAnswer: '8',
          explanation: 'There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.'
        }
      ]
    },
    {
      id: 'science-human-body-quiz-7-10',
      subjectId: 'science',
      title: 'Human Body Systems',
      description: 'Discover the amazing systems in your body!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'body-q1',
          question: 'Which organ pumps blood through your body?',
          image: '/assets/images/quizzes/body_heart.svg',
          options: ['Brain', 'Lungs', 'Heart', 'Stomach'],
          correctAnswer: 'Heart',
          explanation: 'Your heart is a muscle that pumps blood throughout your body!'
        },
        {
          id: 'body-q2',
          question: 'Which organs help you breathe?',
          image: '/assets/images/quizzes/body_lungs.svg',
          options: ['Kidneys', 'Lungs', 'Liver', 'Intestines'],
          correctAnswer: 'Lungs',
          explanation: 'Your lungs help you breathe by taking in oxygen and releasing carbon dioxide!'
        },
        {
          id: 'body-q3',
          question: 'What protects your brain?',
          image: '/assets/images/quizzes/body_skull.svg',
          options: ['Skin', 'Muscles', 'Skull', 'Hair'],
          correctAnswer: 'Skull',
          explanation: 'Your skull is the hard bone that protects your brain from injury!'
        }
      ]
    },
    
    // ENGLISH QUIZZES
    {
      id: 'english-alphabet-quiz-4-6',
      subjectId: 'english',
      title: 'ABC Adventure',
      description: 'Learn the alphabet and letter sounds!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'alpha-q1',
          question: 'Which letter comes first in the alphabet?',
          image: '/assets/images/quizzes/alphabet_start.svg',
          options: ['Z', 'A', 'B', 'C'],
          correctAnswer: 'A',
          explanation: 'A is the first letter of the alphabet!'
        },
        {
          id: 'alpha-q2',
          question: 'Which letter does "Ball" start with?',
          image: '/assets/images/quizzes/alphabet_ball.svg',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 'B',
          explanation: 'Ball starts with the letter B!'
        },
        {
          id: 'alpha-q3',
          question: 'Which letter does "Cat" start with?',
          image: '/assets/images/quizzes/alphabet_cat.svg',
          options: ['C', 'K', 'S', 'T'],
          correctAnswer: 'C',
          explanation: 'Cat starts with the letter C!'
        }
      ]
    },
    {
      id: 'english-rhymes-quiz-4-6',
      subjectId: 'english',
      title: 'Rhyme Time',
      description: 'Find words that sound alike at the end!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'rhyme-q1',
          question: 'Which word rhymes with "cat"?',
          image: '/assets/images/quizzes/rhymes_cat.svg',
          options: ['Dog', 'Hat', 'Pig', 'Frog'],
          correctAnswer: 'Hat',
          explanation: 'Cat and Hat rhyme because they both end with the "at" sound!'
        },
        {
          id: 'rhyme-q2',
          question: 'Which word rhymes with "bear"?',
          image: '/assets/images/quizzes/rhymes_bear.svg',
          options: ['Hear', 'Beer', 'Pear', 'Bowl'],
          correctAnswer: 'Pear',
          explanation: 'Bear and Pear rhyme because they both end with the "air" sound!'
        },
        {
          id: 'rhyme-q3',
          question: 'Which word rhymes with "car"?',
          image: '/assets/images/quizzes/rhymes_car.svg',
          options: ['Cat', 'Star', 'Bike', 'House'],
          correctAnswer: 'Star',
          explanation: 'Car and Star rhyme because they both end with the "ar" sound!'
        }
      ]
    },
    {
      id: 'english-opposites-quiz-4-6',
      subjectId: 'english',
      title: 'Opposite Words',
      description: 'Learn pairs of words with opposite meanings!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'opp-q1',
          question: 'What is the opposite of "hot"?',
          image: '/assets/images/quizzes/opposites_hot.svg',
          options: ['Warm', 'Cold', 'Big', 'Fast'],
          correctAnswer: 'Cold',
          explanation: 'The opposite of hot is cold!'
        },
        {
          id: 'opp-q2',
          question: 'What is the opposite of "big"?',
          image: '/assets/images/quizzes/opposites_big.svg',
          options: ['Small', 'Tiny', 'Little', 'All of these'],
          correctAnswer: 'All of these',
          explanation: 'Small, tiny, and little are all opposites of big!'
        },
        {
          id: 'opp-q3',
          question: 'What is the opposite of "day"?',
          image: '/assets/images/quizzes/opposites_day.svg',
          options: ['Evening', 'Night', 'Morning', 'Afternoon'],
          correctAnswer: 'Night',
          explanation: 'The opposite of day is night!'
        }
      ]
    },
    {
      id: 'english-grammar-quiz-7-10',
      subjectId: 'english',
      title: 'Grammar Explorer',
      description: 'Learn about nouns, verbs, and more!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'gram-q1',
          question: 'Which word is a noun?',
          image: '/assets/images/quizzes/grammar_noun.svg',
          options: ['Run', 'Jump', 'Book', 'Fast'],
          correctAnswer: 'Book',
          explanation: 'A noun is a person, place, thing, or idea. "Book" is a thing, so it\'s a noun!'
        },
        {
          id: 'gram-q2',
          question: 'Which word is a verb?',
          image: '/assets/images/quizzes/grammar_verb.svg',
          options: ['Happy', 'Swim', 'Blue', 'House'],
          correctAnswer: 'Swim',
          explanation: 'A verb is an action word or something you do. "Swim" is an action, so it\'s a verb!'
        },
        {
          id: 'gram-q3',
          question: 'Which word is an adjective?',
          image: '/assets/images/quizzes/grammar_adjective.svg',
          options: ['Quickly', 'The', 'Tall', 'Eat'],
          correctAnswer: 'Tall',
          explanation: 'An adjective describes a noun. "Tall" describes how something looks, so it\'s an adjective!'
        }
      ]
    },
    {
      id: 'english-punctuation-quiz-7-10',
      subjectId: 'english',
      title: 'Punctuation Power',
      description: 'Learn about periods, question marks, and more!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'punct-q1',
          question: 'Which punctuation mark ends a question?',
          image: '/assets/images/quizzes/punctuation_question.svg',
          options: ['.', '?', '!', ','],
          correctAnswer: '?',
          explanation: 'Questions end with a question mark (?)!'
        },
        {
          id: 'punct-q2',
          question: 'Which sentence uses punctuation correctly?',
          image: '/assets/images/quizzes/punctuation_sentence.svg',
          options: [
            'Where are you going',
            'where are you going?',
            'Where are you going?',
            'Where are you going.'
          ],
          correctAnswer: 'Where are you going?',
          explanation: 'Questions should start with a capital letter and end with a question mark!'
        },
        {
          id: 'punct-q3',
          question: 'Which punctuation mark separates items in a list?',
          image: '/assets/images/quizzes/punctuation_list.svg',
          options: ['.', '?', '!', ','],
          correctAnswer: ',',
          explanation: 'Commas (,) separate items in a list, like "apples, bananas, and oranges."'
        }
      ]
    },
    
    // ART QUIZZES
    {
      id: 'art-colors-quiz-4-6',
      subjectId: 'art',
      title: 'Color Mixer',
      description: 'Learn about primary and secondary colors!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'color-q1',
          question: 'Which are the three primary colors?',
          image: '/assets/images/quizzes/art_primary_colors.svg',
          options: [
            'Red, blue, green',
            'Red, yellow, blue',
            'Green, orange, purple',
            'Black, white, gray'
          ],
          correctAnswer: 'Red, yellow, blue',
          explanation: 'The three primary colors are red, yellow, and blue! They cannot be made by mixing other colors.'
        },
        {
          id: 'color-q2',
          question: 'What color do you get when you mix red and yellow?',
          image: '/assets/images/quizzes/art_red_yellow.svg',
          options: ['Blue', 'Green', 'Orange', 'Purple'],
          correctAnswer: 'Orange',
          explanation: 'When you mix red and yellow, you get orange!'
        },
        {
          id: 'color-q3',
          question: 'What color do you get when you mix blue and yellow?',
          image: '/assets/images/quizzes/art_blue_yellow.svg',
          options: ['Red', 'Green', 'Orange', 'Purple'],
          correctAnswer: 'Green',
          explanation: 'When you mix blue and yellow, you get green!'
        }
      ]
    },
    {
      id: 'art-shapes-quiz-4-6',
      subjectId: 'art',
      title: 'Art Shapes',
      description: 'Identify shapes in art and everyday objects!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'artshape-q1',
          question: 'What shape is the sun usually drawn as?',
          image: '/assets/images/quizzes/art_sun.svg',
          options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
          correctAnswer: 'Circle',
          explanation: 'The sun is usually drawn as a circle!'
        },
        {
          id: 'artshape-q2',
          question: 'What shape is a slice of pizza usually?',
          image: '/assets/images/quizzes/art_pizza.svg',
          options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
          correctAnswer: 'Triangle',
          explanation: 'A slice of pizza is usually shaped like a triangle!'
        },
        {
          id: 'artshape-q3',
          question: 'What shape is a typical picture frame?',
          image: '/assets/images/quizzes/art_frame.svg',
          options: ['Circle', 'Triangle', 'Oval', 'Rectangle'],
          correctAnswer: 'Rectangle',
          explanation: 'Most picture frames are shaped like rectangles!'
        }
      ]
    },
    {
      id: 'art-tools-quiz-4-6',
      subjectId: 'art',
      title: 'Art Tools',
      description: 'Learn about different tools artists use!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'arttool-q1',
          question: 'What tool do you use to paint with?',
          image: '/assets/images/quizzes/art_tools_paint.svg',
          options: ['Pencil', 'Brush', 'Scissors', 'Ruler'],
          correctAnswer: 'Brush',
          explanation: 'Artists use brushes to apply paint to a surface!'
        },
        {
          id: 'arttool-q2',
          question: 'What do you use to mix paints?',
          image: '/assets/images/quizzes/art_tools_palette.svg',
          options: ['Canvas', 'Palette', 'Paper', 'Easel'],
          correctAnswer: 'Palette',
          explanation: 'Artists use a palette to mix different colors of paint!'
        },
        {
          id: 'arttool-q3',
          question: 'What tool helps you draw straight lines?',
          image: '/assets/images/quizzes/art_tools_ruler.svg',
          options: ['Brush', 'Pencil', 'Ruler', 'Eraser'],
          correctAnswer: 'Ruler',
          explanation: 'A ruler helps you draw perfectly straight lines!'
        }
      ]
    },
    {
      id: 'art-styles-quiz-7-10',
      subjectId: 'art',
      title: 'Art Styles',
      description: 'Learn about different ways artists create art!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'artstyle-q1',
          question: 'Which art style uses tiny dots to create images?',
          image: '/assets/images/quizzes/art_styles_dots.svg',
          options: ['Cubism', 'Realism', 'Pointillism', 'Abstract'],
          correctAnswer: 'Pointillism',
          explanation: 'Pointillism is an art style where artists create images using many small dots of color!'
        },
        {
          id: 'artstyle-q2',
          question: 'Which artist is known for painting melting clocks?',
          image: '/assets/images/quizzes/art_styles_clocks.svg',
          options: ['Vincent van Gogh', 'Pablo Picasso', 'Salvador Dalí', 'Claude Monet'],
          correctAnswer: 'Salvador Dalí',
          explanation: 'Salvador Dalí was famous for his surrealist paintings, including "The Persistence of Memory" with melting clocks!'
        },
        {
          id: 'artstyle-q3',
          question: 'Which art style tries to show the world exactly as it appears?',
          image: '/assets/images/quizzes/art_styles_realistic.svg',
          options: ['Abstract', 'Cubism', 'Realism', 'Impressionism'],
          correctAnswer: 'Realism',
          explanation: 'Realism is an art style that aims to depict the world as it actually appears!'
        }
      ]
    },
    {
      id: 'art-famous-paintings-quiz-7-10',
      subjectId: 'art',
      title: 'Famous Paintings',
      description: 'Learn about well-known artworks and their artists!',
      ageGroup: '7-10',
      difficulty: 'medium',
      questions: [
        {
          id: 'famousart-q1',
          question: 'Who painted the Mona Lisa?',
          image: '/assets/images/quizzes/art_mona_lisa.svg',
          options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Claude Monet'],
          correctAnswer: 'Leonardo da Vinci',
          explanation: 'The Mona Lisa was painted by Leonardo da Vinci around 1503-1506!'
        },
        {
          id: 'famousart-q2',
          question: 'Which artist painted "Starry Night"?',
          image: '/assets/images/quizzes/art_starry_night.svg',
          options: ['Vincent van Gogh', 'Pablo Picasso', 'Salvador Dalí', 'Claude Monet'],
          correctAnswer: 'Vincent van Gogh',
          explanation: '"Starry Night" was painted by Vincent van Gogh in 1889!'
        },
        {
          id: 'famousart-q3',
          question: 'Which artist is known for painting water lilies?',
          image: '/assets/images/quizzes/art_water_lilies.svg',
          options: ['Salvador Dalí', 'Claude Monet', 'Vincent van Gogh', 'Pablo Picasso'],
          correctAnswer: 'Claude Monet',
          explanation: 'Claude Monet painted many famous water lily paintings inspired by his garden in Giverny, France!'
        }
      ]
    },
    
    // MUSIC QUIZZES
    {
      id: 'music-instruments-quiz-4-6',
      subjectId: 'music',
      title: 'Musical Instruments',
      description: 'Learn about different musical instruments and their sounds!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'instr-q1',
          question: 'Which instrument has black and white keys?',
          image: '/assets/images/quizzes/music_piano.svg',
          options: ['Drum', 'Guitar', 'Piano', 'Flute'],
          correctAnswer: 'Piano',
          explanation: 'The piano has black and white keys that you press to create musical notes!'
        },
        {
          id: 'instr-q2',
          question: 'Which instrument do you hit with sticks to make sound?',
          image: '/assets/images/quizzes/music_drums.svg',
          options: ['Violin', 'Trumpet', 'Guitar', 'Drums'],
          correctAnswer: 'Drums',
          explanation: 'Drums are played by hitting them with drum sticks or hands!'
        },
        {
          id: 'instr-q3',
          question: 'Which instrument has 6 strings that you pluck or strum?',
          image: '/assets/images/quizzes/music_guitar.svg',
          options: ['Piano', 'Flute', 'Guitar', 'Trumpet'],
          correctAnswer: 'Guitar',
          explanation: 'A guitar typically has 6 strings that you pluck or strum to create music!'
        }
      ]
    },
    {
      id: 'music-notes-quiz-4-6',
      subjectId: 'music',
      title: 'Musical Notes',
      description: 'Learn about music notes and their values!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'notes-q1',
          question: 'What do we call the symbols that represent musical sounds?',
          image: '/assets/images/quizzes/music_notes_symbols.svg',
          options: ['Letters', 'Notes', 'Words', 'Numbers'],
          correctAnswer: 'Notes',
          explanation: 'Musical sounds are represented by symbols called notes!'
        },
        {
          id: 'notes-q2',
          question: 'How many main notes are in music?',
          image: '/assets/images/quizzes/music_notes_scale.svg',
          options: ['5', '7', '10', '12'],
          correctAnswer: '7',
          explanation: 'There are 7 main notes in music: A, B, C, D, E, F, and G!'
        },
        {
          id: 'notes-q3',
          question: 'What do we call the set of five lines where we write music?',
          image: '/assets/images/quizzes/music_staff.svg',
          options: ['Music book', 'Staff', 'Song sheet', 'Note paper'],
          correctAnswer: 'Staff',
          explanation: 'The five lines where we write music notes is called a staff!'
        }
      ]
    },
    {
      id: 'music-sounds-quiz-4-6',
      subjectId: 'music',
      title: 'Music Sounds',
      description: 'Learn about different sounds in music!',
      ageGroup: '4-6',
      difficulty: 'easy',
      questions: [
        {
          id: 'sounds-q1',
          question: 'What do we call a very loud sound in music?',
          image: '/assets/images/quizzes/music_forte.svg',
          options: ['Piano', 'Forte', 'Soft', 'Medium'],
          correctAnswer: 'Forte',
          explanation: 'In music, a loud sound is called "forte"!'
        },
        {
          id: 'sounds-q2',
          question: 'What do we call a very soft sound in music?',
          image: '/assets/images/quizzes/music_piano.svg',
          options: ['Piano', 'Forte', 'Loud', 'Medium'],
          correctAnswer: 'Piano',
          explanation: 'In music, a soft sound is called "piano" (not to be confused with the instrument)!'
        },
        {
          id: 'sounds-q3',
          question: 'What do we call it when notes are played smoothly and connected?',
          image: '/assets/images/quizzes/music_legato.svg',
          options: ['Staccato', 'Legato', 'Forte', 'Piano'],
          correctAnswer: 'Legato',
          explanation: 'When notes are played smoothly and connected, it\'s called "legato"!'
        }
      ]
    }
  ];
  
  // Helper function to get content by subject and age group
  export const getContentBySubjectAndAge = (subjectId, ageGroup) => {
    let result = {
      flashcards: [],
      lessons: [],
      quizzes: []
    };
    
    // Filter by both subject and age if provided
    if (subjectId && ageGroup) {
      result.flashcards = flashcards.filter(f => f.subjectId === subjectId && f.ageGroup === ageGroup);
      result.lessons = lessons.filter(l => l.subjectId === subjectId && l.ageGroup === ageGroup);
      result.quizzes = quizzes.filter(q => q.subjectId === subjectId && q.ageGroup === ageGroup);
    }
    // Filter by subject only
    else if (subjectId) {
      result.flashcards = flashcards.filter(f => f.subjectId === subjectId);
      result.lessons = lessons.filter(l => l.subjectId === subjectId);
      result.quizzes = quizzes.filter(q => q.subjectId === subjectId);
    }
    // Filter by age only
    else if (ageGroup) {
      result.flashcards = flashcards.filter(f => f.ageGroup === ageGroup);
      result.lessons = lessons.filter(l => l.ageGroup === ageGroup);
      result.quizzes = quizzes.filter(q => q.ageGroup === ageGroup);
    }
    // Return all content if no filters
    else {
      result.flashcards = [...flashcards];
      result.lessons = [...lessons];
      result.quizzes = [...quizzes];
    }
    
    return result;
  };
  
  // Helper function to get related content
  export const getRelatedContent = (contentId, contentType) => {
    let relatedContent = {
      flashcards: [],
      lessons: [],
      quizzes: []
    };
    
    // For this simplified version, we'll just return empty related content
    // You can implement the actual logic later as needed
    
    return relatedContent;
  };