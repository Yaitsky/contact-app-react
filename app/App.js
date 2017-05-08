import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

const contacts = [
  {
    name: "Cassio Zen",
    email: "cassiozen@gmail.com"
  }, {
    name: "Dan Abramov",
    email: "gaearon@somewhere.com"
  }, {
    name: "Pete Hunt",
    email: "floydophone@somewhere.com"
  }, {
    name: "Paul O’Shannessy",
    email: "zpao@somewhere.com"
  }, {
    name: "Ryan Florence",
    email: "rpflorence@somewhere.com"
  }, {
    name: "Sebastian Markbage",
    email: "sebmarkbage@here.com"
  }, {
    name: "12312Cassio Zen",
    email: "cassi23ozen@gmail.com"
  }, {
    name: "232Dan Abramov",
    email: "gaear23on@somewhere.com"
  }, {
    name: "23Pete12312 Hunt",
    email: "floy23dophone@somewhere.com"
  }, {
    name: "232Paul O’Shannessy",
    email: "zp23ao@somewhere.com"
  }, {
    name: "232Ryan Florence",
    email: "rpf23lorence@somewhere.com"
  }, {
    name: "232Sebastian Markbage",
    email: "se23bmarkbage@here.com"
  }
];

class ContactApp extends Component {
  constructor() {
    super();
    this.state = {
      filterText: ''
    }
  }

  handleUserInput(searchItem) {
    this.setState({filterText: searchItem});
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this
          .handleUserInput
          .bind(this)}/>
        <ContactList
          contactList={this.props.contacts}
          filterText={this.state.filterText}/>
      </div>
    );
  }
}

ContactApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component {
  handleChange(event) {
    this
      .props
      .onUserInput(event.target.value);
  }
  render() {
    return (<input
      type="search"
      placeholder="search"
      value={this.props.filterText}
      onChange={this
      .handleChange
      .bind(this)}/>);
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string
}

function isMatching(full, chunk) {
  var string = full.toLowerCase(),
    substring = chunk.toLowerCase();

  if (string.indexOf(substring) + 1) {
    return true;
  }

  return false;
}

class ContactList extends Component {
  render() {
    let filteredContacts = this
      .props
      .contactList
      .filter((contact) => isMatching(contact.name, this.props.filterText));
    return (
      <ul>
        {filteredContacts.map((contact) => <ContactItem key={contact.email} name={contact.name} email={contact.email}/>)}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
  render() {
    return (
      <li key={this.props.id}>
        {this.props.name}
        - {this.props.email}
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
}

render(
  <ContactApp contacts={contacts}/>, document.getElementById('root'));
