import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import cats from "./cats.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats: cats,
    clicked: [],
    score: 0,
    hiScore: 0,
    message: "Click an image to begin!"
  };

  
  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = (id) => {
    // alert(id);
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
          cats: cats,
          clicked: this.state.clicked.concat(id),
          score: this.state.score + 1,
          hiScore: (this.state.hiScore > this.state.score) ? this.state.hiScore : this.state.hiScore + 1,
          message: "You guessed correctly!"
        }
      );
    } else {
      this.setState(
        {
          cats: cats,
          clicked: [],
          score: 0,
          topScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
          message: "You guessed incorrectly!"
        }
      );
    }
    this.handleShuffleArray(cats);
  }

  // Map over this.state.cats and render a component for each cat object
  render() {
    return (
      <Wrapper>
        <Nav
          brand="Clicky Cat Game"
          message={this.state.message}
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Title subtitle="Click on a cat image to earn points, but don't click on any more than once!">Clicky Cat Game</Title>
        {this.state.cats.map(cats => (
          <Card
            handleClick={this.handleClick}
            id={cats.id}
            key={cats.id}
            name={cats.name}
            message={this.state.message}
            image={cats.image}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;