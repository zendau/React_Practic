import React from "react"
import TheList from "../../components/theList/theList"

class Quiz extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        questions: [
            {
                id: 1,
                title: "one",
                answers: [
                    "1",
                    "2",
                    "3"
                ],
                rightAnswer: "1"
            },
            {
              id: 2,
              title: "two",
              answers: [
                  "1",
                  "2",
                  "3"
              ],
              rightAnswer: "2"
          },
          {
            id: 3,
            title: "three",
            answers: [
                "1",
                "2",
                "3"
            ],
            rightAnswer: "3"
        }
        ],
        currentQuestion: 0
    }
  }

  clickEvent(data) {
    if (data === this.state.questions[this.state.currentQuestion].rightAnswer) {
      
      this.setState((state) => {
        let step = state.currentQuestion
        console.log(step, state.questions.length-1)
        if (step < state.questions.length-1) {
          return {currentQuestion: step + 1}
        }
        
      })
      console.log(this.state.currentQuestion)
    } else {
      console.log("Wrong answer")
    }
  }

  render() {

    
    const currentQuiz = this.state.questions[this.state.currentQuestion]
    return(
      <React.Fragment>
        <h1>{currentQuiz.title}</h1>
        <p>Current question {currentQuiz.id}</p>
        <TheList itemClick={this.clickEvent.bind(this)} answers={currentQuiz.answers} />

        <p>{currentQuiz.id} of {this.state.questions.length}</p>

      </React.Fragment>
       
    
   )
  }
}


export default Quiz;
