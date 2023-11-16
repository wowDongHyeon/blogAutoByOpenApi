
self.addEventListener('install', function(event) {
  // 캐시 파일 설치
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  // 네트워크 요청 가로채기
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
