let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('#darkModeToggle i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

async function searchVideos() {
  const query = document.getElementById('searchQuery').value;

  if (!query) {
    alert('Please enter a search query.');
    return;
  }

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<div class="loader"></div>';

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.error) {
      alert('Error: ' + data.error);
      return;
    }

    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.videos.length === 0) {
      resultsDiv.innerHTML = '<p>No videos found.</p>';
      return;
    }

    data.videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'video';

      videoDiv.innerHTML = `
        <img src="${video.thumbnail}" alt="Thumbnail of ${video.title}">
        <div class="video-info">
          <h3><a href="${video.url}" target="_blank">${video.title}</a></h3>
          <p><i class="far fa-clock"></i> ${video.duration}</p>
          <p><i class="far fa-eye"></i> ${video.views}</p>
          <p><i class="far fa-calendar-alt"></i> ${video.uploaded}</p>
          <button onclick="playVideo('${video.url}')"><i class="fas fa-play"></i> Play</button>
        </div>
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
  window.open(playPageUrl, '_blank');
}

// Add event listener for the Enter key in the search input
document.getElementById('searchQuery').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchVideos();
  }
});

// Animate search bar on focus
const searchInput = document.getElementById('searchQuery');
searchInput.addEventListener('focus', () => {
  searchInput.style.width = '65%';
});
searchInput.addEventListener('blur', () => {
  searchInput.style.width = '60%';
});

