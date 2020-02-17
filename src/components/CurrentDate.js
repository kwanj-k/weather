import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../css/CurrentDate.css';

class DateCurrent extends PureComponent {
  constructor() {
    super();

    this.text = React.createRef();
  }

  render() {
    return (
      <section className="date-current">
        <span ref={this.text} className="date-current__text">
            Sunday, August 12, 2018
        </span>
      </section>
    )
  }
}

DateCurrent.propTypes = {
  date: PropTypes.string.isRequired
};

export default DateCurrent;
