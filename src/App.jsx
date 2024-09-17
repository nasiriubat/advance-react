import Button from "./components/Button"
import "./App.css"
import { FaMoneyBill } from "react-icons/fa";

function App() {
  const handleOnClick = () => {
    console.log("You clicked me!")
  }

  return (
    <div className="main">
      <Button onClick={handleOnClick}>
        <FaMoneyBill />
        Buy Now
      </Button>
    </div>
  )
}

export default App
