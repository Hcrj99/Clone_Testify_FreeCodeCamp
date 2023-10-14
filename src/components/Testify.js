import React from 'react';
import '../Styles/Testify.css'

function Testify(){
  return (
    <section className='container__testify'>
      <img className='container__testify-image' src={require('../images/testify_emma.png')} alt='Photogaphy' />
      <div className='container__testify-text'>
        <p className='testify-text__title'>Emma Bostian in Sweden</p>
        <p className='testify-text__position'>Software Engineer at Spotify</p>
        <p className='testify-text__testify'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
      </div>
    </section>
  );
}

export default Testify;