import Navbar from './Navbar';
import AddTask from './AddTask';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Main />
        <AddTask />
      {/*<Create/>*/}
      </header>
    </div>
  );
}

export default App;
