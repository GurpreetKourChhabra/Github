// var builder = require('botbuilder');
//
// var connector = new builder.ConsoleConnector().listen();
//
// var bot = new builder.UniversalBot(connector, function (session) {
//     session.send("You said: %s", session.message.text);
// });


var Botkit = require('botkit');
var controller = Botkit.consolebot("hello"
);
// console.log(controller);
var bot = controller.spawn();
// console.log(bot);
// console.log("\n\n");
controller.on('message_received', function(bot, message) {
    console.log("message");
});

controller.hears(['hello','hi'],['message_received'],function(bot,message) {

  // do something to respond to message
  bot.reply(message,'You used a keyword!');
  bot.say();

});
//
// controller.hears('hello','direct_message', function(bot, message) {
//     bot.reply(message,'Hello yourself!');
// });

// var Botkit = require('botkit');
//
// var controller = Botkit.consolebot({
//     debug: false,
// });
// // console.log(controller);
// controller.hears(['hello', 'hi'], 'message_received', function(bot, message) {
//
//     controller.storage.users.get(message.user, function(err, user) {
//         if (user && user.name) {
//             bot.reply(message, 'Hello ' + user.name + '!!');
//         } else {
//             bot.reply(message, 'Hello.');
//         }
//     });
// });
//
//
// // give the bot something to listen for.
// controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {
//
//   bot.reply(message,'Hello yourself.');
//
// });




// var restify = require('restify');
// var builder = require('botbuilder');
//
// // Setup Restify Server
// var server = restify.createServer();
// server.listen(process.env.port || process.env.PORT || 3978, function () {
//    console.log('%s listening to %s', server.name, server.url);
// });
//
// // Create chat connector for communicating with the Bot Framework Service
// var connector = new builder.ChatConnector({
//     appId: process.env.MICROSOFT_APP_ID,
//     appPassword: process.env.MICROSOFT_APP_PASSWORD
// });
//
// // Listen for messages from users
// server.post('/api/messages', connector.listen());
//
// // Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
// var bot = new builder.UniversalBot(connector, function (session) {
//     session.send("You said: %s", session.message.text);
// });
