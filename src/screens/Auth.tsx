import React from 'react'
import AuthBanner from '../components/AuthBanner'
import AuthCredentials from '../components/AuthCredentials'

const Auth = () => {
  return (
    <div className='flex'>
      <div className='flex-4 '>
        <AuthBanner />

      </div>
      <div className='flex-6'>
        <AuthCredentials />

      </div>

    </div>
  )
}

export default Auth
