import { Switch, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Auth from './pages/Auth'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>
    </>
  );
}

export default App;
