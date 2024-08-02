<script>
  // Get all navigation links
  const links = document.querySelectorAll('nav a');

  // Add event listener to each link
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      // Prevent default link behavior
      e.preventDefault();

      // Get the target page ID
      const pageId = link.getAttribute('href').replace('#', '');

      // Hide all pages
      document.querySelectorAll('section').forEach((page) => {
        page.style.display = 'none';
      });

      // Show the target page
      document.getElementById(pageId).style.display = 'block';
    });
  });
</script>
