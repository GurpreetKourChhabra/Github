import React , {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = { term: 'ke'};
    this.state = {
      data : [
        {name: "Gurpreet" , id: 1},
        {name: "Rashmi" , id: 2}
      ]
    }
  }
  render() {
    return (
      <div>
      <table>
              <tbody>
                 {this.state.data.map((person, i) => <Table key = {i}
                    data = {person} />)}
              </tbody>
           </table>
      <input className="search-bar" value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
      value: {this.state.term}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

    // this.setState({term : event.target.value});
  }
}

class Table extends Component {
  render() {
    return (
    <tr>
    <td>{this.props.data.id}</td>
    <td>{this.props.data.name}</td>
    </tr>
    );
  }
}
export default SearchBar;

//State is a plain js object used to record and react to users event.
//Each class based component has its own state object.
