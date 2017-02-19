import React, { Component, PropTypes } from 'react';
import '../css/RadioButton.scss';

const CLASS_ROOT = 'radio-button';

export default class RadioButton extends Component {
  render() {
    const { className, label, ...props } = this.props;
    let classes = [];
    classes.push(CLASS_ROOT);
    if (props.disabled) {
      classes.push(`${CLASS_ROOT}--disabled`);
    }
    if (className) {
      classes.push(className);
    }

    return (
      <label className={classes.join(' ')}>
        <input {...props} className={`${CLASS_ROOT}__input`} type="radio" />
        <span className={`${CLASS_ROOT}__control`} />
        <label htmlFor={props.id} className={`${CLASS_ROOT}__label`}>
          {label}
        </label>
      </label>
    );
  }
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};
