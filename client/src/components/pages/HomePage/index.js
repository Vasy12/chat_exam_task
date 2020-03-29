import React, {Component, useEffect} from 'react';
import ChatList from "../../ChatList";
import MessagesList from "../../MessageList";
import {connect} from "react-redux";
import {createLoadUserChatListAction} from "../../../redux/actions";

class HomePage extends Component {

    componentDidMount() {
        this.props.loadChatList(this.props.auth.user.id);
        this.forceUpdate()
    }

    render() {
        return (
            <>
                <ChatList chatList={this.props.chatList}/>
                <MessagesList/>
            </>
        );
    }


};

const mapStateToProps = (state) => {
    const {chatList, loadChatList, auth} = state;
    return state;
};

const mapDispatchToProps = dispatch => ({
    loadChatList: (data) => {
        dispatch(createLoadUserChatListAction(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);