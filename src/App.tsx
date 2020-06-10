import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from "react-material-ui-carousel";
import Paper from '@material-ui/core/Paper'

class App extends React.Component {
  render () {
    return (
        <div>
          <header>
            <menu className="menu">
              <li><a href="#">главная</a></li>
              <li><a href="#">меню</a></li>
              <li><a href="#">о нас</a></li>
              <li><a href="#">контакты</a></li>
            </menu>
          </header>
          <main>
            <div className="logo-container">
              <div className="logo">
                <b className="title">VÅRDAGEN</b><br /><span>modern fusion kitchen</span>
              </div>
            </div>
            <div className={"gallery-container"}>
              <Carousel autoPlay={true} indicators={false} navButtonsAlwaysVisible={true} className={"gallery"} fullHeightHover={false}>
                {
                  [
                      "https://www.instagram.com/p/CBLf4uzjGX5/media?size=l",
                      "https://www.instagram.com/p/CBDhNaijfsX/media?size=l",
                      "https://www.instagram.com/p/CBC6buMjiNK/media?size=l",
                      "https://www.instagram.com/p/CBBeCCujJ5y/media?size=l",
                      "https://www.instagram.com/p/CBA_jXcDApF/media?size=l",
                      "https://www.instagram.com/p/CA-fCC0DltY/media?size=l",
                      "https://www.instagram.com/p/CA9xwXzjBDt/media?size=l",
                      "https://www.instagram.com/p/CA8YuyjDr-7/media?size=l"
                  ].map(link => {
                    return <img src={link} className={"gallery-img"}/>
                  })
                }
            </Carousel>
          </div>
          </main>
          <footer>
            <p className="footer-content">Телефон: <a href="tel:+1234567890">+1234567890</a></p>
          </footer>

          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                  crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                  crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                  integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                  crossOrigin="anonymous"></script>
        </div>
    );
  }
}

export default App;
