import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import TaskSection from './components/TaskSection';

function App() {

  return (
    <div className='bg-[#191D26] font-[Inter] text-white'>
      <Nav />
      <div className='flex justify-center pb-[40px] pt-10 md:mt-[50px]'>
        <Hero/>
      </div>
      <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-3 md:px-9 md:py-16 w-[80%] mx-auto'>
        <TaskSection/>
      </div>
      <div>
        <Footer/>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
