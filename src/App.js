import logo from './logo.svg';
import Header from './Components/Header/Header';
import Activities from './Components/Activities/Activities';


function App() {
  return (
    <div className='row'>
      <div className="col-md-9 col-sm-12">
        <div className="m-5">
          <Header></Header>
          <Activities></Activities>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <h1>hgdfk</h1>
      </div>
      
    </div>
  );
}

export default App;
