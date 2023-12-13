
import './App.css';
import { app } from '@microsoft/teams-js';
function App() {
  app.initialize().then(result =>{
    console.log(app.getContext())
  })
  return (
    <div className="App">
    </div>
  );
}

export default App;
