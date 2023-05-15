import React from 'react'
import PropTypes from "prop-types";
import "./PrimaryButton.css";

const PrimaryButton = ({ name, onClick }) => {
    return (
        <button 
            type="button" 
            className="primary-button"
            onClick={onClick}
        >{name}</button>
    );
}

PrimaryButton.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};


export default PrimaryButton;