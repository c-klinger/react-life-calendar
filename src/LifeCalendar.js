import React, { Component } from 'react';
import moment from 'moment';

export default class LifeCalendar extends Component {

  constructor (props) {
    super(props)
    this.totalWeeks = 4680;
    this.birthday = this.props.birthday;
  }

  weekOfYear(date){
    var currentYearWeeks = moment().week() - date.week();
    var accumulatedYearWeeks = (moment().year() - date.year()) * 52;

    return accumulatedYearWeeks + currentYearWeeks;
  };

  boxRender(filledBoxes, totalBoxes) {
    var boxes = [];
    for (var i = 0; i <= filledBoxes; i++) {
      boxes[i] = {index:i, class: "box filled"};
    }
    for (var j = filledBoxes; j <= totalBoxes; j++) {
      boxes[j] = {index:j, class: "box unfilled"};
    }
    var divBoxes = boxes.map((box) =>
      <div key={box.index} className={box.class}></div>
    );
    return <div>{divBoxes}</div>;
  }

  render() {
    const lifedWeeks = this.weekOfYear(this.props.birthday);
    if (lifedWeeks > 0) {
      return this.boxRender(this.weekOfYear(this.props.birthday), this.totalWeeks);
    }
    return null;
  }

}
