import React from 'react';

const TutorialSection = (props) => {
  
    //console.log('tutorial props ', props.tutorials);
    
    let col1 = [];
    let col2 = [];
    let col3 = [];
    
    let col1Html;
    let col2Html;
    let col3Html;
    
    if (props.tutorials) {
        var tutorials = props.tutorials;
        // Split all the tutorials into 3 arrays one for each col
        for (var i=0; i<tutorials.length; i++) {
          
          if ( col1.length <= col2.length && col1.length <= col3.length ) {
            // col1 is smallest
            col1.push(tutorials[i]);
          } else if( col2.length <= col1.length && col2.length <= col3.length ) {
            // col2 is smallest
            col2.push(tutorials[i]);
          } else if( col3.length <= col1.length && col3.length <= col2.length ) {
            // col3 is smallest
            col3.push(tutorials[i]);
          }
          
        }
        
        // generate the HTML from each col array
        col1Html = col1.map( ( tutorial, i ) => {
          return (
            <li key={'col1-' + i}><a href={tutorial.url}>{tutorial.text}</a></li>
          )
        });
        
        col2Html = col2.map( ( tutorial, i ) => {
          return (
            <li key={'col2-' + i}><a href={tutorial.url}>{tutorial.text}</a></li>
          )
        });
        
        col3Html = col3.map( ( tutorial, i ) => {
          return (
            <li key={'col3-' + i}><a href={tutorial.url}>{tutorial.text}</a></li>
          )
        });
    }
  
    return (
      <section>
        <h2 className="text-center">Tutorials & Links <i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addIdeaModal" aria-hidden="true" title="Add an idea"></i></h2>
        <div className="row">
        
        {props.tutorials === undefined || props.tutorials.length < 1 ? <h4 className="text-center">Looks like no one has added a tutorial! :(</h4> : undefined}
  
          <div className="col-xs-6 col-sm-4">
            <ul className="list-unstyled">
              {col1Html}
            </ul>
          </div>
  
          <div className="col-xs-6 col-sm-4">
            <ul className="list-unstyled">
              {col2Html}
            </ul>
          </div>
  
          <div className="col-xs-6 col-sm-4">
            <ul className="list-unstyled">
              {col3Html}
            </ul>
          </div>
  
        </div>
  
      </section>
    );
}

export default TutorialSection;


// <li><a href="#">Pomodoro tutorial</a></li>
// <li><a href="#">How to make a pomodoro clock</a></li>
// <li><a href="#">Pomodoro Clock Wikipedia</a></li>
// <li><a href="#">The Pomodoro Technique</a></li>
// <li><a href="#">Lorem Pomodoro Ipsum</a></li>