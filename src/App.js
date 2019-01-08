import React, { Component } from 'react';
import './App.css';
import MusicPlayer from 'react-responsive-music-player'
import Button from 'react-button-component';

const CustomizedButton = Button.extend`
  color: #FFF;
  border: none;
  border-radius: 5px;
  background: linear-gradient(70deg, #FF5686, #FF7B9E);
  border-bottom: 5px solid #C44267;
`

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
      loadingGlobal: 1,
      button: 'BEDHOVEN',
      button1: 'BRUNO',
      button2: 'MOZAT',
      pic: 'pinoy',
    };
  }
  
  check(abc) {
  if(abc === 'BEDHOVEN'){
    this.setState({
      pic: 'pinoy'
    })
  }
  else{
    this.setState({
      pic: 'pinoy2'
    })
  }
  }
  
  render() {
    const playlist = [
      {
        url: require('./through_the_night.mp3'),
        cover: require(`./${this.state.pic}.jpg`),
        title: 'Through The Night',
        artist: [
          'IU',
          'Lee Ji Eun'
        ]
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div>
              <Button type="primary" onClick={() => this.check(this.state.button)}>GENERATE BEDHOVEN</Button>
            </div>
            <br/>
            <div>
              <Button type="primary" onClick={() => this.check(this.state.button1)}>GENERATE BRUNO</Button>
            </div>
            <br/>
            <div>
              <Button type="primary" onClick={() => this.check(this.state.button2)}>GENERATE MOZAT</Button>
            </div>
            <MusicPlayer playlist={playlist} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
