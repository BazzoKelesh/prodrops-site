const searchParams = new URLSearchParams(new URL(window.location.href).search);
const bc = new BroadcastChannel(searchParams.get("state"));
bc.postMessage(window.location.href);
self.close();
