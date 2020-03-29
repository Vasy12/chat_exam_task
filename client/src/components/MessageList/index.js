import React       from 'react';
import { connect } from 'react-redux';
import ListItem from "../ListItem";
import styles   from './MessageList.module.scss'

const MessageList = ( props ) => {

  const {chatMessages,currentChat}=props;

  return (
    <ul className={styles.container}>
      {
        currentChat
        ? chatMessages.map((msg)=>(<ListItem key={msg._id}
                                             name={msg.authorId}
                                             id={msg._id}
                                             body={msg.body}
                                             updatedAt={msg.updatedAt}
                                             chatItemClassName={styles.messageItem}/>))
        : ( <li>Select chat</li> )
      }
    </ul>
  );
};

const mapStateToProps = state => {

  return state.chat;

};

export default connect( mapStateToProps )( MessageList );