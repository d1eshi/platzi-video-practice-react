// create a funtion component of react
import '../assets/styles/App.scss';

export default function Test({name}) {
  return (
    <div>
      <h1>Test</h1>
      <p>Hey {name}</p>
    </div>
  )
}