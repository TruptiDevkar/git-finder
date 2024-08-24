import React from 'react'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'

function RepoItem({repo}) {
    const{
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    }=repo
  return (
    <div className='mb-2 p-2 rounded-md hover:bg-gray-200 w-[300px]'>
        <div className="">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={html_url} target="_blank" rel="noreferrer" className='flex items-center justify-start'>
                    <FaLink className='inline mr-1'/>
                    <p className='text-xl overflow-hidden text-ellipsis line-clamp-1'>{name}</p>
                </a>
            </h3>
            <p className="mb-3">Description: {description}</p>
            <div className='flex gap-5'>
                <div className="mr-2 flex items-center justify-center">
                    <FaEye className='mr-2'/>
                    {watchers_count}
                </div>
                <div className="mr-2 flex items-center justify-center">
                    <FaStar className='mr-2'/>
                    {stargazers_count}
                </div>
                <div className="mr-2 flex items-center justify-center">
                    <FaInfo className='mr-2'/>
                    {open_issues}
                </div>
                <div className="mr-2 flex items-center justify-center">
                    <FaUtensils className='mr-2'/>
                    {forks}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoItem