// Detect when a timeline item is visible on the screen
window.addEventListener('scroll', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(function(item) {
      if (isElementInViewport(item)) {
          item.classList.add('visible');
      }
  });

});

// Check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;

  // Show "Are you clear with the answer?" when scrolling to 150vh
  let textCard = document.querySelector('.text-card');
  if (scrollPosition >= 150 * window.innerHeight / 100 && scrollPosition < 250 * window.innerHeight / 100) {
      textCard.classList.add('visible');
  } else {
      textCard.classList.remove('visible');
  }

  // Flip cards at 250vh
  if (scrollPosition >= 250 * window.innerHeight / 100) {
      let flipCards = document.querySelectorAll('.flip-card');
      flipCards.forEach(card => {
          card.classList.add('flipped');
      });
  } else {
      let flipCards = document.querySelectorAll('.flip-card');
      flipCards.forEach(card => {
          card.classList.remove('flipped');
      });
  }
});
