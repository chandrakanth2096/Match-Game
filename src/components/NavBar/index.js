import './index.css'

const NavBar = props => {
  const {score, seconds} = props

  return (
    <nav className="time">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="scores">
        <p className="score">
          Score: <p className="count">{score}</p>
        </p>
        <div className="timer">
          <img
            className="clock"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="sec">{seconds} sec</p>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
