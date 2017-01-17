import React from 'react';

const ExampleSlider = () => {
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

                <div className="item active">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail">
                      <img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail">
                      <img className="img-responsive" src="https://media3.giphy.com/media/kMxR9EIfVMgmY/200_s.gif" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail">
                      <img className="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail">
                      <img className="img-responsive" src="http://dis.resized.images.s3.amazonaws.com/540x540/86249.jpeg" alt="Image"/>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail">
                      <img className="img-responsive" src="https://d13yacurqjgara.cloudfront.net/users/153277/screenshots/2471489/pomodorofin.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                      <a href="#" className="thumbnail"><img className="img-responsive" src="%PUBLIC_URL%/img/pomodoro.png" alt="Image"/>
                      </a>
                    </div>
                  </div>
                </div>
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