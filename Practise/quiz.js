const questions=[{
    'que': 'Which of the following is the Markup Language',
    'a': 'CSS',
    'b': 'JS',
    'c': 'HTML',
    'd': 'PHP',
    'correct':'c'
},
     {'que': 'Which year was javascript launched',
     'a': '1995',
     'b': '1996',
     'c': '1997',
     'd': '1998',
     'correct':'a'
    },
         {
            'que': 'What does CSS stands for',
            'a': 'Cake Style System',
            'b': 'Cup Style System',
            'c': 'Car Style Sheet',
            'd': 'Cascending Style Sheet',
            'correct':'d'
         },
       {
        'que': 'Who is the Father of modern computers',
        'a': 'Thomas Hamilton',
        'b': 'Charles Babage',
        'c': 'Harry Style',
        'd': 'Noumann',
        'correct':'b'
    
       },
       {
        'que': 'Which is the example of 1st generation computer',
        'a': 'UNIAC',
        'b': 'ENIAC',
        'c': 'EDVAC',
        'd': 'EDSAC',
        'correct':'b'
    
       },
       { 'que': 'Which is the example of 1st generation computer',
       'a': 'UNIAC',
       'b': 'ENIAC',
       'c': 'EDVAC',
       'd': 'EDSAC',
       'correct':'b'
    },
       { 'que': 'Which country have the most powerful super-computer',
       'a': 'China',
       'b': 'Germany',
       'c': 'Japan',
       'd': 'America',
       'correct':'d'
    },
        { 'que': 'The first Mechanical Computer is',
        'a': 'MARK 1',
        'b': 'MAK 1',
        'c': 'MACK',
        'd': 'MACK 1',
        'correct':'b'
    },
         { 'que': 'The first Mechanical Computer was developed in',
         'a': '1937',
         'b': '1947',
         'c': '1927',
         'd': '1957',
         'correct':'a'
        },
         { 'que': ' Who developed the first Mechanical Computer ?',
         'a': 'Charles Babbage',
         'b': 'Howard Aiken',
         'c': 'John Von Neuman',
         'd': 'J.P.Ekart',
         'correct':'b'
        },
          { 'que': ' Who first used Binary system in Computers ?',
          'a': 'Charles Babbage',
          'b': 'Howard Aiken',
          'c': 'John Von Neuman',
          'd': 'J.P.Ekart',
          'correct':'c'
        },
   { 'que': 'In how many Generations Computers are classified ?',
   'a': '2',
   'b': '3',
   'c': '4',
   'd': '5',
   'correct':'d'
}];
let index=0;
let total=questions.length;
let correct=0, 
wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInput=document.querySelectorAll('options')
const loadQuestion=()=>{
    if(index===total){
        endQuiz()
    }
    reset();
    const data=questions[index]
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const ans=getAnswer()
    console.log(ans,data.correct)
    if(ans==data.correct){
          right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInput.forEach(
        (input)=>{
input.checked=flase;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thank you for attempting the quiz</h3>
    <h2> ${right}/${total} are correct </h2>
    `
}

loadQuestion();