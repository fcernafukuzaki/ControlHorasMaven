var ClienteOption = React.createClass({

  getInitialState() {
    return {display: true };
  },
  render() {
    if (this.state.display==false) return null;
    else return (
      <option value={this.props.cliente.idCliente}>
      {this.props.cliente.nombre}
      </option>
    );
  }
});

var ClienteDropDownList = React.createClass({

  render() {
    var rows = [];
    this.props.clientes.forEach(function(cliente) {
      rows.push(
        <ClienteOption cliente={cliente} key={cliente.idCliente} />);
	});
    return (
      <select>
          {rows}
      </select>
    );
  }
});

var Cliente = React.createClass({

  loadClienteFromServer() {
    var self = this;
    $.ajax({
        url: "http://localhost:8080/cliente/",
      }).then(function(data) {
        self.setState({ clientes: data });
      });
  },

  getInitialState() {
    return { clientes: [] };
  },

  componentDidMount() {
    this.loadClienteFromServer();
  },

  render() {
    return ( <ClienteDropDownList clientes={this.state.clientes} /> );
  }
});

ReactDOM.render(<Cliente />, document.getElementById('cliente') );