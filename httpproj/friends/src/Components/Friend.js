import React, { Component } from 'react';
import { ListGroupItem, Button, Glyphicon } from 'react-bootstrap';


class Friend extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <ListGroupItem>
          <p>{`Name: ${this.props.friendData.name}`}</p>
          <p>{`Age: ${this.props.friendData.age}`}</p>
          <p>{`Email: ${this.props.friendData.email}`}</p>
          <Button onClick={() => this.props.deleter(this.props.index)}> <Glyphicon glyph='remove'/> </Button>
        </ListGroupItem>
      </div>
    );
  }

}
export default Friend;