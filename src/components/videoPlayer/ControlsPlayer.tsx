import { FastForwardIcon, PauseIcon } from 'lucide-react'
import React from 'react'

const ControlsPlayer = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
            <div className="">
                <FastForwardIcon className='rotate-180 text-left' />
            </div>
            <div className="">
                <PauseIcon />
            </div>
            <div className="">
                <FastForwardIcon />
            </div>
        </div>
    </div>
  )
}

export default ControlsPlayer