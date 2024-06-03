import React from 'react'

const CheckboxList = ({ label }) => {
    return (
        <div>
            <input type = 'checkbox' id={label} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default CheckboxList