var Usuario = React.createClass({

  getInitialState: function() {
    return {display: true };
  },
  handleDelete() {
    var self = this;
    $.ajax({
        url: self.props.usuario._links.self.href,
        type: 'DELETE',
        success: function(result) {
          self.setState({display: false});
        },
        error: function(xhr, ajaxOptions, thrownError) {
          toastr.error(xhr.responseJSON.message);
        }
    });
  },
  render: function() {

    if (this.state.display==false) return null;
    else return (
      <tr>
          <td>{this.props.usuario.idUsuario}</td>
          <td>{this.props.usuario.nombreUsuario}</td>
          <td>{this.props.usuario.nombreUsuario}</td>
          <td>
            <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
          </td>
      </tr>
    );
  }
});

var UsuarioTable = React.createClass({

  render: function() {

    var rows = [];
    this.props.usuarios.forEach(function(usuario) {
      rows.push(
        <Usuario usuario={usuario} key={usuario.nombreUsuario} />);
    });

    return (
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Years</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    );
  }
});

var App = React.createClass({

  loadEmployeesFromServer: function() {

    var self = this;
    $.ajax({
        url: "http://localhost:8080/usuario/getUsuario",
      }).then(function(data) {
        self.setState({ usuarios: data });
      });

  },

  getInitialState: function() {
    return { usuarios: [] };
  },

  componentDidMount: function() {
    this.loadEmployeesFromServer();
  },

  render() {
    return ( <UsuarioTable usuarios={this.state.usuarios} /> );
  }
});

ReactDOM.render(<App />, document.getElementById('root') );
