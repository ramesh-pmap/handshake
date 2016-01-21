// Dependencies.
import React from 'react';
import { Alert } from 'react-bootstrap';

// Load bootstrap CSS.
import 'bootstrap/dist/css/bootstrap.css';


// Define class.
class Login extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);

    this.state = {
      loginOk: true
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let userHasPermission = this.props.onLogin(this.refs.loginName.value, this.refs.password.value);
    this.setState({loginOk: userHasPermission});
  }

  // Render method.
  render() {
    let alertBlock = '';
    if (!this.state.loginOk) {
      alertBlock = (
        <Alert bsStyle="danger">
          <h4>Incorrect Login/Password.</h4>
          <p>Please check your credentials and try again.</p>
        </Alert>
      );
    }

    return (
      <div>
           <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <strong> Sign in to continue</strong>
                  </div>
                  <div className="panel-body">
                    <form role="form" action="#" method="POST" onSubmit={this.handleSubmit.bind(this)}>
                      <fieldset>
                        <div className="row">
                          <div className="center-block">
                            {alertBlock}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-10  col-md-offset-1 ">
                            <div className="form-group">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input className="form-control" placeholder="Username" ref="loginName" name="loginName" type="text" autoFocus />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="glyphicon glyphicon-lock"></i>
                                </span>
                                <input className="form-control" placeholder="Password" ref="password" name="password" type="password" />
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
                    Don't have an account? <a href="#" > Contact ProcessMAP </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

// Validation.
Login.propTypes = {
  onLogin: React.PropTypes.func
};


// Export.
export default Login;
