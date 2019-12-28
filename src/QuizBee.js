import React, {Component} from 'react';
import './assets/style.css';
import QuestionBox from "./Components/QuestionBox";
import Result from "./Components/Result";
import axios from 'axios'

class QuizBee extends Component {

    state = {
        questions: [],
        score: 0,
        responses: 0
    };

    getQuestions = () => {
        axios.get('http://localhost:8081/questions')
            .then((response) => {
                this.setState({
                    questions: response.data
                })
            });
    };

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    };

    componentDidMount() {
        this.getQuestions();
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        })
    };

    render() {
    return (
      <div className="container">
          <div className="title">Quiz</div>
          {this.state.questions.length > 0 &&
          this.state.responses < 5 &&
          this.state.questions.map(
              ({content, answerA, answerB, answerC, answerD, correct, id}) => (
                  <QuestionBox
                    content={content}
                    answerA={answerA}
                    answerB={answerB}
                    answerC={answerC}
                    answerD={answerD}
                    key={id}
                    selected={answer => this.computeAnswer(answer, correct)}
                  />
                  )
          )}
          {this.state.responses === 5 ? <Result score={this.state.score} playAgain={this.playAgain}/> : null}
      </div>
    );
    }
}

export default QuizBee;
