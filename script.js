const quizQuestions = [
    // Answer index 0
    {
        question: "სად გაგზავნა ნესტანმა ტარიელი საგმირო საქმის ჩასადენად?",
        image: "./22.jpg",
        options: ["ხატაეთი", "ინდოეთი", "არაბეთი", "სპარსეთი"],
        answer: 0
    },
    // Answer index 1
    {
        question: "ვინ ამბობს სიტყვებს 'ღარიბი მოვკვდე ღარიბად'?",
        image: "./22.jpg",
        options: ["ტარიელი", "ავთანდილი", "როსტევანი", "ფრიდონი"],
        answer: 1
    },
    // Answer index 2
    {
        question: "ვინ ამბობს ამ სიტყვებს : 'რაღაა იგი სინათლე რასაცა ახლავს ბნელია?'",
        image: "./22.jpg",
        options: ["როსტევანი", "ავთანდილი", "ტარიელი", "ნესტანი"],
        answer: 2
    },
    // Answer index 3
    {
        question: "როსტევანისა და ვეზირების საუბარში რომელი ფრაზაა თანამედროვეობისთვის მნიშვნელოვანი?",
        image: "./22.jpg",
        options: ["ვარდის ფურცლობის ნიშანი", "თეთრი მზე და ღამის სიშავე", "მშვიდობა და მხიარულება", "ლეკვი ლომისა სწორია ძუ იყოს თუნდა ხვადია"],
        answer: 3
    },
    // Answer index 3
    {
        question: "ამა საქმესა ვერა ვიქმ მე განდობასა სხვათასა - ვის ეუბნება ამ ფრაზას?",
        image: "./22.jpg",
        options: ["ტარიელს", "ავთანდილს", "ფრიდონს", "შერმადინს"],
        answer: 3
    },
    // Answer index 2
    {
        question: "კაცი კაცსა შემოვსტყორცნი ცხენ-კაცისა დავდგი გორი - რომელ პერსონაჟს ეკუთვნის ეს სიტყვები?",
        image: "./22.jpg",
        options: ["ტარიელი", "ავთანდილი", "ფრიდონი", "როსტევანი"],
        answer: 2
    },
    // Answer index 1
    {
        question: "მიწურვილ იყო ზაფხული ქვეყნით ამოსვლა მწვანისა ვარდის ფურცლობის ნიშანი დრო მათის პაემანისა - ვისი შეხვედრაზე წერს აქ რუსთაველი?",
        image: "./22.jpg",
        options: ["ტარიელისა და ნესტანის", "ავთანდილისა და ტარიელის", "ავთანდილისა და ფატმანის", "ტარიელისა და როსტევანის"],
        answer: 1
    },
    // Answer index 0
    {
        question: "შენთვის მოვკვდები გავხდები ყორანთა დასაყივარად - ვინ ვის მიმართავს ასე ვეფხისტყაოსანში?",
        image: "./22.jpg",
        options: ["ნესტანი ტარიელს", "ტარიელი ნესტანს", "ავთანდილი ტარიელს", "ტარიელი ავთანდილს"],
        answer: 0
    },
    // Answer index 0
    {
        question: "რა ყვავი ვარდსა იშოვნის თავი ბულბული ჰგონია - ვის მიემართება ეს სიტყვები?",
        image: "./22.jpg",
        options: ["ავთანდილი ფატმანზე", "ტარიელი ნესტანზე", "ფრიდონი ნესტანზე", "ავთანდილი ტარიელზე"],
        answer: 0
    },
    // Answer index 1
    {
        question: "კარვის კალთა ჩახლართული ჩავჭერ ჩავაქარაბაკე - რა მხატვრული ხერხია გამოყენებული ტექსტში?",
        image: "./22.jpg",
        options: ["ალიტერაცია", "მეტაფორა", "ჰიპერბოლა", "ეპითეტი"],
        answer: 1
    },
    // Answer index 2
    {
        question: "ქალსა შევხედენ ლახვარი მეცა ცნობასა და გულსა - ვისზეა საუბარი მოცემულ ტაეპში?",
        image: "./22.jpg",
        options: ["ნესტანზე", "ფატმანზე", "ტინათინზე", "არაბ დედოფალზე"],
        answer: 2
    },
    // Answer index 3
    {
        question: "პერსონაჟი რომელიც აცხადებს: 'სხვა მეფე დაჯდეს ......... მე მერტყას ჩემი ხმალია?'",
        image: "./22.jpg",
        options: ["ტარიელი", "ავთანდილი", "ფრიდონი", "როსტევანი"],
        answer: 3
    },
    // Answer index 3
    {
        question: "პერსონაჟი რომელიც ბიძაშვილებმა შეავიწროვეს?",
        image: "./22.jpg",
        options: ["ტარიელი", "ავთანდილი", "ფრიდონი", "როსტევანი"],
        answer: 3
    },
    // Answer index 2
    {
        question: "პერსონაჟი რომელზეც რუსთაველი წერს: 'რა ესმოდათ მღერა ყმისა სმენად მხეცნი მოვიდიან?'",
        image: "./22.jpg",
        options: ["ტარიელი", "ფრიდონი", "ავთანდილი", "როსტევანი"],
        answer: 2
    },
    // Answer index 1
    {
        question: "რა ვითარებაში მივიდა ავთანდილი გულანშაროში?",
        image: "./22.jpg",
        options: ["როგორც მეფე", "როგორც ვაჭარი", "როგორც მეომარი", "როგორც მწერალი"],
        answer: 1
    }
];

const blitzQuestions = [
    "რომელ საუკუნეში დაიწერა „ვეფხისტყაოსანი“?",
    "რამდენმარცვლიანი შაირითაა დაწერილი „ვეფხისტყაოსანი“?",
    "რომელ მეფეს ადიდებს რუსთაველი პოემის დასაწყისში?",
    "რა ერქვა არაბეთის მეფეს?",
    "„მე გარდასრულვარ, სიბერე მჭირს, ჭირთა უფრო ძნელია,“ ვინ ამბობს ამ ფრაზას?",
    "ვინ იყო ავთანდილი?",
    "რომელი ვეზირი ჩნდება თინათინის გამეფების ეპიზოდში?",
    "რა შესთავაზა ავთანდილმა როსტევან მეფეს?",
    "რა მოიმოქმედა თინათინმა, როდესაც მამის უხასიათობის შესახებ შეიტყო?",
    "რა უბრძანა თინათინმა ავთანდილს და რას დაჰპირდა სანაცვლოდ?",
    "რა ერქვა ავთანდილის ერთგულ ყმას?",
    "რა დაავალა ავთანდილმა შერმადინს?",
    "ვისთან შეხვედრა დაეხმარა ავთანდილს უცხო მოყმის პოვნაში?",
    "ვინ არის ასმათი?",
    "თავდაპირველად ვის შეხვდა ავთანდილი?",
    "რას დაჰპირდა ასმათი ავთანდილს?",
    "რომელი სამეფოს მემკვიდრეა ტარიელი?",
    "ვინ იყო დავარი?",
    "ვისი მოკვლა დაავალა ნესტანმა ტარიელს და რატომ?",
    "ვინ იყო სარიდანი?",
    "რა მიართვა ტარიელმა ასმათს?",
    "რატომ გააგზავნა ტარიელმა კაცი ხატაეთში?",
    "რა ერქვა ხატაეტის მეფეს?",
    "რა პასუხი მიიღო ტარიელმა ხატაეთიდან?",
    "სად ათხოვებდა ფარსადანი ნესტანს?",
    "რა რეაქცია ჰქონდა ტარიელს ფარსადანის გადაწყვეტილებაზე?",
    "რა მიზნით სთხოვა ნესტანმა ტარიელს ხვარაძმშას უფლისწულის მოკვლა?",
    "რა მოიმოქმედა დავარმა, როცა ნესტანისა და ტარიელის მიჯნურობა შეიტყო?",
    "ვინ გააგებინა ტარიელს ნესტანის დაკარგვის ამბავი?",
    "ვინ იყო ნურადინ ფრიდონი?",
    "რაში დაეხმარა ტარიელი ნურადინ ფრიდონს?",
    "რა მნიშვნელოვანი ინფორმაცია შეიტყო ტარიელმა ფრიდონისგან?",
    "სად ეძებდა ავთანდილი ნესტან-დარეჯანს?",
    "რა ვითარებაში მივიდა ავთანდილი გულანშაროში?",
    "ვინ არის ფატმანი?",
    "რა მიზნით დაუახლოვდა ავტანდილი ფატმანს?",
    "რა უამბო ფატმანმა ავტანდილს ნესტან-დარეჯანის შესახებ?",
    "რა მისწერა ნესტანმა ფატმანს?",
    "სამთა თათბირისას, რა უნდა მოემოქმედებინათ ნესტანის დასახსნელად ავთანდილის აზრით?",
    "რას ფიქრობდა ფრიდონი ნესტანის დახსნასთან დაკავშირებით?",
    "როგორ სურდა ტარიელს მიჯნურის გადარჩენა?",
    "რა გზით დაიხსნეს ნესტან-დარეჯანი ქაჯეთის ციხიდან?"
];

let currentQuestionIndex = 0;
let score = 0;
let blitzScore = 0;
let questionTimer;
let blitzTimer;

function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        document.getElementById('question').innerText = currentQuestion.question;
        document.getElementById('question-image').src = currentQuestion.image;
        for (let i = 0; i < currentQuestion.options.length; i++) {
            const optionButton = document.getElementById('option' + i);
            optionButton.innerText = currentQuestion.options[i];
            optionButton.className = 'option';
        }
        startQuestionTimer();
    } else {
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('score-section').style.display = 'block';
        document.getElementById('score').innerText = `შენ მიღე ${score} სწორი პასუხი ${quizQuestions.length} დან!`;
    }
}

function selectOption(option) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctOption = currentQuestion.answer;
    document.getElementById('option' + correctOption).classList.add('correct');
    if (option !== correctOption) {
        document.getElementById('option' + option).classList.add('wrong');
    }
    if (option === correctOption) {
        score++;
    }
    clearInterval(questionTimer);
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

function startBlitz() {
    currentQuestionIndex = 0; // Reset the question index for blitz
    shuffleArray(blitzQuestions); // Randomize blitz questions
    document.getElementById('score-section').style.display = 'none';
    document.getElementById('blitz-section').style.display = 'block';
    loadBlitzQuestion();
    startBlitzTimer();
}

function startQuestionTimer() {
    let timeLeft = 60;
    document.getElementById('question-timer').innerText = timeLeft;
    clearInterval(questionTimer);
    questionTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('question-timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            currentQuestionIndex++;
            loadQuestion();
        }
    }, 1000);
}

function startBlitzTimer() {
    let timeLeft = 60;
    document.getElementById('timer').innerText = timeLeft;
    clearInterval(blitzTimer);
    blitzTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(blitzTimer);
            showPopup(`Blitz part over! You got ${blitzScore} correct!`);
            document.getElementById('blitz-section').style.display = 'none';
        }
    }, 1000);
}

function loadBlitzQuestion() {
    if (currentQuestionIndex < blitzQuestions.length) {
        const currentQuestion = blitzQuestions[currentQuestionIndex];
        document.getElementById('blitz-question').innerText = currentQuestion;
    } else {
        clearInterval(blitzTimer);
        showPopup(`Blitz part over! You got ${blitzScore} correct!`);
        document.getElementById('blitz-section').style.display = 'none';
    }
}

function skipBlitzQuestion() {
    currentQuestionIndex++;
    loadBlitzQuestion();
}

function showPopup(message) {
    document.getElementById('popup-message').innerText = message;
    document.getElementById('popup').classList.add('visible');
}

function closePopup() {
    document.getElementById('popup').classList.remove('visible');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.onload = () => {
    document.getElementById('quiz-section').style.display = 'block';
    loadQuestion();
}
