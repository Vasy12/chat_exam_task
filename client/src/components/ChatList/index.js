import React from 'react';
import styles                         from './ChatList.module.scss'
import ListItem                       from "../ListItem";
import { emitJoinRoom }               from "../../api/ws/chatApi";
import { LIST_ITEM_TYPE } from "../../constants";


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
                               type={LIST_ITEM_TYPE.MY_CHATS}
                               chatItemClassName={styles.itemContainer}/> )
          } )
        }
      </ul>
    </div>
  );
};


export default ChatList;