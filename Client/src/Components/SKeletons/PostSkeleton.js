import React from 'react'
import Skeleton from 'react-loading-skeleton'
const PostSkeleton = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='ms-3 mt-2'><Skeleton circle width={50} height={50} /></div>
                <div className='me-3 mt-4 ms-auto'><Skeleton  width={50}  height={10}/></div>
            </div>
            <div className='mx-3'><Skeleton height={400} /></div>
            <div className='mx-3'><Skeleton height={20} /></div>
            <div className='mx-3'><Skeleton width={70} height={20} /></div>
            <div className='mx-3'><Skeleton height={20} /></div>
            <div className='mx-3'><Skeleton width={250} height={20} /></div>
            <div className='mx-3'><Skeleton width={150} height={20} /></div><hr></hr>
            <div className='mx-3 mt-3'><Skeleton height={40}/></div>

        </div>
    )
}

export default PostSkeleton
