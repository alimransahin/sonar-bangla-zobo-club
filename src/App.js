import logo from './logo.svg';
import Header from './Components/Header/Header';
import Activities from './Components/Activities/Activities';
import User from './Components/User/User';
import Break from './Components/Break/Break';


function App() {
  return (
    <div className='row'>
      <div className="col-md-9 col-sm-12 bg-light">
        <div className="m-5">
          <Header></Header>
          <Activities></Activities>
        </div>
      </div>
      <div className="col-md-3 col-sm-12 my-2">
        <User></User>
        <Break></Break>
      </div>
      
    </div>
  );
}

export default App;
