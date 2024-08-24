import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
  return (
    <div className='mb-10'>
      <div className=''>
        <h2 className='text-3xl my-4 font-bold text-center'>Repositories</h2>
        <div className='flex flex-wrap justify-center gap-2'>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo}/>
        ))}
        </div>
      </div>
    </div>
  )
}

RepoList.propTypes={
  repos: PropTypes.array.isRequired,
}

export default RepoList