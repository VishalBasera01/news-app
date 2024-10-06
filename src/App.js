import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import News from "./Components/News";
function App() {
  return (
    <Provider store={store}>
      <News />
    </Provider>
  );
}

export default App;
