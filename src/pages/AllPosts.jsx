import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'

const AllPosts = () => {
    const [post, setPost] = useState(second)
    useEffect(() => {


        return () => {

        }
    }, [])

    appwriteService.getPosts([]).then(() => {
        if (posts) {
            setPost(posts.documents)
        }
    })

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>

                    {posts.map((post) => {
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post}/>
                        </div>
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
