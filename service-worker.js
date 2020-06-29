importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if(workbox){
    console.log("WB Berhasil di Import");
    workbox.precaching.precacheAndRoute([
        {url : '/index.html', revision: '1'},
        {url : '/app.js', revision: '1'},
        {url : '/service-worker.js', revision: '1'},
        {url : '/img/icon.png', revision: '1'},
        {url : '/img/badge.png', revision: '1'},
        {url : '/img/icon-192.png', revision: '1'},
        {url : '/img/logo.png', revision: '1'},
        {url : '/manifest.json', revision: '1'}
    ]);
    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName : 'pages'
        })
    );
    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate({
            cacheName : 'football-data',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses : [0,200]
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds : 60 * 60 * 24 * 30,
                    maxEntries    : 50
                })
            ]
        })
    );
}else{
    console.log("WB Gagal di Import");
}

self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Baca Berita Sepak Bola Primer Laguege Sekarang Juga!';
    }
    var options = {
      body: body,
      icon: './img/icon.png',
      badge: './img/badge.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Premier Laguege', options)
    );
  });
  