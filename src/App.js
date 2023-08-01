import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import { HookCounterTwo } from './components/HookCounterTwo';
import { HookCounterThree } from './components/HookCounterThree';
import { HookCounterFour } from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import { HookCounterOne } from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import { HookMouse } from './components/HookMouse';
import { MouseContainer } from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import { IntervalHookCounter } from './components/IntervalHookCounter';
import { DataFetching } from './components/DataFetching';
import { ComponentC } from './components/ComponentC';
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import React,{useReducer} from 'react';
import { CounterOne } from './components/CounterOne';
import { CounterTwo } from './components/CounterTwo';
import { CounterThree } from './components/CounterThree';
import { DataFetchingOne } from './components/DataFetchingOne';
import { DataFetchingTwo } from './components/DataFetchingTwo';
export const CountContext=React.createContext()
export const UserContext=React.createContext()
export const CompanyContext=React.createContext()

// const initialState=0;
// const reducer=(state,action)=>{
//   switch(action){
//     case 'increment':
//       return state+1;
//     case 'decrement':
//       return state-1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }

function App() {
  // const [count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/>
      <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={'sanju'}>
      <CompanyContext.Provider value='CGG'>
      <ComponentC/>
      </CompanyContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
    // </CountContext.Provider>
  );
}

export default App;
