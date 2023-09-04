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
            <button onClick={handleClick}>Click Me (tutorial 7)</button>
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click Me Again (tutorial 7)</button>

            <p>{ name } is { age } years old</p>
            <button onClick={handleClickChange}>Change name (tutorial 8)</button>

            <BlogList blogs={blogs} title="All Blogs" />
        </div>
     );
}
 
export default Home;