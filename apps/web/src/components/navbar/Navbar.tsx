import React from 'react'

// function classNameNames(...classNamees) {
//   return classNamees.filter(Boolean).join(' ')
// }

const NavbarItem = ['Products','Integrations','About','Contact','Login']


export default function Navbar() {
  return (
    <div>
<nav className="bg-white">
  <div className="mx-auto max-w-[1440px]">
    <div className="flex px-56 items-center justify-between gap-x-7 shrink-0">  
          {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
          <a href='#' className='font-bold text-2xl items-center'>AbsoluteGM</a>
        <div className="hidden  sm:flex gap-x-7">

            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {NavbarItem.map((item,index)=>(<a href="#" className={index==0?"bg-[#F4F4F4] rounded-md  px-4 py-3 text-xs  font-medium  text-[#3D6083]":"rounded-md  px-4 py-3 text-xs  font-medium  text-[#3D6083]"}>{item}</a>
))}
        </div>
     
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex items-center gap-x-6">
          <div className=" shrink-0 relative rounded-full ">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="44" viewBox="0 0 31 44" fill="none">
  <path d="M21.9801 27.3431L18.4801 23.8431C19.3618 22.7632 19.7949 21.386 19.69 19.9958C19.585 18.6057 18.9501 17.3091 17.9163 16.3738C16.8825 15.4386 15.5289 14.9362 14.1352 14.9707C12.7416 15.0051 11.4144 15.5736 10.428 16.5587C9.44164 17.5438 8.87142 18.8702 8.83522 20.2638C8.79902 21.6574 9.29961 23.0117 10.2335 24.0467C11.1674 25.0817 12.4633 25.7183 13.8533 25.825C15.2432 25.9318 16.6211 25.5004 17.7021 24.6201L21.2021 28.1201C21.2531 28.1712 21.3138 28.2117 21.3805 28.2393C21.4473 28.267 21.5188 28.2812 21.5911 28.2812C21.6633 28.2812 21.7348 28.267 21.8016 28.2393C21.8683 28.2117 21.929 28.1712 21.9801 28.1201C22.0311 28.069 22.0717 28.0083 22.0993 27.9416C22.127 27.8749 22.1412 27.8033 22.1412 27.7311C22.1412 27.6588 22.127 27.5873 22.0993 27.5206C22.0717 27.4538 22.0311 27.3932 21.9801 27.3421V27.3431ZM9.95905 20.4181C9.95925 19.5639 10.2127 18.729 10.6874 18.0188C11.1621 17.3087 11.8367 16.7553 12.6259 16.4286C13.4151 16.1018 14.2835 16.0164 15.1213 16.1832C15.959 16.35 16.7285 16.7614 17.3324 17.3654C17.9363 17.9695 18.3476 18.7391 18.5141 19.5769C18.6807 20.4146 18.5951 21.283 18.2682 22.0721C17.9413 22.8613 17.3877 23.5357 16.6775 24.0103C15.9672 24.4848 15.1322 24.7381 14.2781 24.7381C13.1327 24.737 12.0346 24.2815 11.2249 23.4715C10.4151 22.6616 9.95985 21.5634 9.95905 20.4181Z" fill="#090909" fill-opacity="0.9"/>
</svg>
          </div>

          <div className=" shrink-0 relative rounded-full ">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="44" viewBox="0 0 13 44" fill="none">
  <g clip-path="url(#clip0_732_541)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 25.9C12.0001 26.5 11.5001 27 10.9001 27H2.10006C1.50006 27 1.00006 26.5 1.00006 25.9V18C1.00006 17.5 1.50006 17 2.10006 17H11.0001C11.6001 17 12.1001 17.5 12.1001 18.1V25.9H12.0001ZM6.50006 14C7.70006 14 8.60006 14.9 8.80006 16H4.20006C4.40006 14.9 5.30006 14 6.50006 14ZM10.9001 16H9.80006C9.60006 14.3 8.20006 13 6.50006 13C4.80006 13 3.40006 14.3 3.20006 16H2.10006C0.900061 16 6.10352e-05 16.9 6.10352e-05 18.1V26C6.10352e-05 27.1 0.900061 28 2.10006 28H11.0001C12.1001 28 13.1001 27.1 13.1001 25.9V18C13.0001 16.9 12.1001 16 10.9001 16Z" fill="#090909" fill-opacity="0.9"/>
  </g>
  <defs>
    <clipPath id="clip0_732_541">
      <rect width="13" height="44" fill="white"/>
    </clipPath>
  </defs>
</svg>
          </div>

          {/* <!-- Profile dropdown --> */}
          <div className="relative shrink-0  ">
            <div>
              <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img width="20" height="44" className="rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </button>
            </div>

            {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
              {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
            </div>
          </div>
        </div>
      </div>
      <div className="-mr-2 flex sm:hidden">
        {/* <!-- Mobile menu button --> */}
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
    <div className="border-t border-gray-700 pb-3 pt-4">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">Tom Cook</div>
          <div className="text-sm font-medium text-gray-400">tom@example.com</div>
        </div>
        <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
      </div>
      <div className="mt-3 space-y-1 px-2">
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
