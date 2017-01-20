import React from 'react';

// a row with slides for the example slider
const SliderRow = (props) => {
  // for each slide passed in return slide html
  const slides = props.slides.map( ( slide, i ) => {
      return (
        <div key={`${slide.title}-${i}-${(Math.random() * 1000)}`} className="col-xs-6 col-sm-3">
          <a href={slide.url} className="thumbnail">
          <img className="img-responsive" src={slide.imageUrl} alt={slide.title}/>
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