import React, {Component} from 'react';
import moment from 'moment';

import firebase, {firebaseRef} from './../data/firebase';

// will take props to determine type of modal rendered & functions
class Modal extends Component {
  
  // handleAddIdea = (e) => {
  //   e.preventDefault();
  //   // the ideas object in the database
  //   const ideasRef = firebaseRef.child('ideas');
  //   // the details to push up
  //   let ideaTitle = this.refs.ideaTitle.value;
  //   let ideaDesc = this.refs.ideaDesc.value;
  //   let ideaImgUrl = this.refs.ideaImgUrl.value;
    
  //   // a test user until we change state to hold current logged in user
  //   let user = 'tester';
    
  //   console.log('input test: ', user, ideaTitle, ideaDesc, ideaImgUrl)
    
  //   // new idea to push up
  //   let newIdeaRef = ideasRef.push({
  //     title: ideaTitle,
  //     description: ideaDesc,
  //     owner: user,
  //     createdAt: moment().unix(),
  //     tags: ["test", "dummy"],
  //     imageUrl: ideaImgUrl,
  //     rating: 0,
  //     tutorials: null,
  //     examples: null
  //   });
  //   console.log('added idea!');
  // }
  
  // TODO add tags input, install and use Moment, 
  
  render() {
    // modal for the search page when adding an idea
    if (this.props.modalType === 'add-idea') {
      return (
          <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="addModalLabel">Add an Idea</h4>
              </div>
              
              <div className="modal-body">
                
                <form onSubmit={this.handleAddIdea}>
                  <div className="form-group">
                    <label htmlFor="modalFormTitle">Title</label>
                    <input ref="ideaTitle" type="text" className="form-control" id="modalFormTitle" placeholder="Enter name of project idea" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modalFormDesc">Description</label>
                    <input ref="ideaDesc" type="text" className="form-control" id="modalFormDesc" placeholder="Description of the project" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modalFormImg">Link / Url to an image to be used for the idea page</label>
                    <input ref="ideaImgUrl" type="text" className="form-control" id="modalFormImg" placeholder="Link to an image to be used for the idea page" />
                  </div>
                </form>
    
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button onClick={this.handleAddIdea} type="button" className="btn btn-primary">Add Idea</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.props.modalType === 'add-info') {
        // modal for adding examples and tutorials to the idea page
        return (
          <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel">
              <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="addModalLabel">Add a Tutorial or Example</h4>
                </div>
                
                <div className="modal-body">
      
                  <form>
                    <div className="form-group">
                      <label htmlFor="modalFormTitleExample">Add an Example</label>
                      <input ref="exampleTitle" type="text" className="form-control" id="modalFormTitleExample" placeholder="Enter name of the example" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="modalFormLinkExample">Link / Url to the Example</label>
                      <input ref="exampleLink" type="text" className="form-control" id="modalFormLinkExample" placeholder="Link to the example" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="modalFormImgExample">Link / Url to an image of the Example</label>
                      <input ref="exampleImg" type="text" className="form-control" id="modalFormImgExample" placeholder="Link to an image of the example" />
                    </div>
                    <button type="button" className="btn btn-success">Add Example</button>
                  </form>
                  
                  <hr />
                  
                  <form>
                    <div className="form-group">
                      <label htmlFor="modalFormTitleTut">Add a Tutorial</label>
                      <input ref="tutorialTitle" type="text" className="form-control" id="modalFormTitleTut" placeholder="Enter the title of the tutorial" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="modalFormLinkTut">Link / Url to the Tutorial</label>
                      <input ref="tutorialLink" type="text" className="form-control" id="modalFormLinkTut" placeholder="Link to the tutorial" />
                    </div>
                    <button type="button" className="btn btn-info">Add Tutorial</button>
                  </form>
      
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        )
    } else {
      return '';
    }
    
    
  }
  
}

export default Modal;