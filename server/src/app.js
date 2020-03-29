const Chat = require( './models/Chat' );
const path = require( 'path' );
const { Server } = require( 'http' );
const express = require( 'express' );
const socketIO = require( 'socket.io' );
const cors = require( 'cors' );
const app = express();
const server = new Server( app );
const io = socketIO( server );
const router = require( './router' );
const PORT = process.env.PORT || 3030;

app.use( cors() );
app.use( express.json() );
/*
 * static files
 * */
app.use( express.static( path.join( __dirname, '../uploads' ) ) );
/*
 * http routing
 * */
app.use( '/api', router );
/*
 * error handler
 * */
app.use( ( err, req, res, next ) => {
  res.status( 500 ).send( err );
} );

/*
 * WebSocket
 * */
//const chatNameSpace = io.of( '/chat' );

io.on( 'connection', function ( socket ) {

  socket.on( 'join', function ( room ) {
    socket.join( room );
  } );

  socket.on( 'message', async ( chatId, msg, from ) => {
    try {
      const message = {
        body: msg,
        authorId: from
      };

      const chat = await Chat.findById( chatId );
      chat.messages.push( message );
      const savedChat = await chat.save();


      const lastIndex = savedChat.messages.length;
      const lastMessage = savedChat.messages[ lastIndex - 1 ];

      console.log( lastMessage );

      if( savedChat ) {
        io.in( chatId ).emit( 'message', lastMessage )
      }
    } catch ( e ) {
      throw e
    }

  } );
  socket.on( 'disconnect', reason => {

  } );
} );
/*
 * start server
 * */
server.listen( PORT, () =>
  console.log( `App listening on port ${PORT}!` ),
);






