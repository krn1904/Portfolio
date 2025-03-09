import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const mediumUsername = process.env.REACT_APP_MEDIUM_USERNAME

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!mediumUsername) {
        console.error('Medium username not found in environment variables')
        return
      }

      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
        )
        const data = await response.json()
        setBlogs(data.items)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [mediumUsername])

  const extractImageUrl = (content) => {
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/)
    return imgTagMatch ? imgTagMatch[1] : 'path/to/placeholder/image.jpg'
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <section id='blogs' className='section blogs'>
      <h2 className='section__title'>Blogs</h2>
      {blogs && blogs.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {blogs.map((blog) => (
            <div key={blog.guid} className='blog-card'>
              <img 
                src={blog.thumbnail || extractImageUrl(blog.content)} 
                alt={blog.title} 
                className='blog-image' 
              />
              <div className='blog-content'>
                <h3 className='blog-title'>{blog.title}</h3>
                <p className='blog-description'>
                  {blog.description.replace(/<[^>]*>?/gm, '').substring(0, 100)}...
                </p>
                <a
                  href={blog.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='blog-link'
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No blogs available</p>
      )}
    </section>
  )
}

export default Blogs