import React, { Component } from "react";
import {FcLike} from 'react-icons/fc';
import {FiHeart} from 'react-icons/fi';

class Like extends Component {
  state = { liked: false };
  toggle = () => {
    let localLiked = this.state.liked;
  
    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  render() {
    return (
      <div className="container">
        <center>
        
          <div
            className="icons"
            style={{  fontSize:"170%",marginLeft:"60%" }}
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
              <FiHeart/>
                ) : (
                    <FcLike />
            )}
          </div>
        </center>
      </div>                                                                              
      );
  }
}
  
export default Like;