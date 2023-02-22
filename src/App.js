import Count from "./components/Count";
import ContextProvider from "./context/context";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ContextProvider>
        <h1>Hello CodeSandbox</h1>
        <Count />
      </ContextProvider>
    </div>
  );
}
