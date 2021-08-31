import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added')
            setIsPending(false)
            history.push('/')
        })
    }

    useEffect(() => {document.title = "New Blog"})

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <input 
                    type="text" 
                    required 
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />

                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding Blog...</button> }
                <p>Title: { title }</p>
                <p>Body: { body }</p>
                <p>Author: { author }</p>
            </form>
        </div>
    );
}

export default Create;