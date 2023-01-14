import './App.css'
import ChatContainer from './components/ChatContainer/ChatContainer'
import Form from './components/form/Form'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/sablogo.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/chatgptlogo.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>ChatGPT3</h1>
      <ChatContainer />
      <Form />
    </div>
  )
}

export default App
