let currentTheme = 'default';

function toggleTheme() {
  const root = document.documentElement;
  if (currentTheme === 'default') {
    root.style.setProperty('--primary-color', '#00ff00');
    root.style.setProperty('--secondary-color', '#00ffff');
    root.style.setProperty('--background-color', '#1a0033');
    currentTheme = 'alternate';
  } else {
    root.style.setProperty('--primary-color', '#ff4500');
    root.style.setProperty('--secondary-color', '#ff8c00');
    root.style.setProperty('--background-color', '#000033');
    currentTheme = 'default';
  }
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

async function searchVideos() {
  const query = document.getElementById('searchQuery').value;

  if (!query) {
    alert('Please enter a query to search.');
    return;
  }

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<div class="loader"></div>';

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.error) {
      alert('Error from the future: ' + data.error);
      return;
    }

    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.videos.length === 0) {
      resultsDiv.innerHTML = '<p>No futuristic videos found.</p>';
      return;
    }

    data.videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.className = 'video';

      videoDiv.innerHTML = `
        <img src="${video.thumbnail}" alt="Futuristic thumbnail of ${video.title}">
        <div class="video-info">
          <h3><a href="${video.url}" target="_blank">${video.title}</a></h3>
          <p><i class="far fa-clock"></i> ${video.duration}</p>
          <p><i class="far fa-eye"></i> ${video.views} views</p>
          <p><i class="far fa-calendar-alt"></i> Uploaded ${video.uploaded}</p>
          <button onclick="playVideo('${video.url}')" class="play-button"><i class="fas fa-play"></i> Play Now</button>
        </div>
      `;

      resultsDiv.appendChild(videoDiv);
    });
  } catch (error) {
    console.error(error);
    alert('A temporal anomaly occurred while fetching the videos.');
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
  searchInput.style.boxShadow = '0 0 15px var(--primary-color)';
});
searchInput.addEventListener('blur', () => {
  searchInput.style.width = '60%';
  searchInput.style.boxShadow = 'none';
});

// Add a cool hover effect to video cards
document.addEventListener('mousemove', function(e) {
  const cards = document.querySelectorAll('.video');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

