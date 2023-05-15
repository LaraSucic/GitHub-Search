import React from 'react'
import PropTypes from "prop-types";
import "./InputBox.css";


class InputBox extends React.Component {
    render() {
        return (
            <div className="input-container">
                <label htmlFor="input-box">{this.props.label}</label>
                <input
                    id="input-box" 
                    type="text"
                    placeholder={this.props.placeholder} 
                    className="input-box"
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

InputBox.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};


export default InputBox;