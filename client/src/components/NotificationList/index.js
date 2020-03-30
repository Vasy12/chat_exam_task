import React    from 'react';
import ListItem from "../ListItem";
import styles             from './NotificationList.module.scss'
import { LIST_ITEM_TYPE } from '../../constants'

const NotificationList = ( props ) => {
  const { notifications } = props;
  return (
      <ul className={styles.container}>
      {
        notifications
        ? notifications.map( ( item ) => ( <ListItem body={item.message.body}
                                                     key={item.message._id}
                                                     id={item.message._id}
                                                     type={LIST_ITEM_TYPE.NOTIFICATION}
                                                     chatItemClassName={styles.itemContainer}
                                                     name={item.chatId}/> ) )
        : null
      }
      </ul>
  );
};

export default NotificationList;