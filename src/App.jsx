import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import AdminNavbar from './admincomponents/adminhomepage/AdminNavbar';
import AdminPage from './admincomponents/adminhomepage/AdminPage';
import ViewItems from './admincomponents/viewitems/ViewItems';
import ViewTemplates from './admincomponents/viewtemplates/ViewTemplates';
import ViewModules from './admincomponents/viewmodules/ViewModules';
import CreateItem from './admincomponents/createitem/CreateItem';
import CreateTemplate from './admincomponents/createtemplate/CreateTemplate';
import CreateModule from './admincomponents/createmodule/CreateModule';
import Login from './loginpage/Login';
import SignUp from './Register/SignUp';
import User from './User-Component/User';
import UserTemplate from './User-Component/Usertemplates';
import UserItem from './User-Component/UserItem';
import DeleteItem from './admincomponents/deleteitems/DeleteItem';
import DeleteTemplate from './admincomponents/deletetemplate/DeleteTemplate';
import DeleteModule from './admincomponents/deletemodule/DeleteModule';
import UpdateItem from './admincomponents/updateitem/UpdateItem';
import UpdateTemplate from './admincomponents/updatetemplate/UpdateTemplate';
import UpdateModule from './admincomponents/updatemodule/UpdateModule';
import ChatWithUs from './admincomponents/Chat/ChatWithUs';

function App() {
  const loc=useLocation();
  console.log(loc);
  return (
    <div className="app">
    <Header/>
      <Routes>
        <Route path='/' element={<AdminPage/>} />
        {/* <Route index element={<Login/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/adminnavbar" element={<AdminNavbar />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/viewtemplates" element={<ViewTemplates/>} />
        <Route path="/viewmodules" element={<ViewModules />} />
        <Route path="/createitem" element={<CreateItem/>}/>
        <Route path="/createtemplate" element={<CreateTemplate/>} />
        <Route path="/createmodule" element={<CreateModule/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/userTemplate" element={<UserTemplate/>} />
        <Route path="/userItem" element={<UserItem/>} />
        <Route path="deleteitem" element={<DeleteItem/>} />
        <Route path="deletetemplate" element={<DeleteTemplate/>} />
        <Route path="deletemodule" element={<DeleteModule/>} />
        <Route path="updateitem"  element={<UpdateItem/>} />
        <Route path="updatetemplate" element={<UpdateTemplate/>} />
        <Route path="updatemodule" element={<UpdateModule/>} />  
        <Route path="/Chat" element={<ChatWithUs/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
