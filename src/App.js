import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    middleLabel: "10A",
    leftPage: "dinning",
    rightPage: "stranger",
    middlePage: "wrong"
  },
  wrong: {
    text: "You are on the wrong train",
    leftLabel: "train",
    rightLabel: "ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  stranger: {
    text: "A stranegr is coming for you",
    leftLabel: "Get up and walk to dinning cart",
    rightLabel: "Sit and read news paper",
    leftPage: "dinning",
    rightPage: "talk",
    img: "https://i.ibb.co/qsdK5ry/lol.png"
  },
  dinning: {
    text: "It is time for you to have lunch",
    leftLabel: "Choose cake as lunch",
    rightLabel: "Go back to the seat",
    leftPage: "cake",
    rightPage: "travel",
    img: "https://i.ibb.co/wgsFwyr/lunch.jpg"
  },
  travel: {
    text: "You have arrived the destination after 4 hours",
    img: "https://i.ibb.co/vXMBn0g/desitination.png",
    leftLabel: "restart",
    leftPage: "start"
  },
  security: {
    text: "The security come to help you, you go back to the seat",
    img: "https://i.ibb.co/6RkD08M/come.png",
    leftLabel: "restart",
    leftPage: "start"
  },
  talk: {
    text: "The stranger take you to the place have no one",
    leftLabel: "Scream",
    rightLabel: "Ask Why he did this",
    leftPage: "cake2",
    rightPage: "Nice",
    img: "https://i.ibb.co/1K2cG0b/stranger.png"
  },
  cake2: {
    text:
      "He ask you to take the cake as lunch. You feel bad after taking the cake",
    leftLabel: "sleep",
    leftPage: "inthesea",
    img: "https://i.ibb.co/gMzJXd4/cake.jpg"
  },
  cake: {
    text: "People sit next to you share a cake with you",
    leftLabel: "Take it",
    rightLabel: "Don't take it",
    leftPage: "inthesea",
    rightPage: "stranger",
    img: "https://i.ibb.co/gMzJXd4/cake.jpg"
  },
  ontheship: {
    text: "Hahaha! Welcome Aboard!",
    leftLabel: "Jump to sea",
    rightLabel: "Sit Down",
    leftPage: "inthesea",
    rightPage: "stranger",
    img: "https://i.ibb.co/SJgq0Jk/ship.png"
  },
  inthesea: {
    text:
      "You are in the sea. That is a poisoned cake. You want to swim to the shore",
    leftLabel: "Keep Swim",
    rightLabel: "Help!",
    leftPage: "helpingyou",
    rightPage: "behindyou",
    img: "https://i.ibb.co/0qdJdJC/sea.jpg"
  },
  helpingyou: {
    text: "Do you want me to help you?",
    leftLabel: "Yes",
    rightLabel: "No",
    leftPage: "Nice",
    rightPage: "behindyou",
    img: "https://i.ibb.co/HFz4S7z/swimming.png"
  },
  behindyou: {
    text: "The Shark almost got you",
    leftLabel: "Dive into the sea",
    rightLabel: "Stop moving",
    leftPage: "goesaway",
    rightPage: "goesaway",
    img: "https://i.ibb.co/Yt2rQBK/shark.png"
  },
  goesaway: {
    text: "The shark walk away",
    img: "https://i.ibb.co/rdcK8b2/sharkaway.png",
    leftLabel: "restart",
    leftPage: "start"
  },
  Nice: {
    text: "Have a nice day!",
    img: "https://i.ibb.co/M7KjMmy/smile.png",
    leftLabel: "restart",
    leftPage: "start"
  }
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];
    var middleLabel;
    var leftLabel;
    var rightLabel;

    if (pageData.rightLabel) {
      rightLabel = (
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      );
    }

    if (pageData.leftLabel) {
      leftLabel = (
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
      );
    }

    if (pageData.middleLabel) {
      middleLabel = (
        <button onClick={() => this.goToPage(pageData.middlePage)}>
          {pageData.middleLabel}
        </button>
      );
    }
    var image;
    if (pageData.img) {
      image = (
        <div>
          <img class="image" src={pageData.img} />
        </div>
      );
    }

    return (
      <div className="App">
        <p>{pageData.text}</p>
        {image}
        {middleLabel}
        {leftLabel}
        {rightLabel}
        {/* <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button> */}
      </div>
    );
  }
}

export default App;
// cake
// <a href="https://ibb.co/gMzJXd4"><img src="https://i.ibb.co/gMzJXd4/cake.jpg" alt="cake" border="0"></a>
// sea
// <a href="https://ibb.co/0qdJdJC"><img src="https://i.ibb.co/0qdJdJC/sea.jpg" alt="sea" border="0"></a>
// ship
// <a href="https://ibb.co/SJgq0Jk"><img src="https://i.ibb.co/SJgq0Jk/ship.png" alt="ship" border="0"></a>
// people help
// <a href="https://ibb.co/HFz4S7z"><img src="https://i.ibb.co/HFz4S7z/swimming.png" alt="swimming" border="0"></a>
// destination
// <a href="https://ibb.co/vXMBn0g"><img src="https://i.ibb.co/vXMBn0g/desitination.png" alt="desitination" border="0"></a>
// smile
// <a href="https://ibb.co/M7KjMmy"><img src="https://i.ibb.co/M7KjMmy/smile.png" alt="smile" border="0"></a>
// shark
// <a href="https://ibb.co/Yt2rQBK"><img src="https://i.ibb.co/Yt2rQBK/shark.png" alt="shark" border="0"></a>
// shark away
// <a href="https://ibb.co/rdcK8b2"><img src="https://i.ibb.co/rdcK8b2/sharkaway.png" alt="sharkaway" border="0"></a>
// lunch
// <a href="https://ibb.co/wgsFwyr"><img src="https://i.ibb.co/wgsFwyr/lunch.jpg" alt="lunch" border="0"></a>
// Security
// <a href="https://ibb.co/6RkD08M"><img src="https://i.ibb.co/6RkD08M/come.png" alt="come" border="0"></a>
// Stranger
// <a href="https://ibb.co/1K2cG0b"><img src="https://i.ibb.co/1K2cG0b/stranger.png" alt="stranger" border="0"></a>
