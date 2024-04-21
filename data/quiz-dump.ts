// Define quiz questions and options
export const quizDump = [
    {
        question:
            "Which device is used to connect multiple computers in a network?",
        options: ["Router", "Switch", "Hub", "Modem"],
        answer: "Switch",
    },
    {
        question: "What is the purpose of IP address in a network?",
        options: [
            "To identify the network interface",
            "To establish a connection",
            "To uniquely identify a device",
            "To encrypt data transmission",
        ],
        answer: "To uniquely identify a device",
    },
    {
        question: "What does 'LAN' stand for in computer networking?",
        options: [
            "Local Access Network",
            "Long Area Network",
            "Local Area Network",
            "Logical Area Network",
        ],
        answer: "Local Area Network",
    },
    {
        question: "Which protocol is used for sending emails?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        answer: "SMTP",
    },
    {
        question: "What is the function of a firewall in network security?",
        options: [
            "To filter network traffic",
            "To connect two networks",
            "To create a virtual private network",
            "To amplify network signals",
        ],
        answer: "To filter network traffic",
    },
    {
        question:
            "What is the maximum data rate of a standard Ethernet connection?",
        options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
        answer: "1 Gbps",
    },
    {
        question:
            "Which layer of the OSI model is responsible for routing and forwarding?",
        options: [
            "Physical layer",
            "Data Link layer",
            "Network layer",
            "Transport layer",
        ],
        answer: "Network layer",
    },
    {
        question: "What does DNS stand for in computer networking?",
        options: [
            "Domain Name System",
            "Data Network Service",
            "Digital Networking Standard",
            "Dynamic Naming Service",
        ],
        answer: "Domain Name System",
    },
    {
        question:
            "What type of network topology is characterized by a central hub connected to all nodes?",
        options: [
            "Star topology",
            "Bus topology",
            "Ring topology",
            "Mesh topology",
        ],
        answer: "Star topology",
    },
    {
        question:
            "Which protocol is used for secure communication over a network?",
        options: ["HTTP", "FTP", "SSH", "UDP"],
        answer: "SSH",
    },
];

// Function to shuffle options randomly
// function shuffleOptions(options) {
//     for (let i = options.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [options[i], options[j]] = [options[j], options[i]];
//     }
//     return options;
// }

// // Function to start the quiz
// function startQuiz() {
//     // Shuffle questions randomly
//     const shuffledQuiz = quiz.sort(() => Math.random() - 0.5);
//     let score = 0;

//     // Iterate through each question
//     shuffledQuiz.forEach((questionObj, index) => {
//         console.log(Question ${index + 1}: ${questionObj.question});
//         const shuffledOptions = shuffleOptions([...questionObj.options]);
//         shuffledOptions.forEach((option, optionIndex) => {
//             console.log(${optionIndex + 1}. ${option});
//         });

//         const userAnswer = parseInt(prompt("Enter your answer (1, 2, 3, or 4):"));
//         const correctAnswerIndex = shuffledOptions.findIndex(option => option === questionObj.answer) + 1;

//         if (userAnswer === correctAnswerIndex) {
//             console.log("Correct!");
//             score++;
//         } else {
//             console.log(Incorrect. The correct answer is: ${correctAnswerIndex}. ${questionObj.answer});
//         }
//     });

//     console.log(Quiz completed! Your score is ${score} out of ${quiz.length});
// }

// // Start the quiz
// startQuiz();
