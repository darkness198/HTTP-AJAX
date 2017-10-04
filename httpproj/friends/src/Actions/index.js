import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
    // Add the code for this action
    const promise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: promise
    }
};

export const addFriend = (friendObj) => {
    const promise = axios.post('http://localhost:5000/new-friend', friendObj);
    return {
        type: ADD_FRIEND,
        payload: promise
    }
}

export const deleteFriend = (index) => {
  const promise = axios.delete('http://localhost:5000/delete-friend', {data:{index: index}});
  return {
      type: DELETE_FRIEND,
      payload: promise
  }
}