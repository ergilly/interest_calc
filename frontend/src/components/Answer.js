import React from 'react'
import './answer.css'

const Answer = (props) => {

  let answer = '£' + props.answer.toLocaleString()

  return(
    <div id='answer' className="ui big label">
      <i id='money-icon'className="money bill alternate outline icon"></i>
      <div className='header'>{answer}</div>
    </div>
  )

}

export default Answer
