
import './App.css';
import microsoftTeams from '@microsoft/teams-js';
function App() {
  microsoftTeams.app.initialize().then(()=>{
    microsoftTeams.authentication.getAuthToken({
      url: window.location.origin + "/authenticate",
      width: 600,
      height: 535,
      successCallback: function (result) {
        // Use result.accessToken to access the user
      },
      failureCallback: function (reason) {
        alert(reason)
      }
    }).then(()=>{
      microsoftTeams.app.notifySuccess()
    })
  })


  return (
    <div className="App">
    </div>
  );
}

export default App;
