import React, { Component } from 'react';
import logo from './logo.svg';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FontAwesome  from 'react-fontawesome'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'

import LifeCalendar from './LifeCalendar.js';

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      initialized: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      initialized: true
    });
  }

  componentDidUpdate () {
    console.log('goToAnchor');
    goToAnchor('lifeCalender');
  }

  render() {
    var detailsArea = <p className="App-intro">This is a <a href="https://facebook.github.io/react/">React</a>-based implementation of Tim Urbans Life Calendar concept.<br/><br/>See the <a href="https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator">Inside the mind of a master procrastinator TED Talk</a> if you want to learn about the concept.</p>;

    if (this.state.initialized) {
      detailsArea = <LifeCalendar birthday={this.state.startDate}/>;
    }

      return (
        <div className="App">
          <div className="App-header">
            <FontAwesome className='App-logo' name='calendar' size='5x' />
            <h2>Welcome to Life Calendar</h2>
            <h3>Select your birthday:</h3>
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className="react-datepicker-custom"
            />
          </div>
            {detailsArea}
            <ScrollableAnchor id={'lifeCalender'}>
            <p></p>
            </ScrollableAnchor>
        </div>
      );

  }
}

export default App;
