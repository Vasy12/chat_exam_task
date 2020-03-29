import React from 'react';
import styles from './ChatList.module.scss'
import ListItem from "../ListItem";
import {connect} from "react-redux";

const ChatList = (props) => {

    const {chatList} = props;

    console.log('chatlistprops',props.chatList);

    return (
        <div className={styles.container}>
            <ul>
                {
                    chatList
                        ? chatList.map((chat) => (<ListItem key={chat._id}
                                                            chatName={chat.name}
                                                            chatItemClassName={styles.itemContainer}/>))
                        : (<li>LOADING...</li>)
                }
            </ul>
        </div>
    );
};



export default ChatList;