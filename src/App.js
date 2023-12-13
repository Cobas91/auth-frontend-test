
import './App.css';
import * as microsoftTeams from '@microsoft/teams-js';
import {useEffect} from "react";
function App() {
  useEffect(() => {
    let authTokenRequest = {
      successCallback: function(result) { console.log("Success: " + result); },
      failureCallback: function(error) { console.log("Error getting token: " + error); }
    };
    microsoftTeams.authentication.getAuthToken(authTokenRequest);
  }, []);



  return (
    <div className="App">
    </div>
  );
}

export default App;
