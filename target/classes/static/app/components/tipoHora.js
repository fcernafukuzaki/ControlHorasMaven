var TipoHoraOption = React.createClass({

  getInitialState() {
    return {display: true };
  },
  render: function() {
    if (this.state.display==false) return null;
    else return (
      <option value={this.props.tipohora.idTipoHora}>
      {this.props.tipohora.nombre}
      </option>
    );
  }
});

var TipoHoraDropDownList = React.createClass({

  render() {
    var rows = [];
    this.props.tipohoras.forEach(function(tipohora) {
      rows.push(
        <TipoHoraOption tipohora={tipohora} key={tipohora.idTipoHora} />);
	});
    return (
      <select>
          {rows}
      </select>
    );
  }
});

var TipoHora = React.createClass({

  loadHorasFromServer() {
    var self = this;
    $.ajax({
        url: "http://localhost:8080/tipohora/",
      }).then(function(data) {
        self.setState({ tipohoras: data });
      });
  },

  getInitialState() {
    return { tipohoras: [] };
  },

  componentDidMount() {
    this.loadHorasFromServer();
  },

  render() {
    return ( <TipoHoraDropDownList tipohoras={this.state.tipohoras} /> );
  }
});

ReactDOM.render(<TipoHora />, document.getElementById('tipoHora') );