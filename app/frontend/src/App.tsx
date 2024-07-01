import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { LandingPage } from "./pages/landing"

const App = () => {
  return (
    <div className="mx-auto">
      <LandingPage />
    </div>
  )
}

export default App
