import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br></br><br></br>
        <div className='body_here'style={{textAlign: "center"}}>
          <h2>Inspire. Create. Transform.</h2>
          <h1>we are on a mission to transform your ideas into powerful digital solutions.</h1>
          <p>Our goal is simple - to help your business succeed by offering comprehensive solutions tailored to your unique needs.</p>
        </div>
        <div className='connect'>
            <a className='connect_button' href='https://tally.so/r/n99AjY' target='_blank'>
              Connect
            </a>
        </div>
      
    </div>
  );
  
}
export default App;
