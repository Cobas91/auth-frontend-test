
import './App.css';
import * as microsoftTeams from '@microsoft/teams-js';
import {useEffect} from "react";
function App() {
  useEffect(() => {
    microsoftTeams.app.initialize().then(()=>{
      let authTokenRequest = {
        successCallback: function(result) { alert("Success: " + result); },
        failureCallback: function(error) { alert("Error getting token: " + error); }
      };
      microsoftTeams.authentication.getAuthToken(authTokenRequest);
    })

  }, []);



  return (
    <div className="App">
    </div>
  );
}

export default App;
