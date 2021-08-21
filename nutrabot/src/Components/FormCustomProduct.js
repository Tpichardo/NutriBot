import React from 'react'

export default function FormCustomProduct({handleChange, value}) {
    return (
        <div>
            <form action="">
            <span className="form-field">
          <input
            type="text"
            name="productname"
            value={value}
            onChange={handleChange}
            placeholder="Your Name"
            className="input-field"
          />
        </span>
        <input type="submit" value="Submit" className="submit-comment" />
            </form>
        </div>
    )
}
