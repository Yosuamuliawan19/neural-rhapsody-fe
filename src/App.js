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
      hidden: true,
      button: 'BEDHOVEN',
      button1: 'BRUNO',
      button2: 'MOZAT',
      pic: 'pinoy4',
      title: 'default'
    };
  }
  
  check(abc) {
    this.setState({
      hidden: false
    });
    if(abc === 'BEDHOVEN'){
      this.setState({
        pic: 'pinoy',
        title: 'QUEEN'
      })
    }
    else if(abc === 'BRUNO'){
      this.setState({
        pic: 'pinoy2',
        title: 'KING'
      })
    }
    else if(abc === 'MOZAT'){
      this.setState({
        pic: 'pinoy3',
        title: 'PRINCE'
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
          'IU',
          'Lee Ji Eun'
        ]
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div onClick={() => this.check(this.state.button)} className="img-circular"><span className="tooltiptext">Queen</span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={() => this.check(this.state.button1)} className="img-circular2"><span className="tooltiptext2">King</span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={() => this.check(this.state.button2)} className="img-circular3"><span className="tooltiptext3">Prince</span></div>
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
