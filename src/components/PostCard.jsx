import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({ $id, title, blogImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(blogImage)} alt={title} />
                </div>
            </div>
        </Link>
    )
}


export default PostCard
