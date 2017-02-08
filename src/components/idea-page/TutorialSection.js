import React from 'react';

// Lists of tutorials on the idea page. Displays links in 3 cols
const TutorialSection = (props) => {
  
  // cols for sorting, and html
  let col1 = [],
      col2 = [],
      col3 = [],
      col1Html,
      col2Html,
      col3Html;
  
  if (props.tutorials) {
      let tutorials = props.tutorials;
      // Split all the tutorials into 3 arrays one for each col then add to smallest col array
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

  if (props.tutorials === undefined || props.tutorials.length < 1) {
    return (
      <section>
        <h2 className="text-center">Tutorials & Links <i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addResourceModal" aria-hidden="true" title="Add an idea"></i></h2>
        <h4 className="text-center">Looks like no one has added a tutorial so I guess you're on your own...</h4>
      </section>
    );
  } else {
    return (
      <section>
        <h2 className="text-center">Tutorials & Links <i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addResourceModal" aria-hidden="true" title="Add an idea"></i></h2>
        <div className="row text-center">
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
  
}

export default TutorialSection;