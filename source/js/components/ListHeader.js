var React = require('react');

var ListHeader = React.createClass({
  
  handleSubmit: function (event) {
    event.preventDefault();

    this.props.removeAllListItems();
  },

  render: function () {
    var totalNumberOfListItems = this.props.totalNumberOfListItems;
    

    if (totalNumberOfListItems != null) {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline">
          {' '}
          <button className="btn btn-xs btn-default" type="submit">Remova todos</button>
        </form>
      );
    }

    return (<span>Lista de compras</span>);
  }
});

module.exports = ListHeader;