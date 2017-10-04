import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend } from '../Actions';
import  Friend  from './Friend';
import { ListGroup, ListGroupItem, Grid, Col} from 'react-bootstrap';
import axios from 'axios';

class FriendsList extends Component {
	constructor() {
		super();
		this.state = {
			newFriend: ''	
		};
	}
    componentDidMount() {
		this.props.getFriends();
	}
	submitter = (event) => {
    event.preventDefault();
    const newName = this.state.newFriend.substring(0, this.state.newFriend.indexOf(','));
    const newAge = this.state.newFriend.substring(this.state.newFriend.indexOf(',') + 1, this.state.newFriend.lastIndexOf(',') );
    const newEmail = this.state.newFriend.substring(this.state.newFriend.lastIndexOf(',') + 1);
    this.props.addFriend({name: newName, age: newAge, email: newEmail});
    this.setState({
      newFriend: ''
    });
  }
  deleter = (indexToDelete) => {
    this.props.deleteFriend(indexToDelete);
  }
	handleName = (event) => {
		this.setState({
			newFriend: event.target.value
		});
		
	}

    render() {
        return (
            <div>
              <Grid>
                <Col md={4}></Col>
                <Col md={4}>
                  <ListGroup>
                      {this.props.friends.map((friend, i) => {
                          return (
                            <Friend friendData={friend} key={i} index={i} deleter={this.deleter}/>
                          );
                      })}
                  </ListGroup>
          
                  <ListGroup>
                    <form onSubmit={this.submitter}>
                      <input type="text" onChange={this.handleName} placeholder='Add a new friend!' value={this.state.newFriend}/>			
                    </form>
                  </ListGroup>
                </Col>
                <Col md={4}></Col>
              </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, addFriend, deleteFriend })(FriendsList);