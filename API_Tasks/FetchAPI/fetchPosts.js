const postContainer = document.getElementById('posts');

const addingPost = (data) => {
  let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      
      const postTitle = document.createElement('h2');
      postTitle.textContent = `Title : ${data.title}`;
      postTitle.classList.add('postTitle');

      const postBody = document.createElement('p');
      postBody.textContent = `Body : ${data.body}`;
      postBody.classList.add('postBody');

      const postId = document.createElement('p');
      postId.textContent = `id : ${data.id}`;
      postId.classList.add('postId');

      const postUserId = document.createElement('p');
      postUserId.textContent = `userId : ${data.userId}`;
      postUserId.classList.add('postUserId');


      
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postUserId);
      postDiv.appendChild(postId);
      postDiv.appendChild(postBody);

      postDiv.style.borderBottom = ' 1px dashed black';

      postContainer.appendChild(postDiv);

}

const posts = async () => {
    try {
      // Make a GET request to the API endpoint with proper headers
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
          'Accept': 'application/json'
        }
      });
      if(!response.ok){
        throw new Error(`New Error occured : ${response.statusText}`);
      }
      const data = await response.json();

      data.forEach(addingPost);
      
    }
    catch(error){
        console.log(error);
    }
}

posts();