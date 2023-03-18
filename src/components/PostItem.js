import React from 'react'
import { useDispatch } from 'react-redux'
import { removePostById } from '../features/post/postSlice'
const PostItem = ({title, id}) => {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(removePostById(id))}className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
            {title}
        </div>
    )
}

export default PostItem
