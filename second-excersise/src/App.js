import "./styles.scss";
import Accordian from "./Accordian";
import accordianData from "./accordianData";
export default function App() {
  return (
    <div className="App">
      <Accordian accordianData={accordianData} />
    </div>
  );
}
