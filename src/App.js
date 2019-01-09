import React, { Component } from 'react';
import './App.css';
import MusicPlayer from 'react-responsive-music-player'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      type: [
        {
          value: 'abc',
          label: 'abc',
        },
        {
          value: 'def',
          label: 'def',
        },
      ],
      hidden: true,
      button: 'beethoven',
      button1: 'chopin',
      button2: 'mozart',
      pic: 'pinoy4',
      title: 'default'
    };
  }
  
  check(abc) {
    fetch('https://192.168.43.112:5000/generate/test')
      .then(response => console.log(response))
      .then(data => this.setState({ data }));
    
    this.setState({
      hidden: false
    });
    if(abc === 'beethoven'){
      this.setState({
        pic: 'beethoven',
        title: 'Beethoven'
      })
    }
    else if(abc === 'chopin'){
      this.setState({
        pic: 'chopin',
        title: 'Chopin'
      })
    }
    else if(abc === 'mozart'){
      this.setState({
        pic: 'mozart',
        title: 'Mozart'
      })
    }
    else{
      this.setState({
        pic: 'pinoy4'
      })
    }
  }
  
  render() {
    const playlist = [
      {
        url: require('./through_the_night.mp3'),
        cover: require(`./${this.state.pic}.jpg`),
        title: `${this.state.title}`,
        artist: [
          'Neural Raphsody',
        ]
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div className="typewriter">
              <h1 className="h1">Neural_Rhapsody</h1>
            </div>
            <br/>
            <br/>
            <br/>
            <div onClick={() => this.check(this.state.button)} className="img-circular"><span className="tooltiptext">Beethoven</span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={() => this.check(this.state.button1)} className="img-circular2"><span className="tooltiptext2">Chopin</span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={() => this.check(this.state.button2)} className="img-circular3"><span className="tooltiptext3">Mozart</span></div>
            <div hidden={this.state.hidden}>
              <MusicPlayer playlist={playlist} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
