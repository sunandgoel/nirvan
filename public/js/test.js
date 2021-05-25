(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer== "a"){
        numCorrect= numCorrect+0;
      }
      else if(userAnswer== "b"){
        numCorrect= numCorrect+1;
      }
      else if(userAnswer== "c"){
        numCorrect= numCorrect+2;
      }
      else if(userAnswer== "d"){
        numCorrect= numCorrect+3;
      }
      else if(userAnswer== "e"){
        numCorrect= numCorrect+4;
      }
      /*
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }*/
    });

    // show number of correct answers out of total  
    //(out of ${myQuestions.length}) --> goes down
    resultsContainer.innerHTML = `Your Score Is ${numCorrect}, Click on book an appointment to proceed`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  var ch;
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "I was very anxious, worried or scared about a lot of things in my life. I felt that my worry was out of my control.",
      answers: {
        a: "Never",
        b: "A few times",
        c: "Sometimes",
        d: "Often",
        e: "Constantly"
      },
      correctAnswer: ch
    },
    {
      question: "	I felt restless, agitated, frantic, or tense. 	I had trouble sleeping - I could not fall or stay asleep, and/or didn't feel well-rested when I woke up.",
      answers: {
        a: "Never",
        b: "A few times",
        c: "Sometimes",
        d: "Often",
        e: "Constantly"
      },
      correctAnswer: ch 
    },
    {
      question: "My hands, legs or entire body were shaking, trembling, or felt tingly. I had difficulty breathing or swallowing.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "How frequently did you experience panic attacks in the last 6 months?",
      answers: {
        a: "Never",
        b: "Less than a few times a week",
        c: "A few times a week",
        d: "Once or twice a day",
        e: "Several times a day",
      },
      correctAnswer: ch 
    },
    {
      question: "	Did you purposely avoid situations or activities in which you might experience a panic attack?",
      answers: {
        a: "No",
        b: "Yes",
      },
      correctAnswer: ch 
    },
    //traumatic event
    {
      question: "Directly - I was a victim of a traumatic event, or I witnessed it in person (happening to someone else).",
      answers: {
        a: "No",
        b: "Yes",
      },
      correctAnswer: ch 
    },
    {
      question: "I am haunted by memories, flashbacks, or nightmares about the event.",
      answers: {
        a: "No",
        b: "Yes",
      },
      correctAnswer: ch 
    },
    {
      question: "I frequently felt fear, guilt, shame, or blamed myself or others for what happened. I became irritable or enraged because of minor issues (or for no reason at all).",
      answers: {
        a: "No",
        b: "Yes",
      },
      correctAnswer: ch 
    },
    {
      question: "I lost interest in activities that I used to enjoy.",
      answers: {
        a: "No",
        b: "Yes",
      },
      correctAnswer: ch 
    },

    {
      question: "I was unable to feel happiness, contentment, joy, or love, or had trouble connecting with people.",
      answers: {
        a: "No",
        b: "Yes",
      },
      correctAnswer: ch 
    },
    //feeling of sadness last 2 weeks
    {
      question: "I frequently felt sad, like I couldn't go on, in the past 2 weeks",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "I lost or gained weight without trying to, or my appetite changed.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "The sadness I was feeling made it difficult for me to function in my personal, social, or work life.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "I felt worthless or guilty.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    //feeling of extreme excitement and depression
    {
      question: "I experienced an unusually elevated mood where I was extremely elated, energetic, or irritable.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "I had a sudden burst of confidence, or felt like I was better than anyone else.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "My mind was flooded with thoughts, and I talked more/faster than usual.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "I started to tackle multiple goals/activities at once (more than I usually would) or jumped from one interest to another in an attempt to do it all.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
    {
      question: "I experienced extreme mood swings from depression to elation without any apparent reason.",
      answers: {
        a: "Not at all",
        b: "Mild",
        c: "Moderate",
        d: "Severe",
      },
      correctAnswer: ch 
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();