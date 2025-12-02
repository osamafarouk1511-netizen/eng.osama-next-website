import React from "react";
import MainNavbar from "@/components/layout/main-navbar";
import SuperFooter from "@/components/sections/super-footer";
import "./globals.css";
import { MotionConfig } from "framer-motion";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ar" dir="rtl">
			<body className="bg-black text-white min-h-screen flex flex-col">
				<MotionConfig
					transition={{ duration: 0.45, ease: [0.22, 0.8, 0.29, 0.99] }}
				>
					<MainNavbar />
					<main className="flex-1 flex flex-col">{children}</main>
					<SuperFooter />
				</MotionConfig>
			</body>
		</html>
	);
}

