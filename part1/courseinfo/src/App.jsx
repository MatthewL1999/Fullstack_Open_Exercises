const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
    <Part name={props.contents[0].name} exercise={props.contents[0].exercise}/>
    <Part name={props.contents[1].name} exercise={props.contents[1].exercise}/>
    <Part name={props.contents[2].name} exercise={props.contents[2].exercise}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Total number of exercises: {props.contents[0].exercise +
                                   props.contents[1].exercise + 
                                   props.contents[2].exercise}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const contents = [
    {name: 'Fundamentals of React', exercise: 10},
    {name: 'Using props to pass data', exercise: 7},
    {name: 'State of a component', exercise: 14},
  ]

  return (
    <>
      <Header course={course} />
      <Content contents={contents} />
      <Total contents={contents} />
    </>
  )
}
export default App