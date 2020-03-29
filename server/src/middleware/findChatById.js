const Chat = require( './../models/Chat.js' );

module.exports.findChatById = async ( req, res, next ) => {
  try {
    req.chat = await Chat.findById( req.params.chatId );
    if( req.chat ) {
      return next();
    }
  } catch ( e ) {

  }

  return res.status( 404 ).send( 'Chat Not Found' );
};