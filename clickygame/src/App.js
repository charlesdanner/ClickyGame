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
    const compareScore = (x, y) => {
      if (x === y) return x + 1
      else return x
    }

    const shuffledGang = gang => {
      const shuffled = gang.map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
      return shuffled
    }

    if (guessed) {
      const gang = this.state.gang.map(member => {
        return {
          id: member.id,
          image: member.image,
          guessed: false
        }
      })

      this.setState({
        score: 0,
        message: "INCORRECT!",
        gang: shuffledGang(gang)
      })

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
      })
      this.setState({
        score: this.state.score + 1,
        best: compareScore(this.state.best, this.state.score),
        message: "CORRECT!",
        gang: shuffledGang(gang)

      })
    }
  }

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
