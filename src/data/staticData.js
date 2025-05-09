// src/data/staticData.js
export const subjects = [
    {
      id: 1,
      name: 'Math',
      icon: 'math.svg',
      color: '#FF9F43',
      ageGroups: ['4-6', '7-10'],
      description: 'Learn counting, addition, subtraction and more!',
      activities: [1, 2, 3],
      quizzes: [1, 2]
    },
    {
      id: 2,
      name: 'Science',
      icon: 'science.svg',
      color: '#54A0FF',
      ageGroups: ['4-6', '7-10'],
      description: 'Discover planets, animals and cool experiments!',
      activities: [4, 5, 6],
      quizzes: [3, 4]
    },
    {
      id: 3,
      name: 'English',
      icon: 'english.svg',
      color: '#FF6B6B',
      ageGroups: ['4-6', '7-10'],
      description: 'Learn letters, words and how to read!',
      activities: [7, 8, 9],
      quizzes: [5, 6]
    },
    {
      id: 4,
      name: 'Art',
      icon: 'art.svg',
      color: '#5F27CD',
      ageGroups: ['4-6', '7-10'],
      description: 'Get creative with colors, shapes and drawings!',
      activities: [10, 11, 12],
      quizzes: [7, 8]
    }
  ];
  
  export const activities = [
    {
      id: 1,
      subjectId: 1,
      name: 'Counting Adventure',
      type: 'game',
      ageGroup: '4-6',
      description: 'Count along with EduBot as you explore a magical garden!',
      icon: 'counting.svg',
      duration: '5 min',
      points: 10,
      completed: false
    },
    {
      id: 2,
      subjectId: 1,
      name: 'Addition Heroes',
      type: 'game',
      ageGroup: '4-6',
      description: 'Help the addition superheroes save the day by solving simple addition problems!',
      icon: 'addition.svg',
      duration: '7 min',
      points: 15,
      completed: false
    },
    // More activities would be here
  ];
  
  export const quizzes = [
    {
      id: 1,
      subjectId: 1,
      name: 'Counting Quiz',
      ageGroup: '4-6',
      icon: 'count_quiz.svg',
      description: 'Test your counting skills!',
      questions: [
        {
          id: 1,
          question: 'How many apples are there?',
          image: 'apples_3.svg',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3'
        },
        // More questions would be here
      ],
      completed: false,
      points: 30
    },
    // More quizzes would be here
  ];
  
  export const userData = {
    name: 'Alex',
    age: 7,
    avatar: 'avatar_1.svg',
    ageGroup: '7-10',
    points: 420,
    level: 4,
    streak: {
      current: 18,
      longest: 21
    },
    recentActivities: [
      {
        id: 4,
        type: 'activity',
        date: '2025-05-07',
        points: 15
      },
      {
        id: 5,
        type: 'quiz',
        date: '2025-05-07',
        points: 30
      },
      {
        id: 7,
        type: 'activity',
        date: '2025-05-06',
        points: 15
      },
      {
        id: 6,
        type: 'activity',
        date: '2025-05-05',
        points: 10
      }
    ],
    // More user data would be here
  };

  export const achievements = [
    {
      id: 1,
      title: 'First Quiz Completed',
      description: 'You completed your first quiz!',
      icon: 'trophy_1.svg',
      points: 50,
    },
    {
      id: 2,
      title: 'Activity Explorer',
      description: 'Completed 5 different activities!',
      icon: 'medal_1.svg',
      points: 100,
    },
    // Add more as needed
  ];
  