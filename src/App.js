import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Feed from "./components/feed/Feed";
import Widget from "./components/widget/Widget";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default App;
