import routes from './routes';
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom';
import './App.less';


function App() {

   console.log('routes', routes)

   return (
      <Router>
         <div className="App">
            <Switch>
               {routes.map((route, idx) => {
                  return (
                     <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                           <route.component {...props} />
                        )} />
                  )
               })}
               {/* <Redirect from="/" to="/dashboard" /> */}
            </Switch>
         </div>
      </Router>
   );
}

export default App;
