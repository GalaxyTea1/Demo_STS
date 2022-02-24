import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/LoginForm/Login';

export const history = createBrowserHistory();

function App() {
    const { authList } = useSelector((state) => state.authReducer);

    return (
        <div className='App'>
            <Routes history={history}>
                <Route path='/login' element={<Login />} />
                {/* <Route path='/register' element={<Register />} />
                    <Route path='/home' element={authList.token ? <HomePage /> : <Login />} />
                    <Route path='/back' element={<Back />} /> */}
                <Route path='/' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
