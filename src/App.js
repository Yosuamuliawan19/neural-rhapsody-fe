import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

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
      title: 'default',
      link: ''
    };
  }
  
  check(abc) {
    const urlFetch = axios.get('http://192.168.8.103:5000/generate/test');
    urlFetch.then((res) => res.data).then(data => this.setState({
      link: data.link
    })).then(()=> this.download(abc, this.state.link));
  }
  download(data, link){
    console.log(data, link);
    if(data === 'beethoven'){
      this.setState({
        pic: 'beethoven',
        title: 'Beethoven',
        hidden: false
      })
    }
    else if(data === 'chopin'){
      this.setState({
        pic: 'chopin',
        title: 'Chopin',
        hidden: false
      })
    }
    else if(data === 'mozart'){
      this.setState({
        pic: 'mozart',
        title: 'Mozart',
        hidden: false,
      })
    }
    else{
      this.setState({
        pic: 'pinoy4'
      })
    }
  }
  componentDidMount () {
    const script = document.createElement("script");
    
    script.src = "www.midijs.net/lib/midi.js";
    script.async = true;
    
    document.body.appendChild(script);
  }
  render() {
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
              <br/>
              <div className="content" dangerouslySetInnerHTML={{__html: '<iframe frameBorder=\"0\" src=\"./Midi/index.html\" style=\"width:500px; height:300px;\"></iframe>'}}></div>
  
              <p className="font">Your Music is Ready!</p>
              <a href={this.state.link || 'www.google.com'}>DOWNLOAD</a>
            </div>
            
          </div>
        </header>
      </div>
    );
  }
}
export default App;
