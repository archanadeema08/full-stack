const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// JavaScript array
let blogs = [];

// Get all blogs
app.get("/blogs", (req, res) => {
    res.json(blogs);
});

// Add blog
app.post("/add-blog", (req, res) => {

    const { title, author, content } = req.body;

    if (!title || !author || !content) {
        return res.status(400).json({
            message: "All fields are required!"
        });
    }

    const blog = {
        id: blogs.length + 1,
        title,
        author,
        content
    };

    blogs.push(blog);

    res.json({
        message: "Blog Added Successfully",
        blog
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});