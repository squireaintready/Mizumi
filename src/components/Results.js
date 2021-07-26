import React from 'react'
import Result from './Result'

function Results({results}) {
  return (
    <div>
      {results.map(result =>(
        <Result result={result}/>
      ))}
    </div>
  )
}

export default Results
