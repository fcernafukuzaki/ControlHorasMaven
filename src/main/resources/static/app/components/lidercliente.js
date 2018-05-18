var LiderClienteOption = React.createClass({

  getInitialState() {
    return {display: true };
  },
  render() {
    if (this.state.display==false) return null;
    else return (
      <option value={this.props.lidercliente.idLiderCliente}>
      {this.props.lidercliente.nombreCompleto}
      </option>
    );
  }
});

var LiderClienteDropDownList = React.createClass({

  render() {
    var rows = [];
    this.props.liderclientes.forEach(function(lidercliente) {
      rows.push(
        <LiderClienteOption lidercliente={lidercliente} key={lidercliente.idLiderCliente} />);
	});
    return (
      <select>
          {rows}
      </select>
    );
  }
});

var LiderCliente = React.createClass({

  loadLiderClienteFromServer() {
    var self = this;
    $.ajax({
        url: "http://localhost:8080/lidercliente/1",
      }).then(function(data) {
        self.setState({ liderclientes: data });
      });
  },

  getInitialState() {
    return { liderclientes: [] };
  },

  componentDidMount() {
    this.loadLiderClienteFromServer();
  },

  render() {
    return ( <LiderClienteDropDownList liderclientes={this.state.liderclientes} /> );
  }
});

ReactDOM.render(<LiderCliente />, document.getElementById('liderCliente') );