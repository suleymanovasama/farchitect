
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('scrollButton');
    
    // Show/hide button based on scroll position
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };
  });

  // Scroll to top function
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
