import React from 'react';
import '../Styles/Testify.css'

function Testify(props){
  return (
    <section className='container__testify'>
      <img className='container__testify-image' src={require(`../images/testify_${props.image}.png`)} alt='Photogaphy' />
      <div className='container__testify-text'>
        <p className='testify-text__title'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='testify-text__position'>
          {props.work} at <strong>{props.company}</strong>
        </p>
        <p className='testify-text__testify'>"{props.testify}"</p>
      </div>
    </section>
  );
}

export default Testify;