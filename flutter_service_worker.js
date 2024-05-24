'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e459d78cd4bfb6f31a9f739d20116932",
"assets/AssetManifest.bin.json": "e1fca9d365ea7a1cd2ab7ebd59cb5b74",
"assets/AssetManifest.json": "c85e1489cf79f4fb07663f05cf2bcbec",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/TAN-PEARL.ttf": "4ccc044758f61dcb238cf37d293f67cd",
"assets/assets/icons/011-magic-book.png": "c1393150876700d250ea5f17ce0789c4",
"assets/assets/icons/014-magic-ball.png": "1be690deec5dc3d2923401edcc59d8d7",
"assets/assets/icons/016-magic.png": "011ece5a75691e597b6bdb57f8dc160f",
"assets/assets/icons/about.png": "38ff925641d01c190581c79229095e7f",
"assets/assets/icons/card.png": "c990193b3291899462fe024504f43c30",
"assets/assets/icons/cards.png": "6658ed2f85512b2cc94693c6aeb48036",
"assets/assets/icons/gallery.png": "780de25a4dcff8d9ef7181550c15d147",
"assets/assets/icons/info.png": "641e8403af252775488653ed4b1ad0d9",
"assets/assets/images/avatar.png": "c5ea8ee9782693034ba732b312d1e4b1",
"assets/assets/images/back.jpg": "709f8c04368ab56870584de3f59a3521",
"assets/assets/images/cards/allure.jpg": "92281ff4f48f0f0e661c4a215aa16af3",
"assets/assets/images/cards/anima.jpg": "ee45749e79a44f4235034e9bf7257832",
"assets/assets/images/cards/bitter.jpg": "804cac2d149e2057f213897c2740e1f9",
"assets/assets/images/cards/blackhole.jpg": "6e602590528ed45905d3a31b45a6f1c1",
"assets/assets/images/cards/blueval.jpg": "f49f77b37957151ace2bf88c299036e8",
"assets/assets/images/cards/caseofid.jpg": "3f39e1d99993f7f1c13da4b939f4cc73",
"assets/assets/images/cards/catcloud.jpg": "715426d04bb7116bad3c45dbbe6a7475",
"assets/assets/images/cards/chroma.jpg": "545343cba5fa872ca13327e3debc6a5f",
"assets/assets/images/cards/codepers.jpg": "ac23d2308c0b27a5e34c74f4806c7221",
"assets/assets/images/cards/crypto.jpg": "6dc4af975f3c1f0c7d3f6ce44e21648d",
"assets/assets/images/cards/demeow.jpg": "b5c132949483af0191cee468dfe38adb",
"assets/assets/images/cards/dizzy.jpg": "6ad0b81dfa1a4ef1224c02d48a7ffa37",
"assets/assets/images/cards/double.jpg": "d2b70666bbd2ac23fc36863e7fb5e330",
"assets/assets/images/cards/dragonfox.jpg": "932d4d8619e39ee6790645dd9e425fbf",
"assets/assets/images/cards/echoes.jpg": "cc841c0cd4fd5648c3bdb7565f57f57f",
"assets/assets/images/cards/equi.jpg": "3ee70bd0177149da33eb7f4d33120ea4",
"assets/assets/images/cards/felinoid.jpg": "04cee8f638627aafc65582238c46e6ec",
"assets/assets/images/cards/fluid.jpg": "f500c859eacc6baa069dfd56fcad8e0a",
"assets/assets/images/cards/frogs.jpg": "7dd522ee0d92ffe6cbf9a5c5f124ee2c",
"assets/assets/images/cards/gavity.jpg": "587d0689d9fe76bbd60e7bfa46935383",
"assets/assets/images/cards/genesis.jpg": "d24c8d268b5dda008f4b599a9fed9d1d",
"assets/assets/images/cards/greatbat.jpg": "c406ba1c6109781baa333eba6b0b1c22",
"assets/assets/images/cards/innerfish.jpg": "213fc3c4d77701cbd715614e43685f5e",
"assets/assets/images/cards/jelly.jpg": "3d230ac4b5d98bffcc62fdd3f80e1b22",
"assets/assets/images/cards/kints.jpg": "abeb3bf9a450f9fe9983b39f2d0e48d3",
"assets/assets/images/cards/lava.jpg": "df1fe1f9cbba392a3b8be408cb9cdee2",
"assets/assets/images/cards/lovevoid.jpg": "339ce4ea5e7e62a0a343432c6428b634",
"assets/assets/images/cards/lunacy.jpg": "9457643bc41b1baa20a514ad37865894",
"assets/assets/images/cards/lunpoll.jpg": "9265c66817e937110975c286c8943588",
"assets/assets/images/cards/midas.jpg": "ad7443de153b6f6c95902727a6ccaeff",
"assets/assets/images/cards/mindmelt.jpg": "c1616dae4ce8b330ef316392c6b9d5a6",
"assets/assets/images/cards/mistress.jpg": "dcc5bcd67442807ee76608c800476e3a",
"assets/assets/images/cards/moira.jpg": "50329f4dcaa6bf3a5ea8f3fad0e0db51",
"assets/assets/images/cards/neodragon.jpg": "bffbc2d5aaa30e958138e2799882f8cb",
"assets/assets/images/cards/onttouch.jpg": "1cf29b155846fa781c185057417c9a25",
"assets/assets/images/cards/perc.jpg": "d44d71817ac397a5e10111541f86c124",
"assets/assets/images/cards/phrain.jpg": "d94f1343a61da4c40e4d484c41692554",
"assets/assets/images/cards/pollen.jpg": "584aa2df77015ca8463cbb8e89efbbb3",
"assets/assets/images/cards/psyche.jpg": "4a103d09d1006265a9f6e881cd5a84b2",
"assets/assets/images/cards/recov.jpg": "cd30ff858def1211530b6f1fa8260342",
"assets/assets/images/cards/reflex.jpg": "6f2af25e6037da43be3f23952a3fbf45",
"assets/assets/images/cards/refraction.jpg": "607f29f8ca3870e277086059f66ca8a5",
"assets/assets/images/cards/sensation.jpg": "5e08c1163f42ea118c6c39e4aaf22a87",
"assets/assets/images/cards/sepukku.jpg": "bdd34c747c563f5cfbc8510fe73d0200",
"assets/assets/images/cards/serpent.jpg": "85ce1836aee8a133f4d07b877c6c8c63",
"assets/assets/images/cards/ssands.jpg": "6d8a6c6198118c89dc119cf2a7c2db03",
"assets/assets/images/cards/sunbeam.jpg": "209488e00084b3134f5637277767e749",
"assets/assets/images/cards/symph.jpg": "069cb7c78ca0b5a45554bef6f5cfb864",
"assets/assets/images/cards/traum.jpg": "c195c93ca86f2e786a50948063033057",
"assets/assets/images/cards/vision.jpg": "c0f1cb00eef925d95a90c5e02e021421",
"assets/FontManifest.json": "e0edd2f07243a74f72d74c2bfec774ea",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/gif.gif": "ebcc822ed9e9df4def4c32246b663233",
"assets/loader.gif": "ef72ed6ae89debf09fbc1ef76b8de301",
"assets/loadromb.gif": "db0d190da790c3a9c64e3689f580b247",
"assets/NOTICES": "506665c651a540bf8c5f4c609ba016ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6caf55558a01f4225eec20b6b195f77a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71a535b2477ed760639f7f0bccbf5194",
"/": "71a535b2477ed760639f7f0bccbf5194",
"main.dart.js": "716ba66676b33589262beca72b8b1848",
"manifest.json": "dd08ae88ada89adbcd243f6432ec749e",
"version.json": "5deba411531a507f75b6dcbf594c5c03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
