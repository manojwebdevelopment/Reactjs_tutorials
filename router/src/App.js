
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/Router_components/About';
import Contact from './Components/Router_components/Contact';
import Home from './Components/Router_components/Home';
import Demo from './Components/Router_components/Demo';
import User from './Components/User/User';
import Github from './Components/Router_components/Github';

function App() {

  // first way to create route

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:"about",
  //         element:<About/>
  //       },
  //       {
  //         path:"contact",
  //         element:<Contact/>
  //       },
  //       {
  //         path:"demo",
  //         element:<Demo/>
  //       }
  //     ]
  //   }
  // ])

  // second way to create route

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' element={<Github/>}/>

      <Route path='demo' element={<Demo/>}/>
      <Route path='user/:id' element={<User/>}/>
    </Route>
  )
)
  return (
   <>
<RouterProvider router={router}/>
   </>
  );
}

export default App;
