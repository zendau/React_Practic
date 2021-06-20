import './App.css';
import Card from "./card"

function App() {
  return (
    <div className="App">
      <Card color="red">test</Card>
      <Card color="blue"><h1>Test tag</h1></Card>
      <Card color="green"> <small>Simple text</small> </Card>
    </div>
  );
}

export default App;
