async function searchVideos() {
  const query = document.getElementById('searchQuery').value;

  if (!query) {
    alert('Please enter a search query.');
    return;
  }

  document.getElementById('loader').classList.remove('hidden');
  document.getElementById('results').innerHTML = '';

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    document.getElementById('loader').classList.add('hidden');

    if (data.error) {
      alert('Error: ' + data.error);
      return;
    }

    const resultsDiv = document.getElementById('results');

    if (data.videos.length === 0) {
      resultsDiv.innerHTML = '<p>No videos found.</p>';
      return;
    }

    data.videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'video';

      videoDiv.innerHTML = `
        <img src="${video.thumbnail}" alt="Thumbnail of ${video.title}">
        <h3><a href="${video.url}" target="_blank">${video.title}</a></h3>
        <p><i class="fas fa-clock"></i> ${video.duration}</p>
        <p><i class="fas fa-eye"></i> ${video.views}</p>
        <p><i class="fas fa-calendar-alt"></i> ${video.uploaded}</p>
        <button onclick="playVideo('${video.url}')" class="play-btn">
          <i class="fas fa-play"></i> Play
        </button>
      `;

      resultsDiv.appendChild(videoDiv);
    });
  } catch (error) {
    console.error(error);
    document.getElementById('loader').classList.add('hidden');
    alert('An error occurred while fetching the videos.');
  }
}

function playVideo(videoUrl) {
  const playPageUrl = `play.html?url=${encodeURIComponent(videoUrl)}`;
  window.location.href = playPageUrl;
}

function clearSearch() {
  document.getElementById('searchQuery').value = '';
  document.getElementById('results').innerHTML = '';
}

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('#themeToggle i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});

// Set initial theme based on user's preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}

