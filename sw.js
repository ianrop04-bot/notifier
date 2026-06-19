// sw.js
self.addEventListener('push', function(event) {
    var data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body
    });
});
