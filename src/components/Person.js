import React from 'react';
import Testify from './Testify';

function Person() {
    const persons = [
        {
            image : 'shawn',
            name : 'Shawn Wang',
            country : 'Singapore',
            work : 'Software Engineer',
            company : 'Amazon',
            testify : "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        },
        {
            image : 'sarah', 
            name : 'Sarah Chima', 
            country : 'Nigeria', 
            work : 'Software Engineer', 
            company : 'ChatDesk', 
            testify : "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        },
        {
            image : 'emma',
            name : 'Emma Bostian', 
            country : 'Sweden', 
            work : 'Software Engineer', 
            company :'Spotify', 
            testify : "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." 
        }
      ]; 
  return (
    <div className='person__container'>
      {persons.map((personList) => 
      <Testify 
        image = {personList.image} 
        name = {personList.name}
        country = {personList.country}
        company = {personList.company}
        testify = {personList.testify}  
      /> 
      )}
    </div>
  );
};

export default Person;