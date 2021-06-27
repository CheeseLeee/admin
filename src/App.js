
import './App.css';
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/public/PrivateRoute'
import router from './router/index'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            {
            router.map((item,index) => {
              return (
                item.auth ? 
                <PrivateRoute key={index} path={item.path} component={item.com}></PrivateRoute>
                :<Route key={index} path="/" component={item.com}></Route>
                
              )        
            })            
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
