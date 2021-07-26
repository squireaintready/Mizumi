import Result from './Result'

function Results({results}) {
  return (
    <div>
      {results.map(result =>(
        <Result key={result.name} result={result}/>
      ))}
    </div>
  )
}

export default Results
