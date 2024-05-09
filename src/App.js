import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Kim from "./Kim";
import Test from "./Test";
import Main from "./Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    let [post,setPost] = useState('개추')
    let [ThumbsUP,setThumbsUP] = useState(0)

  return (
      <div className="App">
          <BrowserRouter>
          <Routes>
              {/* 공모페이지 */}
              {/* 나의 펀딩 현황 */}
              <Route path="/" element={< Main/>} />
              <Route path="/kim" element={< Kim/>} />
              <Route path="/Test" element={ < Test/>} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
