import React from 'react';

const ExampleSlider = (props) => {
  
  // let exampleHtml;
  // let exampleRows = [];
  // let exampleJsx;
  
  // // generate the HTML for slider
  // if (props.examples) {
  //   let examples = props.examples;
  //   let exampleRow = [];
    
  //   for ( var i=0; i<examples.length; i++ ) {
  //     if ( i % 4 === 0 ) {
  //       exampleRows.push(exampleRow);
  //       exampleRow = [];
  //     } else {
  //       exampleRow.push(examples[i]);
  //     }
  //   }
    
  //   for ( var j=0; j<exampleRows.length; j++ ) {
  //     console.log('example rows ', exampleRows);
  //     console.log('example rows J', exampleRows[j])
  //     exampleJsx += (
  //       <div className="item active">
  //         <div className="row">
          
  //           {
            
  //             exampleRows[j].map( ( example, i ) => {
  //               return (
  //                 <div className="col-xs-6 col-sm-3">
  //                   <a href={example.url} className="thumbnail">
  //                   <img className="img-responsive" src={example.imageUrl} alt={example.title}/>
  //                   </a>
  //                 </div>
  //               )
  //             })
  //           }
            
  //         </div>
  //       </div>
  //     )
  //     console.log('example jsx', exampleJsx)
  //   }
    
  // }

  return (
    <section>
      <h2 className="text-center">Examples <i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addIdeaModal" aria-hidden="true" title="Add an idea"></i></h2>
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
              
                
                
              </div>
              <a data-slide="prev" href="#Carousel" className="left carousel-control">‹</a>
              <a data-slide="next" href="#Carousel" className="right carousel-control">›</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default ExampleSlider;


// <div className="item active">
//   <div className="row">
  
//     <div className="col-xs-6 col-sm-3">
//       <a href="#" className="thumbnail">
//       <img className="img-responsive" src='' alt="Image"/>
//       </a>
//     </div>
    
//     <div className="col-xs-6 col-sm-3">
//       <a href="#" className="thumbnail">
//       <img className="img-responsive" src="https://media3.giphy.com/media/kMxR9EIfVMgmY/200_s.gif" alt="Image"/>
//       </a>
//     </div>
    
//     <div className="col-xs-6 col-sm-3">
//       <a href="#" className="thumbnail">
//       <img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg" alt="Image"/>
//       </a>
//     </div>
    
//     <div className="col-xs-6 col-sm-3">
//       <a href="#" className="thumbnail">
//       <img className="img-responsive" src="http://dis.resized.images.s3.amazonaws.com/540x540/86249.jpeg" alt="Image"/>
//       </a>
//     </div>
    
//   </div>
// </div>