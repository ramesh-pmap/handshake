// Dependencies.
import React from 'react';

// Load bootstrap CSS.
import 'bootstrap/dist/css/bootstrap.css';


// Define class.
class Login extends React.Component {

  // Render method.
  render() {
    return (
      <div>
          <div className="panel panel-primary">
            <div className="panel-heading">Login Component:</div>
          </div>

           <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong> Sign in to continue</strong>
                  </div>
                  <div className="panel-body">
                    <form role="form" action="#" method="POST">
                      <fieldset>
                        <div className="row">
                          {/* <div className="center-block">
                            <img className="profile-img"
                              src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="" />
                          </div>*/}
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-10  col-md-offset-1 ">
                            <div className="form-group">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input className="form-control" placeholder="Username" name="loginname" type="text" autoFocus />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                              </div>
                            </div>
                            <div className="form-group">
                              <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign in" />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div className="panel-footer">
                    Dont have an account! <a href="#" > Sign Up Here </a>
                  </div>
                        </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}


// Export.
export default Login;
