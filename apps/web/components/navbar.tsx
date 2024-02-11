"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@web/config/site";
// import BagIcon from '@web/public/assets/icons/bag'
// import SearchIcon from '@web/public/assets/icons/search'
import { ThemeSwitch } from "@web/components/theme-switch";
import ProfileImage from "@web/public/assets/images/profile.png";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import SearchIcon from "./icons/Search";
import BagIcon from "./icons/Bag";
import { Button } from "@nextui-org/button";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      as="div"
      classNames={{
        base: "bg-transparent mb-0 flex justify-between items-center",
        wrapper: "px-4 sm:px-0 ",
      }}
    >
      <NavbarContent className="" justify="start">
        <NavbarBrand>
          <Link
            className="text-neutral-200 dark:text-neutral-200 text-[20px] font-bold"
            href="/"
          >
            AbsoluteGM
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="start">
        {siteConfig.navItems.map((item: any, index: any) => (
          <NavbarItem key={index} className="text-neutral-300">
            {item.label == "Products" ? (
              <Popover shouldFlip radius="none" placement="bottom" classNames={{
				base:"py-2 flex justif-start items-center",
				content:"flex items-center justify-start w-screen"
				
			  }}>
                <PopoverTrigger>
                  <p className="text-xs-medium px-4 cursor-pointer">
                    {item.label}
                  </p>
                </PopoverTrigger>
                <PopoverContent
                  aria-label="ACME features"
                  className=" bg-grey-800"
                >
                  <Link href="/products" className="text-neutral-white font-bold text-xl">Porcelain</Link>
				  <Link href="/products" className="text-neutral-white font-bold text-xl">Porcelain</Link>
                  <Link href="/products" className="text-neutral-white font-bold text-xl">Porcelain</Link>
                </PopoverContent>
              </Popover>
            ) : (
              <Link className="text-xs-medium px-4" href={item.href}>
                {item.label}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        as="div"
        className="hidden sm:flex items-center gap-6"
        justify="end"
      >
        <SearchIcon />
        <BagIcon />

        <ThemeSwitch />
        <Dropdown placement="bottom-end">
          <DropdownTrigger
            role="button"
            className="text-sm border rounded-full"
          >
            <Image
              src={ProfileImage}
              width={24}
              height={24}
              alt="Picture of the user"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="p-2 bg-neutral-400 rounded-small shadow-sm w-[100px]"
          >
            <DropdownItem
              key="profile"
              color="danger"
              className="text-neutral mb-2.5 outline-none hover:bg-neutral-500 hover:rounded-md"
              as={Link}
              href=""
            >
              Profile
            </DropdownItem>
            <DropdownItem
              key="settings"
              color="danger"
              className="text-neutral mb-2.5 outline-none hover:bg-neutral-500 hover:rounded-md"
              as={Link}
              href=""
            >
              Settings
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              className="text-neutral outline-none hover:bg-neutral-500 hover:rounded-md"
              as={Link}
              href=""
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle className="text-neutral-100" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} size="lg" className="text-neutral-800">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
