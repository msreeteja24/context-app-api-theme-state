import "./App.css";
import ContentComponet from "./components/ContentComponet";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <ContentComponet></ContentComponet>
    </ThemeProvider>
  );
}

export default App;
