import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "../css/Location.css";


class Location extends PureComponent {
  constructor() {
    super();

    this.text = React.createRef();
  }

  render() {
    return (
      <section className="location">
        <span ref={this.text}>Nairobi, KE</span>
      </section>
    )
  }
}

Location.propTypes = {
  location: PropTypes.string.isRequired
};

export default Location;
