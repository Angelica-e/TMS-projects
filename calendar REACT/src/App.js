import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




import Calendar from './components/Calendar';
import Timer from './components/Calendar/clock';
import Converter from './components/Calendar/converter';
import ButtonClass from './components/Calendar/lalala';
import Quotes from './components/Calendar/quotes';
import Weather from './components/Calendar/weather';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <h1>
            <Link to="/menu">Menu</Link>
          </h1>
          <ul>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/weather">Weather</Link>
            </li>
            <li>
              <Link to="/converter">Converter</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>

          </ul>

          <Switch>
            <Route path="/menu">
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/converter">
              <Converter />
            </Route>
            <Route path="/quotes">
              <Quotes />
            </Route>
            <Route path="/clock">
              <Timer size='big' />
            </Route>
            <Route path="button">
              <ButtonClass />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
