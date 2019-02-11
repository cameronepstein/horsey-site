import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import logo from './Horsey_Text5.png';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import { FaFacebookSquare, FaInstagram, FaSpotify, FaShoppingCart, FaYoutube } from 'react-icons/fa';

import './App.css';

const LogoImage = styled.img`
width: 500px;

@media only screen and (max-width: 640px) {
  width: 400px;
}

@media only screen and (max-width: 480px) {
  width: 320px;
}

@media only screen and (max-width: 400px) {
  width: 280px;
}
`;

const SocialsList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const SocialsElement = styled.li`
  float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;

    :hover {
      color: #000000;
    }
  };

`;

const StyledPlayer = styled(ReactPlayer)`
margin: 50px 0;

@media only screen and (max-width: 640px) {
  width: 480px !important;
  height: 270px !important;
}

  @media only screen and (max-width: 480px) {
    width: 400px !important;
    height: 225px !important;
  }

  @media only screen and (max-width: 400px) {
    width: 320px !important;
    height: 180px !important;
  }
`

class App extends Component {

  componentDidMount() {
    initializeReactGA();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}


        <body className={"App-body"}>
        <LogoImage  src={logo}/>


        <StyledPlayer url='https://www.youtube.com/watch?v=1Boc5wg-waY' playing />


        <div >
          <SocialsList >
          <SocialsElement hoverColor={'#3b5998'}><a href="https://www.facebook.com/horseyband" target="_blank"><FaFacebookSquare/></a></SocialsElement>
            <SocialsElement hoverColor={'#e95950'}><a href="https://www.instagram.com/horseyband/" target="_blank"><FaInstagram/></a></SocialsElement>
          <SocialsElement hoverColor={'#3b5998'}><a href="https://www.youtube.com/channel/UCpYJKeL-jFzra-F-6TODnaA?view_as=subscriber" target="_blank"><FaYoutube/></a></SocialsElement>
            <SocialsElement hoverColor={'#1DB954'}><a href="https://open.spotify.com/artist/3ey9OSASkq8HNPh0u7jjfO" target="_blank"><FaSpotify/></a></SocialsElement>
            <SocialsElement hoverColor={'#1DB954'}><a href="https://horsey.bigcartel.com/" target="_blank"><FaShoppingCart/></a></SocialsElement>
          </SocialsList>
        </div>
        </body>
      </div>
    );
  }
}

function initializeReactGA() {
    ReactGA.initialize('UA-134233944-1');
    ReactGA.pageview('/homepage');
}

export default App;
