import React from 'react'
import { useEffect } from 'react'

export default function SingleBlog(props) {

    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])

  return (
    <div class="single-blog-outer-div">
        <div class='single-blog-inner-div'>
            <img src='http://picsum.photos/200'></img>
            <h1>is it worth brushing everyday ?</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis enim ac tempus sollicitudin. Vestibulum dapibus nibh id erat bibendum, venenatis eleifend eros scelerisque. Mauris rhoncus purus purus. In consequat quis urna quis maximus. Sed vel mi vitae elit semper iaculis non at ante. Nulla suscipit leo in tortor auctor, non tristique ligula volutpat. Vestibulum fringilla odio ut magna congue, nec consectetur mi hendrerit. Fusce condimentum auctor velit sed ultrices. Proin pellentesque ac lectus eget tincidunt.</h3>
            <br/>
            <h3>Praesent ac est eu diam tempor commodo. Nullam semper dui est, non pharetra risus tempus in. Pellentesque at luctus urna. Suspendisse tincidunt lacinia arcu, ut viverra est vulputate sed. Fusce rhoncus, lacus sed volutpat fringilla, metus tortor placerat justo, non consequat tellus justo vel elit. Donec ut enim nibh. Fusce laoreet dictum posuere.</h3>
            <br/>
            <h3>Morbi semper euismod ultrices. Sed tempus eu lacus ac varius. Mauris blandit in ligula a maximus. Donec a erat a massa elementum luctus vulputate non lorem. Nullam et pulvinar risus. Phasellus id elit at libero euismod pretium. Fusce convallis metus nec libero mattis mattis. Nam aliquet lacus mauris. Curabitur quis accumsan odio. Phasellus vehicula porta molestie. Curabitur ultrices vehicula sagittis. Duis augue ex, porta pellentesque libero vitae, vulputate posuere lacus. Praesent euismod id elit non euismod. Aenean porttitor rutrum quam, sit amet volutpat dui tincidunt sed. Praesent consequat, nulla eu rhoncus aliquet, nulla metus vehicula mauris, sit amet varius massa libero quis lectus.</h3>
        </div>
    </div>
  )
}
