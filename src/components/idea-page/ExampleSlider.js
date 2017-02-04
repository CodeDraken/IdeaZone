import React from 'react';
import SliderRow from './SliderRow';

// Slider of examples on the idea page
const ExampleSlider = (props) => {
  
  let slideArray;
  let genSlides;
  let sliderHtml = '';
  
  // generate the HTML for slider if there are examples
  if (props.examples) {
    let examples = props.examples;
    let output = [];
    // 4 slides each row
    let spacing = 4;
    
    for (var i = 0; i < examples.length; i += spacing) {
      // create an array for rows [ [s,s,s,s], [s,s,s,s] ]
      output[output.length] = examples.slice(i, i + spacing);
    }
    
    slideArray = output;
    
    // create slide rows html
    genSlides = slideArray.map( ( slides, i ) => {
      // if it's first add active class
      let isFirst = i === 0 ? true : false;
      
      return (
        <SliderRow key={'slider-row' + i} isFirst={isFirst} slides={slides} />
      )
    });
    
  }
  
  // check if there are any examples
  if ( props.examples === undefined || props.examples.length < 1 ) {
    // no examples no slider
    sliderHtml = <h4 className="text-center">No one added an example show off yours here!</h4>;
  } else {
    // has examples add a slider
    sliderHtml = (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="Carousel" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                <li data-target="#Carousel" data-slide-to="1"></li>
                <li data-target="#Carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
              
              { genSlides }
                
              </div>
              <a data-slide="prev" href="#Carousel" className="left carousel-control">‹</a>
              <a data-slide="next" href="#Carousel" className="right carousel-control">›</a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-center">Examples <i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addModal" aria-hidden="true" title="Add an idea"></i></h2>
      {sliderHtml}
    </section>
  );

}

export default ExampleSlider;