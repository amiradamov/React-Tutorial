import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [name, setName] = useState('mario');

    const [age, setAge] = useState(25);

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);

        setBlogs(newBlogs);
    }

    const handleClick = (e) => {
        console.log('hello world', e);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    // let name = 'mario'

    const handleClickChange = () => {
        setAge(30);
        setName('luigi');
    }
    
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click Me Again</button>

            <p>{ name } is { age } years old</p>
            <button onClick={handleClickChange}>Change name</button>

            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* Filtering arrays */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
     );
}
 
export default Home;