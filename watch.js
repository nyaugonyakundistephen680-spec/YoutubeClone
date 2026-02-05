const mockVideo = {
  id: 1,
  title: "Building a Game Engine with Vulkan",
  views: "12,431 views",
  uploaded: "Feb 1, 2026",
  channel: "SolsticeMara",
  subscribers: "3.2K subscribers",
  description: `
In this video we walk through the architectural decisions behind building
a Vulkan-based game engine from scratch.

Topics covered:
- Vulkan mindset
- ECS design
- Engine tooling
  `,
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

const mockComments = [
  {
    author: "DevStudent",
    text: "This actually explains Vulkan better than most tutorials.",
  },
  { author: "GraphicsNerd", text: "That ECS explanation was clean." },
  { author: "Beginner123", text: "Can you do a follow-up on render graphs?" },
];

const recommendedVideos = [
  {
    id: 2,
    title: "Why Vulkan Forces Better Architecture",
    channel: "Low Level Graphics",
    thumbnail: "https://picsum.photos/320/180?random=10",
  },
  {
    id: 3,
    title: "Understanding ECS Properly",
    channel: "Engine Talk",
    thumbnail: "https://picsum.photos/320/180?random=11",
  },
];

// Render main video
document.getElementById("video-player").innerHTML = `
  <iframe src="${mockVideo.videoUrl}" allowfullscreen></iframe>
`;

document.getElementById("video-title").textContent = mockVideo.title;
document.getElementById("video-views").textContent = mockVideo.views;
document.getElementById("video-date").textContent = ` • ${mockVideo.uploaded}`;
document.getElementById("channel-name").textContent = mockVideo.channel;
document.getElementById("subscriber-count").textContent = mockVideo.subscribers;
document.getElementById("video-description").textContent =
  mockVideo.description;

// Render comments
const commentsContainer = document.getElementById("comments");

mockComments.forEach((c) => {
  const div = document.createElement("div");
  div.className = "comment";
  div.innerHTML = `
    <div class="comment-author">${c.author}</div>
    <div class="comment-text">${c.text}</div>
  `;
  commentsContainer.appendChild(div);
});

// Render recommended videos
const recContainer = document.getElementById("recommended-videos");

recommendedVideos.forEach((v) => {
  const card = document.createElement("div");
  card.className = "recommend-card";
  card.innerHTML = `
    <div class="recommend-thumb">
      <img src="${v.thumbnail}" />
    </div>
    <div class="recommend-info">
      <h5>${v.title}</h5>
      <p>${v.channel}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    console.log("Navigate to video:", v.id);
    // window.location.href = `/watch.html?v=${v.id}`;
  });

  recContainer.appendChild(card);
});
