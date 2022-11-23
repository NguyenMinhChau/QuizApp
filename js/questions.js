// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        index: 1,
        topic: 'Toán 10',
        icon: 'fas fa-calculator',
        description: 'Đề thi Toán 10 Học kì 2 năm 2023 - 2023 ',
        questions: [
            {
                numb: 1,
                question:
                    'Đường thẳng d đi qua hai điểm A(8;0), B(0;7) có phương trình là',
                answer: 'x/8 + y/7 = 1',
                options: [
                    'x/8 + y/7 = 1',
                    'x/7 + y/8 = 1',
                    'x/8 + y/7 = -1',
                    'x/8 - y/7 = 1',
                ],
            },
            {
                numb: 2,
                question: 'Tập nghiệm của bất phương trình x2 - 3x - 4 < 0',
                answer: '(-1;4)',
                options: ['(-∞;-1) ∪ (4;+∞)', '(-∞;-1)', '(4;+∞)', '(-1;4)'],
            },
            {
                numb: 3,
                question:
                    "Góc giữa hai đường thẳng d: x + y + 2 = 0 và d': y + 1 = 0 có số đo bằng",
                answer: '45°',
                options: ['90°', '60°', '45°', '30°'],
            },
            {
                numb: 4,
                question:
                    'Cho hai điểm M(3;2), N(-1;-4). Đường trung trực của MN có phương trình là',
                answer: '2x + 3y + 1 = 0',
                options: [
                    '2x + 3y + 1 = 0',
                    '2x + 3y - 1 = 0',
                    '2x - 3y + 1 = 0',
                    '2x - 3y - 1 = 0',
                ],
            },
            {
                numb: 5,
                question:
                    'Cho s⁡inx + cosx = √2. Khi đó sin⁡2 x có giá trị bằng',
                answer: '1',
                options: ['-1', '0', '1', '2'],
            },
        ],
    },
    {
        index: 2,
        topic: 'Toán 11',
        icon: 'fas fa-calculator',
        description: 'Đề thi Toán 11 Học kì 2 năm 2023 - 2023 ',
        questions: [
            {
                numb: 1,
                question: 'Tìm tập xác định của hàm số y = sin(1/x + 2x)',
                answer: 'D = R / {0}',
                options: [
                    'D = [-2;2]',
                    'D = [-1;1] / {0}',
                    'D = R',
                    'D = R / {0}',
                ],
            },
            {
                numb: 2,
                question: 'Tập giá trị của hàm số y = sin(x) là',
                answer: '[-1;1]',
                options: ['(-1;1)', '[-1;1]', 'R', '[0;1]'],
            },
            {
                numb: 3,
                question: 'Tập giá trị của hàm số y = 1 - 2|sin(5x)|',
                answer: '[-1;1]',
                options: ['[0;1]', '[1;2]', '[-1;1]', '[-1;3]'],
            },
            {
                numb: 4,
                question: 'Giá trị lớn nhất của hàm số y = 3/4 + 1/4*cos(x) là',
                answer: '1',
                options: ['1', '1/4', '3/4', '1/2'],
            },
            {
                numb: 5,
                question: 'Giá trị nhỏ nhất của hàm số y = sin(x - π/3) + 2 là',
                answer: '1',
                options: ['-1', '1', '2', '3'],
            },
        ],
    },
];
