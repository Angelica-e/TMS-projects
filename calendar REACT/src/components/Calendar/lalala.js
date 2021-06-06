import React from 'react';
import PropTypes from 'prop-types';


class ButtonClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
               text: props.text   
        }
    }


render() {
    return (
        <button>Button{this.props.text}</button>
    )
}
}

ButtonClass.propTypes = {
    text: PropTypes.string.isRequired,
    optionalObjectWithShape: PropTypes.shape({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired
      }).isRequired
}

export default ButtonClass;