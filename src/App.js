
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout/Checkout'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Payment from './components/Payment/Payment'
import { useStateValue } from './components/Store/StateProvider'
import { auth } from './firebase'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders/Orders'

const promise = loadStripe('pk_test_51HxiMyCy9jNP5hmgc3wF21pDZX9mckIJ9SsWihVQKk0xdZg3aX6MkNOcrreeCuV32Zx6mrYAGJaWmSZyzdj5F4oS00bC3NAl74')

function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    // will only run once when th app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser)

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment" >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/" >
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
