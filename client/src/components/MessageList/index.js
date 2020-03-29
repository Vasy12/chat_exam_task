import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import ListItem from "../ListItem";
import styles from './MessageList.module.scss'
import MessageForm from "../forms/MessageForm";
import { chatSocket }                                              from "../../api/ws";
import { createGetMessageSuccessAction, createLoginRequestAction } from "../../redux/actions";

class MessageList extends Component {

  componentDidMount() {
    chatSocket.on( 'message', ( message ) => {
        console.log( "WS MESSAGE", message );
      this.props.getMessage( message )
      }
    )
  } ;

  render() {
    const { chatMessages, currentChat } = this.props;

    const chatIsSelected = () => {
      return chatMessages.map( ( msg ) => ( <ListItem key={msg._id}
                                                      name={msg.authorId}
                                                      id={msg._id}
                                                      body={msg.body}
                                                      updatedAt={msg.updatedAt}
                                                      chatItemClassName={styles.messageItem}/> ) )
    };

    const selectChat = () => {
      return <li>Select chat</li>
    };

    return (
      <div className={styles.messageListContainer}>
        <ul className={styles.container}>
          <div>
            {
              currentChat
              ? chatIsSelected()
              : selectChat()
            }
          </div>

        </ul>
        <div className={styles.inputWrapper}>
          {
            currentChat
            ? <MessageForm/>
            : ( null )
          }</div>
      </div>
    );

  }


};

const mapDispatchToProps = dispatch => ( {
  getMessage: ( data ) => dispatch( createGetMessageSuccessAction( data ) ),
} );

const mapStateToProps = state => {
  console.log('chat state=',state.chat)
  return state.chat;
};

export default connect( mapStateToProps,mapDispatchToProps )( MessageList );