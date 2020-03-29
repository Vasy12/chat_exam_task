import React                             from 'react';
import { Field, Form, Formik }           from "formik";
import { createGetMessageRequestAction } from "../../../redux/actions";
import { connect }                       from "react-redux";
import { emitMessage }                   from "../../../api/ws/chatApi";

const MessageForm = ( props ) => {
  const { currentChat, userId } = props;

  const handleSubmit = ( { message },formikBag ) => {
    emitMessage( currentChat, message, userId )
    // props.sendMessage( message, currentChat,userId )
      formikBag.resetForm()
  };

  return (
    <Formik onSubmit={handleSubmit}

            initialValues={{
              message: ''
            }}>
      {
        ( {  } ) => (
          <Form>
            <Field name={'message'}
                   type={'text'}
                   placeholder={'Type Your Message Here:'}/>
            <button  type={'submit'}>Send</button>
          </Form>
        )
      }
    </Formik>
  );
};
/*
 const mapDispatchToProps = dispatch => ( {
 sendMessage: ( message, chatId,from ) => dispatch( createSendMessageRequestAction( message, chatId,from ) ),
 } );*/

const mapStateToProps = ( state ) => {
  return {
    userId: state.auth.user.id,
    currentChat: state.chat.currentChat
  }
};

export default connect( mapStateToProps, /*mapDispatchToProps*/ )( MessageForm );