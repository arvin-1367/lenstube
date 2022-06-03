import { Button } from '@components/UIElements/Button'
import Tooltip from '@components/UIElements/Tooltip'
import useAppStore from '@lib/store'
import { EXPLORE, HOME, LIBRARY } from '@utils/url-path'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React from 'react'
import { FiHome } from 'react-icons/fi'
import {
  MdOutlineDarkMode,
  MdOutlineVideoLibrary,
  MdOutlineWbSunny
} from 'react-icons/md'
import { RiLeafLine } from 'react-icons/ri'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()
  const { selectedChannel } = useAppStore()

  return (
    <div className="fixed top-0 bottom-0 left-0 items-center justify-between hidden w-16 px-4 py-2.5 bg-white dark:bg-black md:flex md:flex-col">
      <div className="flex flex-col items-center space-y-5">
        <Link href={HOME}>
          <a className="mt-2">
            <img
              src="/lenstube.svg"
              draggable={false}
              className="w-7 h-7"
              alt=""
            />
          </a>
        </Link>
        <div className="flex flex-col items-center space-y-3">
          <Tooltip className="!rounded-lg" content="Home" placement="right">
            <span className="bg-gray-100 rounded-lg dark:bg-gray-800 scale-animation">
              <Link href={HOME} passHref>
                <Button className="!p-2">
                  <FiHome className="!text-lg group-hover:opacity-100 opacity-80" />
                </Button>
              </Link>
            </span>
          </Tooltip>
          <Tooltip className="!rounded-lg" content="Explore" placement="right">
            <span className="bg-gray-100 rounded-lg dark:bg-gray-800 scale-animation">
              <Link href={EXPLORE} passHref>
                <Button className="!p-2">
                  <RiLeafLine className="!text-lg group-hover:opacity-100 opacity-80" />
                </Button>
              </Link>
            </span>
          </Tooltip>
          {selectedChannel && (
            <Tooltip
              className="!rounded-lg"
              content="Library"
              placement="right"
            >
              <span className="bg-gray-100 rounded-lg dark:bg-gray-800 scale-animation">
                <Link href={LIBRARY} passHref>
                  <Button className="!p-2">
                    <MdOutlineVideoLibrary className="!text-lg group-hover:opacity-100 opacity-80" />
                  </Button>
                </Link>
              </span>
            </Tooltip>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          className="p-2.5 focus:outline-none opacity-70 hover:opacity-100"
        >
          {theme === 'dark' ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
