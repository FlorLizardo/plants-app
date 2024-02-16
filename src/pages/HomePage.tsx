import InputSearch from "../components/atomi/InputSearch"
import NavBar from "../components/organismo/NavBar"


const HomePage = () => {
   return (
    <>
    <NavBar />
    <div className='flex place-content-center mt-5'>
     <InputSearch />
    </div>
    </>
  )
}

export default HomePage