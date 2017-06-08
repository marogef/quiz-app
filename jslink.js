/*********************
Step 1 functions and object definitions
*******************/

var questionsArray = [
    //Question 1
    {
        questionText: 'What family do apples belong to?',
        questionChoices: [' Rose family', ' Apples family', ' Orange family', ' Apricot family'],
        questionCorrectChoice: 0,
        answer: 'Apples belong to the rose family'
    },

    //Question 2
    {
        questionText: 'What age was the person that invented the popsicle?',
        questionChoices: [' 19', ' 14', ' 11', ' 35'],
        questionCorrectChoice: 3,
        answer: 'The popsicle was invented by an 11-year-old in 1905.'
    },

    //Question 3
    {
        questionText: 'What is the most popular toppings for pizza in Brazil?',
        questionChoices: [' Tomato',
                          ' Green Peas',
                          ' Steak',
                          ' Chicken'],
        questionCorrectChoice: 2,
        answer: 'The the most popular topping in Brazil is Green peas'

    },

    //Question 4
    {
        questionText: 'How much does the most expensive pizza in the world cost?',
        questionChoices: [' $1200',
                           ' $100',
                          ' $12,000',
                           ' $250'],
        questionCorrectChoice: 2,
        answer: 'The most expensive pizza in the world costs $12,000'
    },

    //Question 5
    {
        questionText: 'What was used as medicine in the 1800s?',
        questionChoices: [' Alcohol',
                          ' Ketchup',
                          ' Onion'],
        questionCorrectChoice: 1,
        answer: ' Ketchup was used as a medicine in the 1800s to treat diarrhea, among other things.'
    },

    //Question 6
    {
        questionText: 'How many hours does it take to digest Nuts such as Almonds, Walnuts, and Hazelnuts?',
        questionChoices: [' 1 hour',
                          ' 2 hours',
                         ' 3 hours',
                          ' 4 hours'],
        questionCorrectChoice: 3,
        answer: 'The hours it takes to digest Nuts such as Almonds, Walnuts, and Hazelnuts is 4'
    },

    //Question 7
    {
        questionText: 'Which of these has the highest carbs per 100g?',
        questionChoices: [' Apple',
                          ' Kiwis',
                          ' Onion',
                          ' Pear'],
        questionCorrectChoice: 3,
        answer: 'the highest carbs per 100g is pear'
    },

    //Question 8
    {
        questionText: 'What does eating banana help with',
        questionChoices: [' Diabetes',
                          ' Fight the cold',
                          ' Fight depression',
                          ' Colera'],
        questionCorrectChoice: 2,
        answer: 'Eating bananas can help fight depression.'
    },

    //Question 9
    {
        questionText: ' What is SPAM is short for?',
        questionChoices: [' Serviced pam',
                          ' South Pandorama Amazing Meat',
                          ' Spiced ham',
                          ' Spiced Pandorama Amazing Meat Co.'],
        questionCorrectChoice: 2,
        answer: 'SPAM is short for spiced ham'

    },

    //Question 10
    {
        questionText: 'What was the most popular carrot color in 1970?',
        questionChoices: [' Orange',
                          ' Purple',
                          ' Green',
                          ' light-orange'
                         ],
        questionCorrectChoice: 1,
        answer: 'The most popular carrots used to be purple in 1970'

    }
];

//questionsArray[currentQuestionNumber].questionChoices[3];
var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

function displayQuestion() {

    $('text').text(questionsArray[currentQuestionNumber].questionText);


    //populate the question text dynamically from the array above
    $('.questions h2').text(questionsArray[currentQuestionNumber].questionText);

    //empty the choices within the selection in order populate them with fresh choices for this very question
    $('.choices').empty();

    //check how many choices are inside each question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;

    for (var i = 0; i < totalNumberOfChoices; i++) {
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //2.3.2 append that row to the choices container in html
        $('.choices').append(buildEachChoiceHTML);


    }
    //    /3 - displays the number of the current question
    $('.questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
}


/*********************
Step 2 functions and object usage
*******************/

$(document).ready(function () {

    /*--- Hide quiz and result section on load ---*/
    $('.questions').hide();
    $('.results').hide();
    $('.intro').show();

    $('.startbutton').click(function () {
        $('.intro').hide();
        $('.results').hide();
        $('.questions').show();
        $('.message').empty();
        displayQuestion();
    });

    $(".submitbutton").click(function () {

        $('.intro').hide();
        $('.results').hide();
        $('.questions').show();

        /*******
        get input from the user
        ***/
        var userInput = $("input[class='option']:checked").val();
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;

        //        if the user has the right selection display it as correct if not then display as incorrect

        if (userInput == correctAnswer) {
            //great you got it right
            totalNumberOfCorrectAnswers = totalNumberOfCorrectAnswers + 1;
        }

        $('.message').append("<h3>Question: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('.message').append("<h4>Answer: " + questionsArray[currentQuestionNumber].answer + "</h4>");


        //if quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

            //show the final score
            $('.score').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);
            $('.intro').hide();
            $('.questions').hide();
            $('.results').show();
        } else {
            //this is the wrong answer
            currentQuestionNumber = currentQuestionNumber + 1;
            displayQuestion();
        }
    });

    $(".tryagain").click(function () {
        $('.results').hide();
        $('.questions').hide();
        $('.intro').show();

        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });
});
