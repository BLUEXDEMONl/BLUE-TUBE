async function fetchVideo() {
  const urlParams = new URLSearchParams(window.location.search);
  const videoUrl = urlParams.get('url');
  const videoContainer = document.getElementById('videoContainer');

  if (!videoUrl) {
    videoContainer.innerHTML = '<p class="error">Error: No video URL provided.</p>';
    return;
  }

  try {
    const apiResponse = await fetch(`https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}`);
    const data = await apiResponse.json();

    if (data.status !== 200 || !data.success) {
      videoContainer.innerHTML = '<p class="error">Error: Unable to fetch video.</p>';
      return;
    }

    const videoHtml = `
      <h2>${data.result.title}</h2>
      <div class="video-wrapper">
        <video id="videoPlayer" controls>
          <source src="${data.result.download_url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-controls">
          <button id="downloadBtn" class="btn">
            <i data-lucide="download"></i> Download
          </button>
          <button id="fullscreenBtn" class="btn">
            <i data-lucide="maximize-2"></i> Fullscreen
          </button>
        </div>
      </div>
    `;

    videoContainer.innerHTML = videoHtml;
    
    // Initialize Lucide icons
    lucide.createIcons();

    // Add event listeners
    document.getElementById('downloadBtn').addEventListener('click', () => {
      window.open(data.result.download_url, '_blank');
    });

    const videoPlayer = document.getElementById('videoPlayer');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    fullscreenBtn.addEventListener('click', toggleFullscreen);

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        if (videoPlayer.requestFullscreen) {
          videoPlayer.requestFullscreen();
        }
        fullscreenBtn.innerHTML = '<i data-lucide="minimize-2"></i> Exit Fullscreen';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        fullscreenBtn.innerHTML = '<i data-lucide="maximize-2"></i> Fullscreen';
      }
      lucide.createIcons();
    }

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        fullscreenBtn.innerHTML = '<i data-lucide="maximize-2"></i> Fullscreen';
        lucide.createIcons();
      }
    });

  } catch (error) {
    console.error(error);
    videoContainer.innerHTML = '<p class="error">Error: Unable to fetch video.</p>';
  }
}

fetchVideo();

