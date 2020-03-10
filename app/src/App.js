import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import Navbar from './components/Navbar.js';
// import MainDashboard from './components/DeviceManager';
import Test from './components/Test';
// import Footer from './components/Footer'
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { THEME } from './constants/theme';
import {  ThemeProvider } from '@material-ui/core/styles';


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
        <DragDropContextProvider backend={HTML5Backend}>
          <Test />
          {/* <Navbar /> */}
          {/* <MainDashboard /> */}
          {/* <Footer /> */}
        </DragDropContextProvider>
        </Provider>
      </ThemeProvider>
      
    );
  }
}

export default App;
