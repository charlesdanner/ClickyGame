import React from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Friends from './friends.json'

class App extends React.Component {

  state = {
    score: 0,
    best: 0,
    Friends
  
}

render() {
  return (
    <Wrapper>
      <Header
        score={this.state.score}
        best={this.state.best}
      />
      <Jumbotron />

    






    </Wrapper>
  );
}
  
}

export default App;
