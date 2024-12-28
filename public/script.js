async function searchVideos() {
  const query = document.getElementById('searchQuery').value;

  if (!query) {
    alert('Please enter a search query.');
    return;
  }

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.error) {
      alert('Error: ' + data.error);
      return;
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.videos.length === 0) {
      resultsDiv.innerHTML = '<p>No videos found.</p>';
      return;
    }

    data.videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'video';

      videoDiv.innerHTML = `
        <h3><a href="${video.url}" target="_blank">${video.title}</a></h3>
        <img src="${video.thumbnail}" alt="Thumbnail of ${video.title}">
        <p>Duration: ${video.duration}</p>
        <p>Views: ${video.views}</p>
        <p>Uploaded: ${video.uploaded}</p>
        <button onclick="playVideo('${video.url}')">Play</button>
      `;

      resultsDiv.appendChild(videoDiv);
    });
  } catch (error) {
    console.error(error);
    alert('An error occurred while fetching the videos.');
  }
}

function playVideo(videoUrl) {
  const playPageUrl = `play.html?url=${encodeURIComponent(videoUrl)}`;
  window.location.href = playPageUrl;
}