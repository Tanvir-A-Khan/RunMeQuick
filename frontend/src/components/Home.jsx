
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  
  return (
    <div>
        <h1>Welcome to the RunMeQuick app</h1>
        <p>You can compile and run your preffered codes here. In order to use this app you have to register yourself first. If you are already a user just hit the login button and you are good to go</p>

        <Link to='/login' className='btn'> Login Here </Link>
        <Link to='/registration' className='btn'> Register Here</Link>
    </div>
  )
}

export default Home
