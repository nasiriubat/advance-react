import Button from "./components/Button"
import "./App.css"
import { FaMoneyBill } from "react-icons/fa";

function App() {
  const handleOnClick = () => {
    console.log("You clicked me!")
  }

  return (
    <main>
      <Button size="lg">Log in with Google</Button>
    </main>
  )
}

export default App
