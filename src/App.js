import Header from "./component/Header";
import { PostContext } from "./contexts/Context";
import { useReducer } from "react";
import { INITIAL_STATE, PostReducer } from "./contexts/Reducers";
import { Outlet } from "react-router-dom";


function App() {
  const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        
        <Outlet />
       
      </div>
    </PostContext.Provider>
  );
}

export default App
