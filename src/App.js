import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import News from "./components/News";
import InfiniteNews from "./components/InfiniteNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// Class based component
const App = ()=> {
  const name = "Sandeep";

  // Sandeep03 API Key
  // ApiKey = "292f81ee74ee4bcea7b1d575e9e579bb"

  // Test1 dummy API key
  // ApiKey = "38c6f00df546496094172867a9d8df5c"

  // bimej60765@ezgiant.com - API Key
  // ApiKey = "9b87989eb18d4030879ba83490467ec9";

  const ApiKey = process.env.REACT_APP_API_KEY


  const[progress , setProgress ] = useState(0);

  // render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height = "5px"
            // onLoaderFinished={() => setProgress(0)}
          />
          Hello {name}, welcome to news App
          <Routes>
            {/* Page with infinite Scrolling */}
            <Route
              path="/"
              element={
                <InfiniteNews
                  setProgress = {setProgress} 
                  key="science"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="science"
                />
              }
            />

            {/* Page with </Prev> <Next/> button */}
            <Route
              path="/pagewise"
              element={
                <InfiniteNews 
                  key="pageWise"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="business"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="entertainment"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="general"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="health"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="science"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="sports"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <InfiniteNews setProgress = {setProgress} 
                  key="technology"
                  pageSize={9}
                  apiKey={ApiKey}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  // }
}

export default App;