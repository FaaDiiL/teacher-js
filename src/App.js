import { Button, Container, CssBaseline, FormControl, ListSubheader , Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'



function App() {
  let testArr = []


  function switchButtons(e){
    e.preventDefault()
    console.log(e.currentTarget.querySelector('[data]').innerText == 'Switch')
    let selectArr = [...e.currentTarget.querySelectorAll('[name]')]
    // e.currentTarget.querySelector('[data]') === 'switch'?
    // console.log('switch entered!')
    // :e.currentTarget.querySelector('[data]') === 'submit'?
    // console.log('submit entered!')
    // :null
    


      let myFormData = selectArr.reduce((prev, next) => {
        let test =  JSON.parse(next.value)
        testArr.push(test)
        // prev[next.name] = test
        

      //  let baseCur = prev
      //  let changeCur = next

    //   console.log(baseCur.value)
    //   console.log(changeCur)

      return prev
    }, {})
    console.log(testArr)
  }



  return (
    <div>
      <CssBaseline />
      <Container maxWidth='md'>
        <h1>CarSpect</h1>
        
        <form onSubmit={switchButtons}>   
        <input type='number' name='amount' />     
          <select name='select1'>
              <option value={JSON.stringify({sek: 1})}>SEK</option>
          </select>
  
          <select name='select2'>
            <option value={JSON.stringify({usd: 8.2})}>USD</option>
            <option value={JSON.stringify({eur: 10.2})}>EUR</option>
          </select>
          
          <button type='submit' data='switch'>Switch</button>
          <button type='submit' data='submit'>Convert</button>
        </form>
      </Container>
    </div>
  )
}

export default App
