// modal for adding examples / tutorials to an idea

import React from 'react';

/*global $*/

const ModalResource = (props) => {
  // no refs on functional components
  let exampleTitle, exampleLink, exampleImg, tutorialTitle, tutorialLink;
  let ideaID = props.ideaID;
  
  const dataIsValid = () => {
    if( (exampleTitle.value.length > 0 && exampleLink.value.length > 0) || (tutorialTitle.value.length > 0 && tutorialLink.value.length > 0) ) {
      return true;
    } else {
      return false;
    }
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if( dataIsValid() ) {
      $('#addResourceModal').modal('hide');
      props.handleAddResource( ideaID, exampleTitle.value, exampleLink.value, exampleImg.value, tutorialTitle.value, tutorialLink.value );
    }
  }
  
  return (
    <div className="modal fade" id="addResourceModal" tabIndex="-1" role="dialog" aria-labelledby="addResourceModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="addResourceModalLabel">Add a Tutorial or Example</h4>
            <p>Add an example, a tutorial, or both.</p>
          </div>
          
          <div className="modal-body">
  
            <form>
              <div className="form-group">
                <label htmlFor="modalFormTitleExample">Add an Example</label>
                <input ref={ el => exampleTitle = el } type="text" className="form-control" id="modalFormTitleExample" placeholder="Enter name of the example" />
              </div>
              <div className="form-group">
                <label htmlFor="modalFormLinkExample">Link / Url to the Example</label>
                <input ref={ el => exampleLink = el } type="text" className="form-control" id="modalFormLinkExample" placeholder="Link to the example" />
              </div>
              <div className="form-group">
                <label htmlFor="modalFormImgExample">Link / Url to an image of the Example</label>
                <input ref={ el => exampleImg = el } type="text" className="form-control" id="modalFormImgExample" placeholder="Link to an image of the example" />
              </div>
            </form>
            
            <hr />
            
            <form>
              <div className="form-group">
                <label htmlFor="modalFormTitleTut">Add a Tutorial</label>
                <input ref={ el => tutorialTitle = el } type="text" className="form-control" id="modalFormTitleTut" placeholder="Enter the title of the tutorial" />
              </div>
              <div className="form-group">
                <label htmlFor="modalFormLinkTut">Link / Url to the Tutorial</label>
                <input ref={ el => tutorialLink = el } type="text" className="form-control" id="modalFormLinkTut" placeholder="Link to the tutorial" />
              </div>
            </form>
  
          </div>
          <div className="modal-footer">
            <button onClick={onSubmit} type="button" className="btn btn-primary">Add Resource</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ModalResource;