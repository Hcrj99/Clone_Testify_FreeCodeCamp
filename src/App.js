import './App.css';
import Testify from './components/Testify';

function App() {
  return (
    <div className="App">
      <section className='main__container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testify
          image = 'shawn'
          name = 'Shawn Wang'
          country = 'Singapore'
          work = 'Software Engineer'
          company = 'Amazon'
          testify = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testify 
          image = 'sarah' 
          name = 'Sarah Chima' 
          country = 'Nigeria' 
          work = 'Software Engineer' 
          company = 'ChatDesk' 
          testify = "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."/>
        <Testify 
          image = 'emma' 
          name = 'Emma Bostian' 
          country = 'Sweden' 
          work = 'Software Engineer' 
          company = 'Spotify' 
          testify = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>
      </section>
    </div>
  );
}

export default App;
