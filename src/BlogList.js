const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props,blogs);
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-proview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author} (tutorial 11)</p>
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;