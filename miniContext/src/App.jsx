import './App.css'
import UserContexProvider from './contex/UserContextProvider'

function App() {

  return (
    <UserContexProvider>
      <h1>Context API</h1>
    </UserContexProvider>
  )
}

export default App
