const fetchButton = document.getElementById('fetchPosts');
const userIdInput = document.getElementById('userId');
const postsComments = document.getElementById('postsComments');

// Fetch the posts and comments
const fetchPost = () => {
  postsComments.innerHTML = ""; // Clear the previous results

  const userId = userIdInput.value.trim(); // Get user ID input
  if (userId === "" || isNaN(userId)) {
    postsComments.innerHTML = '<p>Please enter a valid user ID</p>';
    return;
  }

  // Fetch posts by user ID
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(posts => {
      if (posts.length === 0) {
        postsComments.innerHTML = '<p>No posts found for this user ID</p>';
        return;
      }

      // For each post, fetch comments and display
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('postDiv');
        postDiv.innerHTML = `<h3>Post Title: ${post.title}</h3><p>${post.body}</p><h4>Comments:</h4>`;
        postsComments.appendChild(postDiv);

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
          .then(response => response.json())
          .then(comments => {
            if (comments.length === 0) {
              postDiv.innerHTML = '<p>No comments found for this post</p>';
              return;
            }

            comments.forEach(comment => {
              const commentDiv = document.createElement('div');
              commentDiv.classList.add('commentDiv');
              commentDiv.innerHTML = `
                <p><strong>${comment.name}</strong> (<em>${comment.email}</em>) :</p>
                <p>${comment.body}</p>
                <hr>
              `;
              postDiv.appendChild(commentDiv);
            });
          })
          .catch(() => {
            postDiv.innerHTML = "<p>Failed to fetch comments.</p>";
          });
      });
    })
    .catch(() => {
      postsComments.innerHTML = '<p>Failed to fetch posts.</p>';
    });
};

// Attach event listener to fetch button
fetchButton.addEventListener('click', fetchPost);
