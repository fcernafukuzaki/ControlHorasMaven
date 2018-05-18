var TipoTareaOption = React.createClass({

  getInitialState() {
    return {display: true };
  },
  render() {
    if (this.state.display==false) return null;
    else return (
      <option value={this.props.tipotarea.idTipoTarea}>
      {this.props.tipotarea.nombre}
      </option>
    );
  }
});

var TipoTareaDropDownList = React.createClass({

  render() {
    var rows = [];
    this.props.tipotareas.forEach(function(tipotarea) {
      rows.push(
        <TipoTareaOption tipotarea={tipotarea} key={tipotarea.idTipoTarea} />);
	});
    return (
      <select>
          {rows}
      </select>
    );
  }
});

var TipoTarea = React.createClass({

  loadTareasFromServer() {
    var self = this;
    $.ajax({
        url: "http://localhost:8080/tipotarea/",
      }).then(function(data) {
        self.setState({ tipotareas: data });
      });
  },

  getInitialState() {
    return { tipotareas: [] };
  },

  componentDidMount() {
    this.loadTareasFromServer();
  },

  render() {
    return ( <TipoTareaDropDownList tipotareas={this.state.tipotareas} /> );
  }
});

ReactDOM.render(<TipoTarea />, document.getElementById('tipoTarea') );