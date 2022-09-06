// import logo from './logo.svg';
import './App.css';
// import First from './First';
// import Second from './Second';
import Myroutes from './Myroutes';
// import { combineReducers, createStore } from 'redux';
// import counterReducer from './ReduxExample/counterReducer';
import { Provider } from 'react-redux';
// import gameReducer from './ReduxExample/gameReducer';
// import store from './ReduxExample/store';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
import {store} from './components/reducer/store'



function App() {
  // const myPersistor = persistStore(store)


  // const store = createStore(counterReducer)
  // const store = createStore(gameReducer)

  // const rootreducer = combineReducers({
  //   counterStore: counterReducer,
  //   gameStore: gameReducer
  // })

  // const store = createStore(rootreducer)



  return (
    <Provider store={store}>
      {/* <PersistGate persistor={myPersistor}> */}
        <div className="App">
          <Myroutes />
        </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
