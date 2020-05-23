import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [showPassword, setShowPassword] = useState (true);
  return (
    <div class="container">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={e => {
          setUsername (e.target.value);
        }}
      />
      {/*type="password" for passwords but we mutating it here depending on the event of the button */}
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        value={password}
        onChange={e => {
          setPassword (e.target.value);
        }}
      />
      {/* if the shoPassword is true then display show else display hide   */}

      <h2>{username}</h2>

      <h2>{showPassword ? password : '*'.repeat (password.length)}</h2>
      <button
        onClick={() => {
          setShowPassword (!showPassword);
        }}
      >
        Show/Hide password
      </button>
    </div>
  );
};

export default App;
