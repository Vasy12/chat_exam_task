import React, { Component, useEffect }  from 'react';
import ChatList                         from "../../ChatList";
import MessagesList                     from "../../MessageList";
import { connect }                      from "react-redux";
import { createLoadUserChatListAction } from "../../../redux/actions";
import styles                           from './HomePage.module.scss'

const HomePage = ( props ) => {

  useEffect( () => {
    props.loadChatList( props.auth.user.id );
  }, [] );

  return (
    <div className={styles.container}>
      <ChatList chatList={props.chatList}/>
      <MessagesList/>

    </div>
  );
};

const mapStateToProps = ( state ) => {
  // const { chatList, loadChatList, auth } = state;
  console.log( 'Current State=', state );
  return state;
};

const mapDispatchToProps = dispatch => ( {
  loadChatList: ( data ) => {
    dispatch( createLoadUserChatListAction( data ) )
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( HomePage );