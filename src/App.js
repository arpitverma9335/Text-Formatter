import './App.css';
import Header from './components/Header';
import TextBox from './components/TextBox';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  let menuObjs = [{
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about'
  }]
  return (
    <>
      <Header title='Text Formatter' menu={menuObjs}></Header>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <div className='px-10'>
              <TextBox/>
            </div>
          }></Route>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
