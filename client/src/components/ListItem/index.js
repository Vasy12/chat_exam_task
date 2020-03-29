import React, { useEffect }       from 'react';
import { connect }                from "react-redux";
import { createSelectChatAction } from "../../redux/actions";
import { emitJoinRoom }           from "../../api/ws/chatApi";

const ListItem = ( props ) => {
  const {
    chatSelector,
    chatItemClassName,
    name, body, id,chatListFlag,updatedAt
  } = props;


  const handleClick = ( e ) => {
    if(chatListFlag){
      chatSelector( id )
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
    console.log( 'dispatching id:', id );
    dispatch( createSelectChatAction( id ) )
  }
} );

export default connect( null, mapDispatchToProps )( ListItem );