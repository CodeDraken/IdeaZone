import React from 'react';

// a row with slides for the example slider
const SliderRow = (props) => {
  const imageUrlIsValid = (url) => {
    if ( url && url.length > 0) {
      return true;
    } else {return false;}
  }
  
  // for each slide passed in return slide html
  const slides = props.slides.map( ( slide, i ) => {
      const image = imageUrlIsValid(slide.imageUrl) ?
        <img className="carousel__img" src={slide.imageUrl} alt={slide.title}/> :
        <div className="carousel__img--none">
          <h4 className="text-center">{slide.title}</h4>
          <h5 className="text-center">missing image :(</h5>
        </div>;
        
      return (
        <div key={`${slide.title}-${i}-${(Math.random() * 1000)}`} className="col-xs-6 col-sm-3">
          <a href={slide.url} target="_blank" className="thumbnail">
          {image}
          </a>
        </div>
      )
    });
  
  // if it's the first row add active class
  let isFirst = props.isFirst === true ? 'active' : '';
  
  return (
    <div className={"item " + isFirst }>
      <div className="row">
      
        { slides }
        
      </div>
    </div>
  )
}

export default SliderRow;