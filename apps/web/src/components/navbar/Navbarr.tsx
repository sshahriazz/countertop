"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { menuItems } from './data'
import BagIcon from '../../../public/assets/icons/bag'
import { Bars3Icon } from "@heroicons/react/24/outline";
import SearchIcon from '../../../public/assets/icons/search'
import ProfileImage from '../../../public/assets/images/profile.png'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-11 max-w-[980px] mx-auto">
      <NavbarContent>
        <NavbarBrand>
          <div className="text-neutral-100 text-xl font-bold">AbsoluteGM</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link className='text-neutral-100 text-xs-medium px-4' href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as='div' className="hidden sm:flex items-center gap-7" justify="center">
        <SearchIcon />
        <BagIcon />
        <Dropdown placement='bottom-end'>
          <DropdownTrigger
            role='button'
            className='text-sm border rounded-full'
          >
            <Image
              src={ProfileImage}
              width={24}
              height={24}
              alt="Picture of the user"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat' className="p-2 bg-neutral-400 rounded-small shadow-sm w-[100px]">
            <DropdownItem
              key='profile'
              color='danger'
              className='text-neutral mb-2.5 outline-none hover:bg-neutral-500 hover:rounded-md'
              as={Link}
              href=""
            >
              Profile
            </DropdownItem>
            <DropdownItem
              key='settings'
              color='danger'
              className='text-neutral mb-2.5 outline-none hover:bg-neutral-500 hover:rounded-md'
              as={Link}
              href=""
            >
              Settings
            </DropdownItem>
            <DropdownItem
              key='logout'
              color='danger'
              className='text-neutral outline-none hover:bg-neutral-500 hover:rounded-md'
              as={Link}
              href=""
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={
            <Bars3Icon
              className='w-6 text-neutral-100'
              aria-hidden='true'
            />}
        />
      </NavbarContent>

      <NavbarMenu className="bg-neutral-600 flex flex-col gap-4 px-4 pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={item.path}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
