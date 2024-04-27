'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8e263e4fb21e6726f103a39059e50b47",
".git/config": "81ff963155e8e714b175eccddee77605",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "55f4c1a3d4445c8d02bd6f42cf598190",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfae96e2073adc5b8f3513d46d7e614a",
".git/logs/refs/heads/master": "cfae96e2073adc5b8f3513d46d7e614a",
".git/logs/refs/remotes/origin/master": "504b2c30a081558372cbab9e9c475fe3",
".git/objects/04/6fa292c05ec8078836be3ca4153bae2e84b71c": "37cef5d7d9e0970c3094e6fe436b33c9",
".git/objects/05/2344e91725dd72462bdaf035df4a93475734b6": "472b7050467e06a75625fca8c39a09ef",
".git/objects/05/a8c607c88ae9d57d9aa2cc8a917bdd40440b6f": "fe4f639959da1e31ca5030d0ae1fb39b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/a1bd7fa3d0ce647f489c9f161c4bfaafb75dde": "87e482e13fd946fc15f180b235b978c8",
".git/objects/10/f2dd62a99d0e5a1ec6a99eea7e3eef037db9bf": "0377489d60073d83ac25b014d55bc551",
".git/objects/11/58b9b42d6118d6259494d1fdd5e615d466bd6a": "6725e3be8ab93ebcbe1e4d8bf190efc1",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/812552b11b26b7e5f1b9b17cd600a2dd5b5c34": "58b749641819034346624fb85726b9fa",
".git/objects/18/525e65edc9407784b8984162b0d4a66abbc72d": "92582b27eef9f7bd3f9c21616f43687a",
".git/objects/19/5b1066d1685ea22bda6e9660a661ff09500b68": "803c39f3a6280e48308369a7665ec8ad",
".git/objects/1f/93a9e7223dfe6af617be6e1db49d9cc46bd14c": "23a845d7828a38af210e47c8c497d8a1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/c76e33f6d383785e96fd68076b0e2a80f7f9c1": "d7ccbc593e25a3f2c16bda21bfc04c5d",
".git/objects/23/5296b35ca866d5836a3f3fe6aeb8a89de1a90f": "b65e69cb4371aebcd6321c25f10aab23",
".git/objects/23/b222d46429a0c8b57e48481a679a657864c5a6": "40ba7b3b23cb06b7b10c02f2530fc523",
".git/objects/28/105d0bead73a0d35c5885596146b1f806f98a7": "26f078b5581a8782c278a13c2f3bcd79",
".git/objects/2c/9b3db4cec787aa83da75d8bbdda2caefaffc76": "2d19c1d7075441c0319bc17b786ff606",
".git/objects/33/84abe6729838f7d7f901fbfb10b9a8fe2ccd6a": "723c81e482e9d1f4fbf497133dd8c354",
".git/objects/36/096289d9b64fc156ce703e2ecb8fc6ca1b12f2": "6fef53c52c26da8cf13c00da2a0e6d1f",
".git/objects/38/f0558017cf34231a2c22001e5478d1b42530e3": "dcbb03c503a93715fcc4577bec6d00fb",
".git/objects/3e/c15da09bdd297cea850ba389d7d10024ce9d2a": "59fdd6ea3a0f0ab49af6ceaa8fa6bdcf",
".git/objects/3f/9aa0de77878e16bd35a4fadd8e38ce9cbd91ec": "880a0ad8a3f929e71a239627a943c213",
".git/objects/3f/9ac403e67d150946f81aecc0b2a2e68fa33245": "7186c1c90c72eb4f5f5fa33d6ae32803",
".git/objects/48/e44912469d043d2a78492847fc2d8deefa10cd": "f1c6c544b8d46ed6e5b1c2fcf45990b5",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/28af06fdde81c6e7a2d545ece869dc929c434c": "798a8c85682aa1e59780e4cfa4df7592",
".git/objects/4e/3e9cc673c42c1dd454b40d75620b8982bdd9b4": "d21b8baec7f9273a15484269def9ca4c",
".git/objects/4f/96cff5b7a0c948f4db3e139741acd857d865f5": "f83e30b2ab9b2d7bcf5be48b55eae57d",
".git/objects/51/ee33592a8b6906105b1a9bc02ae3e903c3b6e4": "b340aee1e2edb8d69bdfe960747b54b5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/070b653e460646f8442d49b068c1f571163842": "4e882d0fa2518d5b0dcdeac967c3f822",
".git/objects/55/13bb90a2e154cba7b8103cb041eff73c4c38bd": "00170e659db44b81680c9c287cfa9725",
".git/objects/58/dd0ebe4579f0cbd2d58fa7356cbac1e15226cb": "d705da481592562201fd0aa6797d1118",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/347bfc4ada16fbc4beff71df88c77f3affe2ab": "482de6199ffee81e8bd63fa06faec2ee",
".git/objects/62/429616f778fbf9eab33f12a7e2844d04501a6e": "2b9656139594be4c9c612df4fbc46d2e",
".git/objects/63/77ae1990afdc66cabc41f5c3e364161a488944": "48d80fcc5dcbdb7ac890037f48b42a2a",
".git/objects/63/f5cd7afcba606fb5de7ce7c43deef11b3f0b12": "00647c9a1a58a02c30a02202b5294fac",
".git/objects/64/90f277e615f0bbfde49c01d57726c43f36f77a": "8f0cda3db65302d4bf42cf0000ea382b",
".git/objects/67/8e0ea191338045121521ff5208d13e57b062ba": "c64ff92f25a8914b4c5dae5d4a491d6d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/ec53426f92e3100e393036669d49d53ba71013": "aba46401d2fe4c8c8da3ead782508895",
".git/objects/76/91fe1c5d9756a537c92f6a11b096ea8e54102d": "b9a05c21507e5ac84f5606533e3cccb3",
".git/objects/7a/2109bdca224eff55f15f27f2ef72854a282f43": "4ee34b30faf2a8e28c8fec2cbe21b6f8",
".git/objects/7b/003ba6bf973e4be332225b1ac547d895ce80e7": "2f5e6c0bdcd6e0aea89d2387c3f265c1",
".git/objects/83/8bf4aab7aabe584d520c8730e2c5af0c3c6aa5": "d71533a528c3f539951964fb66f8e6aa",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/87/f54c88d8c267e33f3c951b092c4ba6c0f1c3a6": "142f1a7e23637bef1e2945715536e574",
".git/objects/88/84830cbbe094995a9046f7c1415dd98d174faf": "ef5483755543fc5db5c27ea68d2f1943",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b865454e1becbb37da13272f65848ec3aac55c": "a568908891c4e9b0598897f0821c6884",
".git/objects/8e/df319cc631f51ff9ef1ac2ce5e1f6e424485bb": "17d66c1d73e33f1d8340316ac106dd9d",
".git/objects/94/2565f3c304586579c515c06653ca9c132cf7b2": "aca7b5b331836ae2aba14834aca3060a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/20b6bbc5d1d4b481dc207b24c85de47653fbfe": "3a5d7c819f385b7da4d71d73f2f54f67",
".git/objects/96/476bd8e6723f9213da79e71032ce834952a185": "bdfbf4be143d13642dd8af3c8c9373b3",
".git/objects/98/332a9acbd12a839ba8265a605c335cd2bd5203": "cb9b8a7d0787056a88e5d7fc41db0eb9",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a0/dc7ad066eb69a5da7912389c8630d95ebc1854": "4bc4ca248a2c1e9005326a1bca572545",
".git/objects/a4/697a097af45dc7fa4d98a2e483bdc6205317c6": "e0127905bccbf7e0e102a410997b3936",
".git/objects/a6/36cfd9e03fcdfd2aecc36a4aed77135dd6b9ab": "022c50bae588ba90475529b68412b221",
".git/objects/a9/4cd39c3662c49b142e188f4e432ea8cbf1ffe8": "aaf72d1a30d0eb2e124fc02b96855447",
".git/objects/ab/e0bc28d478a8a3b681b1afee367de060916d67": "91f95b8a44517f1184e2ec052be8ed76",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/5ece85e02772f864b51a3c7890eb1da63186c9": "0468e893b8f6abb1422ca67c8b36b062",
".git/objects/b3/b529ac070f8747844fad9b25355a36c0d626f7": "6f93e9b6a6f1a10949d888ec0b4c342f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/02420c4d679f7725052ab0230c9e968e4e7360": "d81991f239e6bb4fb73c0c58f8c217f2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/bc87b4035d51bdea0648ad82dda508a16563b0": "e807a1806e3c6f2d4b2c1dde9525f44a",
".git/objects/bf/a06fc3cd0a39441607680792578d80a3a13009": "2052c91141b657b8bb09b100956eb6c5",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/b2305da214f6dfa5a4dc205b007c040bcff9fd": "b3c8b9a6f5662606532df5effedddfc7",
".git/objects/c7/e3d35110d5e3dcac95a1931568a68c857345ef": "7195aa3ec2d9a7d8ce0583d14f437275",
".git/objects/cc/e9c04583383e70366a125e20753e2a880e2fd0": "4ab3c44d61ca9b703977b0cd266f2442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/2f4a837221e3f973138841718815f1679d1bde": "1ab99acb83c930690b17b802bd4e986f",
".git/objects/d6/820007745b9b2a1da82202649a66b356fce56b": "848fda9c9e4ae0e704fa14e225b53a46",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/7cedcbb3608e3b277dfe002dfdbca4004943e3": "c786013e7ca4eae4d913124cfa1cb6f0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/ad6f4cd053038dc9c18ac17471bfa2636f0241": "f05d308ddb9746621bff2153ba9b494d",
".git/objects/e3/747597c9b9fefc9a538d69a7a882ceb4231cf0": "8b0a26da116d11e5e804222c9ecd18e0",
".git/objects/e4/825c0312de04506cc924d91dc09120168a85bf": "b90eeaeacb70f536041653756308ef57",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/bc43598f99e7dcdb98fad18955192722655cee": "4f7322ad6e3c9673716e8c24d84c7c9a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b478033a23529df822bf74b10c720d4587ddc2": "d87b09d0c554a6ff6c7b8e2280811934",
".git/objects/f3/12be8b88e209818135c15fa1c1b8b17e6ed64c": "33bd6776fca68f1c311be16e24793809",
".git/objects/f6/b74afab9ffc25751d3f67ce49cfba4232a1d78": "a1772e18e237052b32496dfb273afbe7",
".git/objects/f6/de626180c0628c92f8f30c38c4737a07ee6cc8": "a82f9cce18035a1849f86fa0cf3e9485",
".git/refs/heads/master": "1bb31622f3a41e23b18798a6dc6ae50a",
".git/refs/remotes/origin/master": "1bb31622f3a41e23b18798a6dc6ae50a",
"assets/AssetManifest.bin": "494556e0dab91ca7a5346a11573c74c5",
"assets/AssetManifest.bin.json": "7cd021b210e8521b6d88c9e5644cdeac",
"assets/AssetManifest.json": "3e8c21fda87661aceaadd0981af351b5",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/TAN-PEARL.ttf": "4ccc044758f61dcb238cf37d293f67cd",
"assets/assets/images/back.jpg": "0188b9b6b7200cdacf7d1bdfdaf96cb8",
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
"assets/assets/images/eva.jpg": "a99b47c11c70954edf82b8a7ff2dbf8d",
"assets/FontManifest.json": "e0edd2f07243a74f72d74c2bfec774ea",
"assets/fonts/MaterialIcons-Regular.otf": "c2c9264d12674f130e9bb21c6221d57e",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7fa348aba1a53b13d64e081ef617cf41",
"/": "7fa348aba1a53b13d64e081ef617cf41",
"main.dart.js": "30984d8832a26fc9baa7af3b1968fb25",
"manifest.json": "def8bd85ed0f75c9ac8195510fbeea4c",
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
