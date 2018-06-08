module.exports = function(controller) {
    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: " + message.team);

    });
controller.hears(['^hi$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, {
            "dialog": {
                "title": 'Submit a helpdesk ticket',
                "callback_id": 'submit-ticket',
                "submit_label": 'Submit',
                "elements": [
                  {
                    "label": 'Description',
                    "type": 'textarea',
                    "name": 'description',
                    "optional": true,
                  },
                  {
                    "label": 'Urgency',
                    "type": 'select',
                    "name": 'urgency',
                    "options": [
                      { "label": 'Low', "value": 'Low' },
                      { "label": 'Medium', "value": 'Medium' },
                      { "label": 'High', "value": 'High' },
                    ],
                  },
                ]
            }
        });
    });
    controller.hears(['^status'], 'direct_message,direct_mention', function(bot, message) {
        // console.log(s);
        bot.reply(message, {
            "text": "This is your current weeks status",
            "attachments": [
                {
                    "fallback": "status",
                    "title": new Date(),
                    "text": "hihiihihhi",
                    "value": "Hello",
                    "color": "#3AA3E3"
                },
                {
                    "fallback": "status",
                    "title": new Date(),
                    "text": "status",
                    "value": "Status",
                    "color": "#EB534F"
                }
            ]
        }
        );
    });


    controller.hears(['^bye$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, {
    "text": "Would you like to play a game?",
    "attachments": [
        {
            "text": "Choose a game to play",
            "fallback": "You are unable to choose a game",
            "callback_id": "game",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "game",
                    "text": "Thermonuclear War",
                    "style": "danger",
                    "type": "button",
                    "value": "war",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Wouldn't you prefer a good game of chess?",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
}
);
});


    controller.hears(['^i$'], 'direct_message', function(bot, message) {
        bot.reply(message,{
            "text": "Do you want to enter daily status ? ",
            "attachments": [
                {
                    "text": "If yes please select a day from dropdown list.",
                    "color": "black",
                    "attachment_type": "default",
                    "callback_id": "status",
                    "actions": [
                        {
                        "name": "status",
                        "text": "Pick a day...",
                        "type": "select",
                        "options": [
                            {
                                "name": "Monday",
                                "text": "Monday",
                                "value": "Monday"

                            },
                            {
                                "text": "Tuesday",
                                "value": "Tuesday"
                            },
                            {
                                "text": "Wednesday",
                                "value": "Wednesday"
                            },
                            {
                                "text": "Thursday",
                                "value": "Thursday"
                            },
                            {
                                "text": "Friday",
                                "value": "Friday"
                            },
                            {
                                "text": "Saturday",
                                "value": "Saturday"
                            },
                            {
                                "text": "Sunday",
                                "value": "Sunday"
                            }
                        ]
                        },
                        {
                            "name": "No",
                            "text": "No",
                            "type": "button",
                            "value": "No",
                            "dismiss_text": "No"
                        }
                    ]
                }
            ]
        });

    });
    controller.on(['^Monday'], 'direct_message', function(bot, message) {
        bot.reply(message,{
            dialog: {
              title: 'Submit a helpdesk ticket',
              callback_id: 'submit-ticket',
              submit_label: 'Submit',
              elements: [
                {
                  label: 'Title',
                  type: 'text',
                  name: 'title',
                  value: text,
                  hint: '30 second summary of the problem',
                },
                {
                  label: 'Description',
                  type: 'textarea',
                  name: 'description',
                  optional: true,
                },
                {
                  label: 'Urgency',
                  type: 'select',
                  name: 'urgency',
                  options: [
                    { label: 'Low', value: 'Low' },
                    { label: 'Medium', value: 'Medium' },
                    { label: 'High', value: 'High' },
                  ],
                },
              ],
            }
        });
    });

    controller.hears(['shirt'],'message_received',function(bot, message) {
        bot.reply(message, {
            attachment: {
                'type':'template',
                'payload':{
                     'template_type':'generic',
                     'elements':[
                       {
                         'title':'Classic White T-Shirt',
                         'image_url':'http://petersapparel.parseapp.com/img/item100-thumb.png',
                         'subtitle':'Soft white cotton t-shirt is back in style',
                         'buttons':[
                           {
                             'type':'web_url',
                             'url':'https://petersapparel.parseapp.com/view_item?item_id=100',
                             'title':'View Item'
                           },
                           {
                             'type':'web_url',
                             'url':'https://petersapparel.parseapp.com/buy_item?item_id=100',
                             'title':'Buy Item'
                           },
                           {
                             'type':'postback',
                             'title':'Bookmark Item',
                             'payload':'USER_DEFINED_PAYLOAD_FOR_ITEM100'
                           }
                         ]
                       },
                       {
                         'title':'Classic Grey T-Shirt',
                         'image_url':'http://petersapparel.parseapp.com/img/item101-thumb.png',
                         'subtitle':'Soft gray cotton t-shirt is back in style',
                         'buttons':[
                           {
                             'type':'web_url',
                             'url':'https://petersapparel.parseapp.com/view_item?item_id=101',
                             'title':'View Item'
                           },
                           {
                             'type':'web_url',
                             'url':'https://petersapparel.parseapp.com/buy_item?item_id=101',
                             'title':'Buy Item'
                           },
                           {
                             'type':'postback',
                             'title':'Bookmark Item',
                             'payload':'USER_DEFINED_PAYLOAD_FOR_ITEM101'
                           }
                         ]
                       }
                     ]
                   }
            }
        });
    });
};
