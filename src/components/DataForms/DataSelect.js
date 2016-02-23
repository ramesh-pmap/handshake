// Dependencies.
import React from 'react';

// UI components
import Select from 'react-select';


// Define class.
class DataSelect extends React.Component {
  onChangeHandle(val) {
    if (val) {
      this.props.onChange(val);
    } else {
      this.props.onChange();
    }
  }

  // Render method.
  render() {
    const {
      label,
      options,
      placeholder,
      isRequired,
      multi,
      onChange
    } = this.props;

    return (
      <div className="form-group">
        {label ? <label className={isRequired ? 'control-label required' : 'control-label'} >{label}</label> : ''}
        <Select
          name="form-control"
          options={options}
          placeholder={placeholder}
          isRequired={isRequired}
          multi={multi}
          onChange={onChange ? this.onChangeHandle.bind(this) : null}
        />
      </div>
    );
  }
}

// Validation.
DataSelect.propTypes = {
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  options: React.PropTypes.array,
  multi: React.PropTypes.bool,
  isRequired: React.PropTypes.bool,
  onChange: React.PropTypes.func

};

// Export.
export default DataSelect;
