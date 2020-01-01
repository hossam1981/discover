import React, { Component } from 'react';
import ReactDom from 'react-dom'
import './App.css';
import Messages from './components/Messages'
import AddNums from './components/AddNums'
import AddNumRef from './components/AddNumRef'
import AddressBook from './components/AddressBook'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import LifeCycleApp from './components/LifeCycleApp'
import MovieApp from './components/MovieApp'


class App extends Component {
  render() {
    return (
        <Router>
           
            <div>
              
                <ul>
                    <li>
                        <Link to ='/' >Home</Link>
                 </li>

                 <li>
                        <Link to ='/messages'>Messages</Link>
                        {/* <Link to ='/messages/:name'>Messages</Link> */}
                 </li>

                 <li>
                        <Link to ='/addnums'>AddNums</Link>
                 </li>

                 <li>
                        <Link to ='/LifeCycleApp'>Life Cycle App</Link>
                 </li>
                 
                 <li>
                        <Link to ='/MovieApp'>Movie App</Link>
                 </li>
              </ul>


           <Route path ='/' exact strict render={
                    ()=>{
                        return (<h1> Welcome to Home Page</h1>)
                    }
              } />
              {/* <Route path='/messages/:name' exact strict component={Messages} /> */}
            <Route path='/messages' exact strict render={
                () =>{
                    return <Messages />
                }
            } />
            
            <Route path='/addnums' exact strict render={
                () =>{
                    return <AddNums />
                }
            } />

           <Route path= '/lifecycleapp' exact strict component={LifeCycleApp} />

            <Route path= '/movieapp' exact strict component={MovieApp} />
            </div>
        </Router>
        
    );
  }
}
// add ReactDom in able to do it from this page directly


export default App;
