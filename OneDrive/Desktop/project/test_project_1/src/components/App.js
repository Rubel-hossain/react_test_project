import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Posts from "./posts";
import "../assets/scss/global.scss";
function App() {
  return (
    <div className="App">
        <Header/>
        <Posts/>
    </div>
  );
}

export default App;
