import UserGreeting from './UserGreeting.jsx';

function App() {
    return (
    <>
      <UserGreeting isLoggedIn = {false} username="Victoire" />
      <UserGreeting/>
    </>
  );
}

export default App
