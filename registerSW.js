if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/rm/sw.js', { scope: '/rm/' })})}