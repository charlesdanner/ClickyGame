import React from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import gang from './gang.json';
import CardContainer from './components/CardContainer';

class App extends React.Component {

  state = {
    score: 0,
    best: 0,
    message: "Click an image to begin",
    gang
  }

  checkIfClicked = (guessed, id) => {
   const messageElement = document.getElementById("message")
    const updateBestScore = (x, y) => {
      if (x === y) return x + 1
      else return x
    }

    const shuffledGang = gang => {
      const shuffled = gang.map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
      return shuffled
    }

    const setTheState = (score, best, message, gang) => {
      this.setState({
        score: score,
        best: best,
        message: message,
        gang: shuffledGang(gang)

      })
    }

    if (guessed) {
      const gang = this.state.gang.map(member => {
        return {
          id: member.id,
          image: member.image,
          guessed: false
        }
      })

      setTheState(0, 
        this.state.best,
        "INCORRECT",
        shuffledGang(gang)
      );

      messageElement.style.color = "red";
        
    } else {

      const gang = this.state.gang.map(member => {
        if (member.id !== id) {
          return {
            id: member.id,
            image: member.image,
            guessed: member.guessed
          }
        } else return {
          id: member.id,
          image: member.image,
          guessed: true
        }
      });  

      setTheState(
        (this.state.score + 1),
        updateBestScore(this.state.best,
          this.state.score), "CORRECT",
        shuffledGang(gang)
      );
      messageElement.style.color = "green";
    };
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron
          score={this.state.score}
          best={this.state.best}
          message={this.state.message} />
        <CardContainer>
          {this.state.gang.map(member => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={member.id}
              key={member.id}
              image={member.image}
              guessed={member.guessed}
            />
          ))}
        </CardContainer>
      </Wrapper>
    );
  }
}

export default App;
