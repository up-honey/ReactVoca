
import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWords';
import CreateDay from './component/CreateDay';
import EmptyPage from './component/EmptyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          
            <Route path="/"  exact element={ <DayList /> }></Route>
            <Route path='/day/:day' element={ <Day /> }></Route>
            <Route path='/create_word' element={ <CreateWord /> }></Route>
            <Route path='/create_day' element={ <CreateDay /> }></Route>
            <Route path="/*"element={ <EmptyPage /> }></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
