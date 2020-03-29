import React, { useState }          from 'react';
import { connect }                  from "react-redux";
import { createLoadAllChatRequest } from "../../redux/actions";
import ListItem                     from "../ListItem";
import styles                       from "../ChatList/ChatList.module.scss";

const AvailableChats = ( props ) => {

  const { chatList:{allAvailableChats},userId } = props;

  const handleClick = () => {
    props.loadAllChats()
  };


  return (
    <div>
      <div className={props.className} onClick={handleClick}>
        View All Chats:
      </div>
      <ul>{
        allAvailableChats.map( ( item ) => ( <ListItem key={item._id}
                                                       id={item._id}
                                                       allChatsFlag={true}
                                                       name={item.name}
                                                       userId={userId}
                                                       chatItemClassName={styles.itemContainer}/> ) )
      }
      </ul>
    </div>
  );
};

const mapStateToProps = ( state ) => {
  return {
    chatList: state.chatList,
    userId:state.auth.user.id
  }
}

const mapDispatchToProps = ( dispatch ) => ( {
  loadAllChats: () => dispatch( createLoadAllChatRequest() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( AvailableChats );