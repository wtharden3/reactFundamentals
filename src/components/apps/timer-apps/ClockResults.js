import ClockApp from "./ClockApp"

const ClockResults = (props) => {
  return(
    <div>
      <h3>Location: {props.location}</h3>
      <p>{props.time}</p>
    </div>
  )
}

export default ClockResults;