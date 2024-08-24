import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import {FcCancel} from 'react-icons/fc'


function Alert() {
  const {alert} = useContext(AlertContext)
  return alert!= null && (
    <p className='flex justify-center items-center mb-4 space-x-2'>
      {alert.type === 'error' && (
        <FcCancel/>
      )}
      <p className='flex-1 text-base font-semibold leading-7 text-white'><strong>{alert.msg}</strong></p>
    </p>
  )
}

export default Alert