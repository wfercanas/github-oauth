import { useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState();

  if (accessToken) {
    return (
      <div>
        <h3>Logged In</h3>
        <p>
          <a href="?action=repos">View Repos</a>
        </p>
        <p>
          <a href="?action=logout">Log Out</a>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3>Not Logged In</h3>
      <p>
        <a href="?action=login">Log In</a>
      </p>
    </div>
  );
}

export default App;
