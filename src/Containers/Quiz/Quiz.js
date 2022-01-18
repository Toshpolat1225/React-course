import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../Components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../Components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "1-savol",
        rightAnswerId: 1,
        id: 1,
        answers: [
          { text: "1", id: 1 },
          { text: "2", id: 2 },
          { text: "3", id: 3 },
          { text: "4", id: 4 },
        ],
      },
      {
        question: "2-savol",
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: "1", id: 1 },
          { text: "2", id: 2 },
          { text: "3", id: 3 },
          { text: "4", id: 4 },
        ],
      },
      {
        question: "3-savol",
        rightAnswerId: 3,
        id: 3,
        answers: [
          { text: "1", id: 1 },
          { text: "2", id: 2 },
          { text: "3", id: 3 },
          { text: "4", id: 4 },
        ],
      },
      {
        question: "4-savol",
        rightAnswerId: 4,
        id: 4,
        answers: [
          { text: "1", id: 1 },
          { text: "2", id: 2 },
          { text: "3", id: 3 },
          { text: "4", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      return;
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
            // Savol
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
