import React, { useEffect }       from 'react';
import { connect }                from "react-redux";
import { createSelectChatAction } from "../../redux/actions";
import { emitJoinRoom }           from "../../api/ws/chatApi";
import { joinUserToChatById }     from "../../api/http/chatController";

const ListItem = ( props ) => {
  const {
    chatSelector,
    chatItemClassName,
    allChatsFlag,
    userId,
    name, body, id, chatListFlag, updatedAt
  } = props;


  const handleClick = ( e ) => {
    if( chatListFlag ) {
      chatSelector( id )
    }
    if( allChatsFlag ) {
      joinUserToChatById(id,userId)
        .then( chatSelector( id ) )

    }
  };

  return (
    <li className={chatItemClassName}
        onClick={handleClick}>
      <div>
        {
          name
        }
      </div>
      <div>
        {
          body
        }
      </div>
      <div>
        {
          updatedAt
        }
      </div>
    </li>
  );
};

const mapDispatchToProps = ( dispatch ) => ( {
  chatSelector: ( id ) => {
    dispatch( createSelectChatAction( id ) )
  }
} );

export default connect( null, mapDispatchToProps )( ListItem );