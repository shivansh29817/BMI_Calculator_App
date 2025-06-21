import React, {useMemo, useState} from 'react'
import './App.css'

const App = () => {

  const [height,setHeight] = useState(180)
  const [weight,setWeight] = useState(70)

  function onWeightChange(event){
    setWeight(event.target.value)

  }

  function onHeightChange(event){
    setHeight(event.target.value)

  }

  // Using UseMemo to optimize speed and performance
  const output = useMemo(()=>{
    const calculateHeight = height/100
    return (weight/(calculateHeight*calculateHeight)).toFixed(1)

  },[weight,height])
  
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-selection'>
        <p className='slider-output'>Weight: {weight}kg</p>
        <input className='input-slider' type='range' step="1" 
        min="40" max="200"
        onChange={onWeightChange}
         />

        <p className='slider-output'>Height: {height}cm</p>
        <input className='input-slider'
        type='range'
        min={140}
        max={220}
        onChange={onHeightChange}

        />

      </div>
      <div className='output-selection'>
        <p>Your BMI is </p>
        <p className='output'>{output} kg/m<sup className='output-sup'>2</sup></p>
      </div>
    </main>
  )
}

export default App