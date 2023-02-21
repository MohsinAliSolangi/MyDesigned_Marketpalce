import { Brand,  Navbar } from './componant';
import { Blog, Footer,Header,  WhatGPT3} from './containers';
import './App.css';



const App = () => {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Blog/>
      <Footer/> 
    </div>
  )


  
}

export default App