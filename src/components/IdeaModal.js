import React, {Component} from 'react';

class IdeaModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="modal fade" id="addIdeaModal" tabindex="-1" role="dialog" aria-labelledby="addIdeaModalLabel">
          <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="addIdeaModalLabel">Add an Idea</h4>
            </div>
            
            <div className="modal-body">
  
              <form>
                <div className="form-group">
                  <label for="ideaFormTitle">Title</label>
                  <input type="text" className="form-control" id="ideaFormTitle" placeholder="Enter name of project idea" />
                </div>
                <div className="form-group">
                  <label for="ideaFormDesc">Description</label>
                  <input type="text" className="form-control" id="ideaFormDesc" placeholder="Description of the project" />
                </div>
              </form>
  
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add Idea</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IdeaModal;