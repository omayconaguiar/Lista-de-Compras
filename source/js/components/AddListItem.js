var React = require('react');
var uuid = require('node-uuid');

var styleRequired = {
  color: "#ffaaaa"
};

var AddListItem = React.createClass({

  handleSubmitEvent: function (event) {
    event.preventDefault();

    var item = {
      id: uuid.v4(),
      date: new Date(),
      name: this.refs.name.value.trim(),
      description: this.refs.description.value.trim(),
    };

    this.props.addListItem(item);
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <h3 className="page-header">Adicione o item</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Nome <span style={styleRequired}>*</span></label>
          <input type="text" className="form-control" id="listItemName" placeholder="Insira o nome do ingrediente" required ref="name" />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">Peso</label>
          <textarea className="form-control" id="listItemDescription" placeholder="Insira o peso (kg ou ml)" ref="description"></textarea>
        </div>

        <hr />

        <button type="submit" className="btn btn-primary">Adicionar a lista</button>
        <button type="reset" className="btn btn-link">Cancelar</button>
      </form>
    );
  }
});

module.exports = AddListItem;
