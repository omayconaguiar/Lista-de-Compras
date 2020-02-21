var React = require('react');
var ListItemDescription = require('./ListItemDescription');

var ListItem = React.createClass({

  handleSubmit: function (event) {
    event.preventDefault();

    var listItemId = this.props.item.id;

    this.props.removeListItem(listItemId);
  },

  render: function () {
    var item = this.props.item;
    return (
     
      <div className="panel panel-primary">
        <div className="panel-heading">
        {item.name} 
        <input type="number" min="1" max="9999" step="1" defaultValue="1" className="form-control" id="listItemQuantity" required ref="quantity" />
        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-default btn-xs">Remova</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
