import Student from './Student.jsx';

function App() {
    return (
    <>
      <Student name= "Victoire" age = {30} isStudent={true} />
      <Student name= "Ushindi" age = {20} isStudent={false} />
      <Student name= "Ushindi" age = {18} isStudent={true} />
      <Student/>
    </>
  );
}

export default App
