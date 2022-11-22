// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        index: 1,
        topic: 'Web Development',
        icon: 'fas fa-code',
        description:
            'Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).',
        questions: [
            {
                numb: 1,
                question: 'What does HTML stand for?',
                answer: 'Hyper Text Markup Language',
                options: [
                    'Hyper Text Preprocessor',
                    'Hyper Text Markup Language',
                    'Hyper Text Multiple Language',
                    'Hyper Tool Multi Language',
                ],
            },
            {
                numb: 2,
                question: 'What does CSS stand for?',
                answer: 'Cascading Style Sheet',
                options: [
                    'Common Style Sheet',
                    'Colorful Style Sheet',
                    'Computer Style Sheet',
                    'Cascading Style Sheet',
                ],
            },
            {
                numb: 3,
                question: 'What does PHP stand for?',
                answer: 'Hypertext Preprocessor',
                options: [
                    'Hypertext Preprocessor',
                    'Hypertext Programming',
                    'Hypertext Preprogramming',
                    'Hometext Preprocessor',
                ],
            },
            {
                numb: 4,
                question: 'What does SQL stand for?',
                answer: 'Structured Query Language',
                options: [
                    'Stylish Question Language',
                    'Stylesheet Query Language',
                    'Statement Question Language',
                    'Structured Query Language',
                ],
            },
            {
                numb: 5,
                question: 'What does XML stand for?',
                answer: 'eXtensible Markup Language',
                options: [
                    'eXtensible Markup Language',
                    'eXecutable Multiple Language',
                    'eXTra Multi-Program Language',
                    'eXamine Multiple Language',
                ],
            },
        ],
    },
    {
        index: 2,
        topic: 'JavaScript',
        icon: 'fab fa-js',
        description:
            'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
        questions: [
            {
                numb: 1,
                question:
                    'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
                answer: 'document.getElementById("demo").innerHTML = "Hello World!";',
                options: [
                    'document.getElement("p").innerHTML = "Hello World!";',
                    'document.getElementById("demo").innerHTML = "Hello World!";',
                    '#demo.innerHTML = "Hello World!";',
                    'document.getElementByName("p").innerHTML = "Hello World!";',
                ],
            },
            {
                numb: 2,
                question: 'How do you write "Hello World" in an alert box?',
                answer: 'alert("Hello World");',
                options: [
                    'msg("Hello World");',
                    'alertBox("Hello World");',
                    'msgBox("Hello World");',
                    'alert("Hello World");',
                ],
            },
            {
                numb: 3,
                question: 'How do you create a function in JavaScript?',
                answer: 'function myFunction()',
                options: [
                    'function = myFunction()',
                    'function:myFunction()',
                    'function myFunction()',
                    'function myFunction[]',
                ],
            },
            {
                numb: 4,
                question: 'How do you call a function named "myFunction"?',
                answer: 'myFunction()',
                options: [
                    'call function myFunction()',
                    'call myFunction()',
                    'myFunction()',
                    'myFunction[]',
                ],
            },
            {
                numb: 5,
                question: 'How to write an IF statement in JavaScript?',
                answer: 'if (i == 5)',
                options: [
                    'if i = 5 then',
                    'if i == 5 then',
                    'if i = 5',
                    'if (i == 5)',
                ],
            },
        ],
    },
    {
        index: 3,
        topic: 'Python',
        icon: 'fab fa-python',
        description:
            'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python has a design philosophy that emphasizes code readability, notably using significant whitespace.',
        questions: [
            {
                numb: 1,
                question:
                    'What is the correct file extension for Python files?',
                answer: '.py',
                options: ['.py', '.python', '.p', '.pyth'],
            },
            {
                numb: 2,
                question:
                    'What is the correct way to create a function in Python?',
                answer: 'def myFunction():',
                options: [
                    'create myFunction():',
                    'function myFunction():',
                    'def myFunction():',
                    'def = myFunction():',
                ],
            },
            {
                numb: 3,
                question:
                    'How do you create a variable with the numeric value 5?',
                answer: 'x = 5',
                options: ['x = 5', 'x == 5', 'x := 5', 'x = 5.0'],
            },
            {
                numb: 4,
                question: 'How do you add a comment in Python?',
                answer: '#This is a comment',
                options: [
                    '//This is a comment',
                    '#This is a comment#',
                    '#This is a comment',
                    '//This is a comment//',
                ],
            },
            {
                numb: 5,
                question:
                    'How do you create a variable with the floating number 2.8?',
                answer: 'x = 2.8',
                options: ['x = 2.8', 'x := 2.8', 'x == 2.8', 'x = 2.8.0'],
            },
        ],
    },
];
