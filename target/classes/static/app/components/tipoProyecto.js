var TipoProyectoOption = React.createClass({

  getInitialState() {
    return {display: true };
  },
  render() {
    if (this.state.display==false) return null;
    else return (
      <option value={this.props.tipoproyecto.idTipoProyecto}>
      {this.props.tipoproyecto.nombre}
      </option>
    );
  }
});

var TipoProyectoDropDownList = React.createClass({

  render() {
    var rows = [];
    this.props.tipoproyectos.forEach(function(tipoproyecto) {
      rows.push(
        <TipoProyectoOption tipoproyecto={tipoproyecto} key={tipoproyecto.idTipoProyecto} />);
	});
    return (
      <select>
          {rows}
      </select>
    );
  }
});

var TipoProyecto = React.createClass({

  loadProyectosFromServer() {
    var self = this;
    $.ajax({
        url: "http://localhost:8080/tipoproyecto/",
      }).then(function(data) {
        self.setState({ tipoproyectos: data });
      });
  },

  getInitialState() {
    return { tipoproyectos: [] };
  },

  componentDidMount() {
    this.loadProyectosFromServer();
  },

  render() {
    return ( <TipoProyectoDropDownList tipoproyectos={this.state.tipoproyectos} /> );
  }
});

ReactDOM.render(<TipoProyecto />, document.getElementById('tipoProyecto') );