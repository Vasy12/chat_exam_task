import React from 'react';

const ListItem = (props) => {
    const {chatItemClassName, ...rest} = props;
    return (
        <li className={props.chatItemClassName}>
            {
                rest.chatName
            }
        </li>
    );
};

export default ListItem;