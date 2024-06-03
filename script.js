// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Get all the posts
    const posts = document.querySelectorAll('.post');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class to elements in viewport
    function animateOnScroll() {
        posts.forEach(post => {
            if (isInViewport(post)) {
                post.classList.add('animate');
            }
        });
    }

    // Add event listener to scroll
    window.addEventListener('scroll', animateOnScroll);

    // Initial check on page load
    animateOnScroll();
});
