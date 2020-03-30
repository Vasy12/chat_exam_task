import React, { useEffect, useState } from 'react';
import styles                         from './ChatList.module.scss'
import ListItem                       from "../ListItem";
import { connect }                    from "react-redux";
import { emitJoinRoom }               from "../../api/ws/chatApi";
import AvailableChats                 from "../AvailableChats";


const ChatList = ( props ) => {

  const { chatList: { myChatList, isFetching, error } } = props;

  return (
    <div className={styles.container}>
      <ul>
        {
          isFetching
          ? ( <li>LOADING...</li> )
          : myChatList.map( ( chat ) => {
            emitJoinRoom( chat._id );
            return ( <ListItem key={chat._id}
                               name={chat.name}
                               selectedChatStyles={styles.selectedItemContainer}
                               id={chat._id}
                               chatListFlag={true}
                               chatItemClassName={styles.itemContainer}/> )
          } )
        }
      </ul>
    </div>
  );
};


export default ChatList;