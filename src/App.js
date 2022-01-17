import React from "react";
import Layout from "./hoc/Layout/Layout";
import Game from "./Containers/Game/Game";
import Quiz from "./Containers/Quiz/Quiz";

class App extends React.Component {
  state = {
    isQuiz: false,
    isGame: true
  };
  onGameClickHandler = () => {
    this.setState({
        isQuiz: true,
        isGame: false
      });
  };
  render() {
    return (
      <Layout>
        {this.state.isQuiz ? (
            <Quiz />
          ) : <Game 
          onGameClickHandler={this.onGameClickHandler}/>
          }
      </Layout>
    );
  }
}

export default App;
