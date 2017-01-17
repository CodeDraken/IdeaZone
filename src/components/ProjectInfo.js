import React from 'react';

const ProjectInfo = (props) => {
  return(
     <section className="project">
      <h1 className="text-center project__title">Pomodoro Clock</h1>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <img className="img-responsive img--center project__img" src="%PUBLIC_URL%/img/pomodoro.png"></img>
          <div className="project__stats">
            <i className="fa fa-heart-o fa-lg project__heart" aria-hidden="true"></i>
            <span className="project__favnum">&nbsp;500</span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <p className="project__desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
            ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi
            non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
            lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in
            futurum.
          </p>
        </div>
      </div>

    </section>
    );
}

export default ProjectInfo;