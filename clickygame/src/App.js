import React from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import gang from './gang.json';
import CardContainer from './components/CardContainer';

class App extends React.Component {

  state = {
    score: 0,
    best: 0,
    gang
  }

  checkIfClicked = (guessed, id) => {
    const compareScore = (x, y) => {
      if( x === y) return x + 1
      else return x
    }

    const shuffleOrder = (inputArr) => {
      inputArr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);

    }
    if (guessed) {
      const gang = this.state.gang.map(member => {
        return {
          id: member.id,
            name: member.name,
            image: member.image,
            guessed: false
        }
      })
      
      this.setState({ score: 0 }, { gang })

    } else {

      const gang = this.state.gang.map(member => {
        if(member.id !== id) {
          return {
            id: member.id,
            name: member.name,
            image: member.image,
            guessed: member.guessed
          }} else return {
            id: member.id,
            name: member.name,
            image: member.image,
            guessed: true
        }
      })

      this.setState({ 
        score: this.state.score + 1,
        best: compareScore(this.state.best, this.state.score),
        gang: gang

      })
      console.log(this.state.score)
      if (this.state.score > this.state.best) {
        this.setState({ best: this.state.best + 1 })
      }
    }
  }



  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          best={this.state.best}
        />
        <Jumbotron />

        <CardContainer>
          {this.state.gang.map(member => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={member.id}
              key={member.id}
              name={member.name}
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
