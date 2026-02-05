const mockVideos = [
  {
    id: 1,
    title: "Building a Game Engine with Vulkan",
    channel: "SolsticeMara",
    views: "12K views",
    uploaded: "2 days ago",
    thumbnail: "https://picsum.photos/400/225?random=1",
  },
  {
    id: 2,
    title: "Express.js Crash Course",
    channel: "Dev Simplified",
    views: "98K views",
    uploaded: "1 week ago",
    thumbnail: "https://picsum.photos/400/225?random=2",
  },
  {
    id: 3,
    title: "Why Vulkan Forces Better Architecture",
    channel: "Low Level Graphics",
    views: "34K views",
    uploaded: "3 days ago",
    thumbnail: "https://picsum.photos/400/225?random=3",
  },
  {
    id: 4,
    title: "Understanding ECS the Right Way",
    channel: "Engine Talk",
    views: "67K views",
    uploaded: "5 days ago",
    thumbnail: "https://picsum.photos/400/225?random=4",
  },
];

const videoGrid = document.getElementById("video-grid");

function renderVideos(videos) {
  videoGrid.innerHTML = "";

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <div class="thumbnail">
        <img src="${video.thumbnail}" alt="${video.title}" />
      </div>

      <div class="video-info">
        <div class="channel-avatar"></div>
        <div class="video-text">
          <h4>${video.title}</h4>
          <p>${video.channel}</p>
          <p>${video.views} • ${video.uploaded}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      console.log("Clicked video:", video.id);
      // Later: window.location.href = `/watch.html?v=${video.id}`;
    });

    videoGrid.appendChild(card);
  });
}

// Initial render
renderVideos(mockVideos);
