import React                      from 'react';
import { connect }                from "react-redux";
import { createSelectChatAction } from "../../redux/actions";

const ListItem = ( props ) => {
  const {
    chatSelector,
    chatItemClassName,
    name, body, id,chatListFlag,updatedAt
  } = props;

  console.log( 'ListItem component. Props=', props );

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