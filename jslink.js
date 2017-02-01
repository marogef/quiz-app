/*********************
Step 1 functions and object definitions
*******************/

var questionsArray = [
    //Question 1
    {
        questionText: 'Which Pizza brand is the best tasting?',
        questionChoices: ['California Hot pizza', 'Neumans Own', 'Djiorno', 'D Jets Pizza'],
        questionCorrectChoice: 0,
        answer: 'The best Pizza brand is the California Hot pizza'
    },

    //Question 2
    {
        questionText: 'What food has the lowest number carbs for each 100g?',
        questionChoices: ['Broccoli', 'Eggplant', 'Eggs', 'Zucchini'],
        questionCorrectChoice: 3,
        answer: 'The food has the lowest number carbs for each 100g is Eggs'
    },

    //Question 3
    {
        questionText: 'What is the healthiest source of protein?',
        questionChoices: ['Eggs',
                          'Steak',
                          'Cheese',
                          'Chicken'],
        questionCorrectChoice: 2,
        answer: 'The the healthiest source of protein is cheese'

    },

    //Question 4
    {
        questionText: 'What kind of coffee is the best when buying?',
        questionChoices: ['Swiss processed',
                           'Regular processed',
                           'Organic',
                           'Dark roasted coffee'],
        questionCorrectChoice: 2,
        answer: 'The kind of coffee is the best when buying is organic'
    },

    //Question 5
    {
        questionText: 'What type of cheese is the best tasting?',
        questionChoices: ['low fat Cottage cheese',
                          'Regular Mozerella Cheese',
                          'American Cheese'],
        questionCorrectChoice: 1,
        answer: 'The type of cheese that is best tasting is Regular Mozerella Cheese'
    },

    //Question 6
    {
        questionText: 'How many hours does it take to digest Nuts such as Almonds, Walnuts, and Hazelnuts?',
        questionChoices: ['1 hour',
                          '2 hours',
                         ' 3 hours',
                          '4 hours'],
        questionCorrectChoice: 3,
        answer: 'The hours it takes to digest Nuts such as Almonds, Walnuts, and Hazelnuts is 4'
    },

    //Question 7
    {
        questionText: 'Which of these has the highest carbs per 100g?',
        questionChoices: ['Apple',
                          'Kiwis',
                          'Onion',
                          'Pear'],
        questionCorrectChoice: 3,
        answer: 'the highest carbs per 100g is pear'
    },

    //Question 8
    {
        questionText: 'What kind of sugar is the best?',
        questionChoices: ['Coconut Sugar',
                          'Regular Cane sugar',
                          'Stevia',
                          'Date sugar'],
        questionCorrectChoice: 2,
        answer: 'The kind of sugar is the best is stevia'
    },

    //Question 9
    {
        questionText: 'What type of refrigerator brand lasts the longest?',
        questionChoices: ['Fridgware',
                          'Samsung',
                          'LG',
                          'Whirlpool'],
        questionCorrectChoice: 2,
        answer: 'the type of refrigerator brand lasts the longest is lg'

    },

    //Question 10
    {
        questionText: 'What is the healthiest drink?',
        questionChoices: ['Coffee',
                          'Green tea',
                          'Orange Juice',
                          'Apple Juice'
                         ],
        questionCorrectChoice: 1,
        answer: 'The healthiest drink is green tea'

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

        $('.message').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('.message').append("<h4>A: " + questionsArray[currentQuestionNumber].answer + "</h4>");


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
