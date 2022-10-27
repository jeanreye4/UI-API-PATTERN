import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Top from './Top';
import Bottom from './Bottom';

function App() {

  let url = 'https://amiiboapi.com/api/amiibo/?character=mario'
    
  fetch(url)
    .then((res) => {
      return res.json()
    }).then((mario) => {
      console.log(mario)
    })
  
  
  return (
    
      
    <div className="body">
      
     <Top />
     
     <Content />   

      <Bottom />
      
      </div>
      )
}
  
export default App;
