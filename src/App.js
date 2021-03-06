import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import Hero from "./components/Hero"
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  )
}

export default App
