document.addEventListener("DOMContentLoaded", () => {
  // --- SLIDESHOW ---
  const images = [
    { src: "BEN_pose.jpeg", caption: "Education Consulting" },
    { src: "CEO.png", caption: "Executive Strategy Coaching" },
    { src: "Gartner_5_ways_to_demonstrate_allyship.jpeg", caption: "Public Sector Planning" }
  ];

  let currentIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");
  const slideshowCaption = document.getElementById("slideshow-caption");
  const leftArrow = document.getElementById("prevBtn");
  const rightArrow = document.getElementById("nextBtn");

  if (!slideshowImage || !slideshowCaption || !leftArrow || !rightArrow) {
    console.error("Slideshow or navigation elements missing:", {
      slideshowImage,
      slideshowCaption,
      leftArrow,
      rightArrow,
    });
    return;
  }

  function showImage(index) {
    slideshowImage.src = images[index].src;
    slideshowCaption.textContent = images[index].caption;
  }

  showImage(currentIndex);

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  let slideshowInterval = setInterval(nextImage, 3000);

  function resetInterval() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(nextImage, 3000);
  }

  rightArrow.addEventListener("click", () => {
    nextImage();
    resetInterval();
  });

  leftArrow.addEventListener("click", () => {
    prevImage();
    resetInterval();
  });
});

// --- DROPDOWN MENU TOGGLE ---
document.addEventListener("DOMContentLoaded", () => {
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const icon = document.getElementById("hamburgerIcon");
    sidebar.classList.toggle("active");
    icon.classList.toggle("active");
  }

  const sidebar = document.getElementById("sidebar");
  const icon = document.getElementById("hamburgerIcon");
  const hamburgerBtn = document.querySelector(".dropbtn");

  hamburgerBtn.addEventListener("click", toggleSidebar);

  document.addEventListener("click", (e) => {
    if (
      !sidebar.contains(e.target) &&
      !icon.contains(e.target) &&
      !hamburgerBtn.contains(e.target)
    ) {
      sidebar.classList.remove("active");
      icon.classList.remove("active");
    }
  });
});
