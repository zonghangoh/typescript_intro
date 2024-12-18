import { useState } from 'react'
import { useUser } from './hooks/useUser';
import UserProfileCard from './components/UserProfileCard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [searchedUserName, setSearchedUserName] = useState('');
  const user = useUser(searchedUserName);

  return (
    <div style={{ width: "100vw" }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button onClick={()=>setSearchedUserName(inputValue.trim())}>Search</button>
        </div>

        {user  ? <UserProfileCard user={user} /> : <Placeholder />}
      </div>
    </div>
  )
}

const Placeholder = () => {
  return <div>
    <p>Searched User Details Will Display Here.</p>
    <p>Note: GitHub API is rate limited per IP address.</p>
    </div>;
}

export default App
