webPush = require("web-push");
 
const vapidKeys = {
   "publicKey": "BP_qMXvantLN9WX9IE6poOQQU-igtjXX5mmoyovIRO4C-ulzxaR53tzaYKDPHbsLdT1E9R6EGj3qZv5f23qN3FU",
   "privateKey": "IKZxEHFzNNh0MOKSUd13Va3wHAGb-LcFh_GVFTe8atE"
};
 
 
webPush.setVapidDetails(
   'mailto:aderizkiwahyudi.official@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
let pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cogCZljxdB8:APA91bFxn1E-z_mAwk8R_UCb2EZmYWxj_eBoH0QkI9e7bsbSl42vOanFePBs0WC4DGk-fSLG5GDTEAU5lnGIqW2yh58Bdm4l8inWEBYMfHKntmx9E_tayZDHo1z3eph1AbfZxOIdzzPn",
   "keys": {
       "p256dh": "BI1kbNohxke5XQIh+sAIsY/NdcDLYyYVFpDIgkk+hn87SauUD7xtNJdlxBKlZ8ZjNU4iE5da+zkgqEJSR41mC5I=",
       "auth"  : "oq8GKlFs9QeYo2+Qkuq93w=="
   }
};
let payload = 'Baca Berita Sepak Bola Primer Laguege Sekarang Juga!';
 
let options = {
   gcmAPIKey: '200994236115',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
)
.then(function(res){
   console.log(res);
})
.catch(function(err){
   console.log(err);
});