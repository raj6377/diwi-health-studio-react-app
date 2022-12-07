import React from 'react'
import './blog.css'
import bgImg from '../Images/Blog/bgx.jpg'

export default function Blog() {
    return (
    <div className="main-blog-div">
        <div className='bg-img'>
            <img className='bg-img' src={bgImg}/>
        </div>
        <h2 className='blog-head' >Blogs</h2>

        <div className='next-div'/>

        <div className='blog-cards'>
            <div>
                <img src='https://picsum.photos/200'/>
                <h2>Blog 1</h2>
            </div>
            <div>
                <img src='https://picsum.photos/200'/>
                <h2>Blog 2</h2>
            </div>
            <div>
                <img src='https://picsum.photos/200'/>
                <h2>Blog 3</h2>
            </div>
            <div>
                <img src='https://picsum.photos/200'/>
                <h2>Blog 4</h2>
            </div>
            <div>
                <img src='https://picsum.photos/200'/>
                <h2>Blog 5</h2>
            </div>
            <div>
                <img src='https://picsum.photos/200'/>
                <h2>Blog 6</h2>
            </div>
        </div>

        <div className='next-div'/>
    </div>
  )
}
