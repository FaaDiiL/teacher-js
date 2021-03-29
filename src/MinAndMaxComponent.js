import React, { useState } from 'react'
import CreateRandomNumber from './CreateRandomNumber'
import {useHistory} from 'react-router-dom'
    
export const MinAndMaxComponent = ({ setGeneratedNumber }) => {
     const [minRangeInpVal, setMinRangeInpVal] = useState('')
     const [maxRangeInpVal, setMaxRangeInpVal] = useState('')
     const history = useHistory();
     
     // const CreateRandomNumber = (min, max) => {
     //   min = Math.ceil(min)
     //   max = Math.floor(max)
     //   return Math.floor(Math.random() * (max - min + 1) + min)
     // }
   
     // console.log(`RandomNum: %c${CreateRandomNumber(1,10)}`, "color:green")
     const handleSubmit = (e) => {
       e.preventDefault()
       setGeneratedNumber(CreateRandomNumber(minRangeInpVal, maxRangeInpVal))
       history.push('/guess-number')
     }
   
     const handleChange = (e) => {
       switch (e.target.name) {
         case 'minRangeInpEl':
           setMinRangeInpVal(parseInt(e.target.value))
           break
         case 'maxRangeInpEl':
           setMaxRangeInpVal(parseInt(e.target.value))
           break
   
         default:
           break
       }
     }
   
     return (
       <form onSubmit={handleSubmit}>
         <label>
           Minimum: <input onChange={handleChange} name='minRangeInpEl' />{' '}
         </label>
         <label>
           Maximum: <input onChange={handleChange} name='maxRangeInpEl' />{' '}
         </label>
         <button>Add</button>
       </form>
     )
   }

   export default MinAndMaxComponent