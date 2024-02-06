import "@web/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@web/config/site";
import { fontSans } from "@web/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@web/components/navbar";
import clsx from "clsx";
import { Viewport } from "next";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,

	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<div className='sticky top-0 z-40 bg-grey-800'>
							<div className="flex h-11 max-w-[980px] mx-auto">
								<Navbar />
							</div>
						</div>
						<main>
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
