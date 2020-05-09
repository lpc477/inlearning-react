import React, { Component } from 'react';
import '../Css/App.css';

import Album from './Album';
import BestOf from './BestOf';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <BestOf/>
                <Album/>
                <Contact/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
