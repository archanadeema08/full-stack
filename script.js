// Display Blogs

async function loadBlogs() {

    const container = document.getElementById("blogContainer");

    if (!container) return;

    const response = await fetch("/blogs");

    const blogs = await response.json();

    container.innerHTML = "";

    if (blogs.length === 0) {

        container.innerHTML = "<p>No Blogs Available</p>";

        return;
    }

    blogs.forEach(blog => {

        container.innerHTML += `

        <div class="card">

        <h3>${blog.title}</h3>

        <p><b>Author:</b> ${blog.author}</p>

        <p>${blog.content}</p>

        </div>

        `;

    });

}

loadBlogs();


// Add Blog

const form = document.getElementById("blogForm");

if (form) {

form.addEventListener("submit", async function(e){

e.preventDefault();

const title = document.getElementById("title").value;

const author = document.getElementById("author").value;

const content = document.getElementById("content").value;

await fetch("/add-blog",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title,

author,

content

})

});

alert("Blog Added Successfully!");

window.location.href="index.html";

});

}