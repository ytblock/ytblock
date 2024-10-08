function getVideoUrl() {
  const videoId = new URLSearchParams(window.location.search).get('v');
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
}

const iframe = document.createElement('iframe');
iframe.src = getVideoUrl();
iframe.style.position = 'absolute';
iframe.style.borderRadius = '12px';
iframe.allow =
  'accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

function updatePlayerPosition() {
  const isTheaterMode = Boolean(
    document.querySelector('ytd-watch-flexy[full-bleed-player]')
  );
  const player = document.querySelector(
    isTheaterMode
      ? '#full-bleed-container'
      : '#player-container-outer #player-container-inner #player-container #container'
  );
  const bbox = player?.getBoundingClientRect();

  if (player && bbox) {
    iframe.style.zIndex = '1000';
    iframe.style.width = player.clientWidth + 'px';
    iframe.style.height = player.clientHeight + 'px';
    if (parseInt(iframe.style.left) !== bbox.left) {
      iframe.style.top = bbox.top + 'px';
      iframe.style.left = bbox.left + 'px';
    }
  }
}

const VideoChangeObserver = new MutationObserver(() => {
  const newUrl = getVideoUrl();
  if (iframe.src !== newUrl) {
    iframe.src = newUrl;
  }
});

VideoChangeObserver.observe(document.head, { childList: true, subtree: true });

window.addEventListener('resize', updatePlayerPosition);
window.addEventListener('keydown', (e) => {
  if (['t'].includes(e.key.toLowerCase())) {
    updatePlayerPosition();
  }
});

iframe.onload = updatePlayerPosition;
document.body.appendChild(iframe);
