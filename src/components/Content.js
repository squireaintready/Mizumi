import React from 'react'
import Form from './Form'
import Results from './Results'

let results = [
  {
    name:'Servers',
    value:1,
  },
  {
    name:'Bus boys',
    value:0,
  },
  {
    name:'Bus girls',
    value:0,
  },
  {
    name:'Return',
    value:0
  }
]


function Content() {
  return (
    <div>
      <Form/>
      {results[0].value > 0
      ? (
        <Results results={results}/>
      ): null}
      
    </div>
  )
}

export default Content
