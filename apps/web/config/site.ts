export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Counter Top",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Products",
			href: "/products",
		},
		{
			label: "Integrations",
			href: "/integrations",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "Login",
			href: "/login",
		}
	],
};
