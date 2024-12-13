import Image from "next/image";
import { type LogoProps } from "./defs";

export const Logo = ({ width = 50, height = 50 }: LogoProps) => {
	return (
		<span
			className="relative block"
			style={{
				width: `${width}px`,
				height: `${height}px`,
			}}
		>
			<Image
				src="/logo-apple.svg"
				alt="logo"
				className="cursor-pointer"
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: "contain",
				}}
			/>
		</span>
	);
};
