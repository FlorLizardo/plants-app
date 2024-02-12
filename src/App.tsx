import './App.css'
import NavBar from './components/organismo/NavBar'
import InputSearch from './components/atomi/InputSearch'
import './index.css'

function App() {
 

  return (
    <>
     <NavBar />
    <div className='flex place-content-center'>
     <InputSearch />
    </div>
    </>
  )
}

export default App
