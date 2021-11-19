import './App.css';
import { BrowserRouter, Route, Routes, Navigate, NavLink, Link } from 'react-router-dom';
import Color from './Color';
import React, {useState} from 'react';
import ColorForm from './ColorForm';

// react-router-dom v6 docs
// https://reactrouter.com/docs/en/v6/getting-started/overview

function App(props) {
  const [ colorsArr, setColorsArr ] = useState(props.colorList);
  
  const addColor = (color) => { // pass into a form
    setColorsArr(colors => [...colors, color]);
  };
  //https://github.com/mcodemax/react-forms/tree/master/src
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* replaces <Switch> in v6*/ }
          <Route exact={"true"} path="/color" element={
            <>
              <div className="App-home">
                <div className="App-top">
                  <h2>Welcome to the Color Factory.</h2>
                  <NavLink exact={"true"} to={`/color/add`}>
                    <h2>Add A Color</h2>
                  </NavLink>
                </div>
                <div className="App-bottom">
                  <h2>Please select a color</h2>
                    <nav>
                    {colorsArr.map( color => { 
                      return (                    
                          <NavLink exact={"true"} to={`/color/${color}`}>
                            <h2>{`${color}`}</h2>
                          </NavLink>
                      )
                    })}
                    </nav>
                </div>
              </div>
            </>
          }/>
          <Route path="/color/:color" element={
            <>
            <Color/>
            </>//  render a color here
          }/>
          <Route path="/color/add" element={
            <ColorForm addColor={addColor}/>
            //  render a color here
          }/>
          <Route path="/" element={<Navigate replace to="/color" />} />
          <Route path="*" element={<Navigate replace to="/color" />} />
          {/*
            When no other route matches the URL, you can render a "not found"
            route using path="*". This route will match any URL, but
            will have the weakest precedence so the router will only pick it
            if no other routes match.
          */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

App.defaultProps = {
  colorList: [
    'blue', 'red', 'green'
  ]
}

//  make element take up the screen
//  {
//   height: '100vh',
//   min-height : '100vh'
// }
