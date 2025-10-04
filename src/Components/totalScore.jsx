import  '../styles/totalScore.css'

function totalScore({score}) {
  return (
 
       <div className="total-Score">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>

  )
}

export default totalScore
