import { useState } from 'react'

const questions = [
  {
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'Jaipur', 'Chennai'],
    answer: 'Delhi'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'Which language is used in React?',
    options: ['Python', 'Java', 'JavaScript', 'PHP'],
    answer: 'JavaScript'
  }
]

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1)
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  return (
    <div className="quiz">
      {finished ? (
        <div className='quest'>
          <h2>Quiz Finished! 🎉</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={() => { setCurrent(0); setScore(0); setFinished(false) }}>
            Restart
          </button>
        </div>
      ) : (
        <div className='quest'>
          <h2>{questions[current].question}</h2>
          <div className="options">
            {questions[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Question {current + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  )
}

export default Quiz