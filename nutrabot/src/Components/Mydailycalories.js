import React from 'react'

export default function Mydailycalories({ dailyCalories, setDailyCalories }) {

    const handleChange = (e) => {
    
    }
    const handleSubmit = () => {}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="mydailycalories" value={dailyCalories} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

