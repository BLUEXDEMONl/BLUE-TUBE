async function searchVideos() {
  const query = document.getElementById('searchQuery').value;
  const resultsDiv = document.getElementById('results');

  if (!query) {
    showAlert('Please enter a search query.');
    return;
  }

  resultsDiv.innerHTML = '<p class="loading">Searching for videos...</p>';

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.error) {
      showAlert('Error: ' + data.error);
      return;
    }

    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.videos.length === 0) {
      resultsDiv.innerHTML = '<p class="no-results">No videos found.</p>';
      return;
    }

    data.videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'video';

      videoDiv.innerHTML = `
        <img src="${video.thumbnail}" alt="Thumbnail of ${video.title}" class="video-thumbnail">
        <div class="video-info">
          <h3><a href="${video.url}" target="_blank">${video.title}</a></h3>
          <p><i data-lucide="clock"></i> ${video.duration}</p>
          <p><i data-lucide="eye"></i> ${video.views}</p>
          <p><i data-lucide="calendar"></i> ${video.uploaded}</p>
          <button onclick="playVideo('${video.url}')" class="btn play-btn">
            <i data-lucide="play"></i> Play
          </button>
        </div>
      `;

      resultsDiv.appendChild(videoDiv);
    });

    // Initialize Lucide icons
    lucide.createIcons();
  } catch (error) {
    console.error(error);
    showAlert('An error occurred while fetching the videos.');
  }
}

function playVideo(videoUrl) {
  const playPageUrl = `play.html?url=${encodeURIComponent(videoUrl)}`;
  window.location.href = playPageUrl;
}

function showAlert(message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.textContent = message;
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

// Add event listener for the Enter key
document.getElementById('searchQuery').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    searchVideos();
  }
});

