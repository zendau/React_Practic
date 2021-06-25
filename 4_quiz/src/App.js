import React from "react"
import Layout from "./hoc/Layout/Layout"
import Quiz from "./containers/Quiz/theQuiz"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
    <Layout>
       <Quiz></Quiz>
    </Layout>
   )
  }
}


export default App;
