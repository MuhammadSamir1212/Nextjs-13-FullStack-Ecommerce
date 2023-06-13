import Link from 'next/link';
import {
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
  PencilIcon,
  CreditCardIcon,
} from '@heroicons/react/24/solid';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';

import { signOut } from 'next-auth/react';

export default function UserLogin({ name, isAdmin, avatar }) {
  return (
    <Menu
      as="div"
      className="relative flex items-center text-left md:mr-[1.5em] mr-[0.5em]"
    >
      <div>
        <Menu.Button className="flex w-full justify-center items-center">
          <Image
            src={avatar}
            alt="avatar"
            width={35}
            height={35}
            priority
            className="rounded-full md:mr-3 border-2 border-secondary shadow-sm"
          />

          <span className="hidden md:block font-medium text-mainGray">
            {name}
          </span>
          <ChevronDownIcon className="ml-2 h-4 w-4 text-mainGray" />
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform scale-95"
        enterTo="transform scale-100"
        leave="transition ease-in duration=75"
        leaveFrom="transform scale-100"
        leaveTo="transform scale-95"
      >
        <Menu.Items className="absolute top-[1.9em] right-0 w-56 z-50 origin-top-right bg-white rounded shadow-sm">
          <div className="p-1">
            {isAdmin && (
              <Menu.Item>
                <Link
                  href="/dashboard"
                  className="flex hover:bg-secondary hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                >
                  <CreditCardIcon className="h-4 w-4 mr-2" />
                  DashBoard
                </Link>
              </Menu.Item>
            )}
            <Menu.Item>
              <Link
                href="/profile"
                className="flex hover:bg-secondary hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
              >
                <PencilIcon className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </Menu.Item>

            <Menu.Item>
              <button onClick={() => signOut()} className="w-full flex hover:bg-secondary hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />
                Logout
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
