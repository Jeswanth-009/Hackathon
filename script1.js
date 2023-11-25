document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsSection = document.getElementById('results');
  
    // Simulated data for images and videos
    const mediaItems = [
      { type: 'photo', name: 'Screen', url: 'Screenshot 2023-11-23 151034.png' },
      { type: 'photo', name: 'Half', url: 'Screenshot 2023-11-23 153124.png' },
      { type: 'photo', name: 'Full', url: 'Screenshot 2023-11-23 153124.png' },
      { type: 'video', name: 'Boiling Water', url: 'https://drive.google.com/file/d/1Ae4SsSvFQan3USqlcNGVn0DluXBzDTGD/view' },
      { type: 'video', name: 'Words', url: 'https://drive.google.com/file/d/1ArZy8982XvoALwLKY-ZkGWqXcc3xZ-3m/view' }
    ];
  
    function displayMediaResults(results) {
      resultsSection.innerHTML = '';
      if (results.length === 0) {
        resultsSection.innerHTML = '<p>No results found</p>';
      } else {
        results.forEach(function(media) {
          if (media.type === 'photo') {
            const img = document.createElement('img');
            img.src = media.url;
            img.alt = media.name;
            img.addEventListener('click', function() {
              window.location.href = media.url; // Navigate to the image URL
            });
            resultsSection.appendChild(img);
          } else {
            const video = document.createElement('video');
            video.src = media.url;
            video.controls = true;
            video.autoplay = false;
            video.setAttribute('width', '300');
            video.setAttribute('height', '200');
            video.addEventListener('click', function() {
              window.location.href = media.url; // Navigate to the video URL
            });
            resultsSection.appendChild(video);
          }
        });
      }
    }
  
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      const filteredMedia = mediaItems.filter(media => media.name.toLowerCase().includes(query));
      displayMediaResults(filteredMedia);
    });
  
    // Display all media items initially
    displayMediaResults();
  });
  