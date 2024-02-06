import quartzBg from "@web/public/assets/images/quartz.png";
import BackgroundImageWithTitle from "@web/components/home/page";
import porcelainBg from "@web/public/assets/images/porcelain-bg.png";
import sinteredBg from "@web/public/assets/images/sinteredStone.png";

export default function Home() {
	const sectionInfo = [
		{
			title: "The Finest Countertop Makers",
			description: "With a rich legacy spanning two decades",
			video: "countertopvideo.mp4",
			btn1: "Order& Buy",
			btn2: "AI Assistant",
		},
		{
			title: "Porcelain",
			description: "Embrace The Luxury of Porcelain ",
			img: porcelainBg,
			btn1: "Order& Buy",
			btn2: "AI Assistant",
		},
		{
			title: "Sintered Stone",
			description: "Unmatched Strengths and Beauty",
			img: sinteredBg,
			btn1: "Order& Buy",
			btn2: "AI Assistant",
		},
		{
			title: "Quartz Countertops",
			description: "Perfect for Modern & Classic Interiors",
			img: quartzBg,
			btn1: "Order& Buy",
			btn2: "AI Assistant",
		},
		{
			title: "Experience Integrations ",
			video: "countertopvideo1.mp4",
			footer: "true",
			btn1: "More",
			btn2: "AI Assistant",
		},
	];

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				dd
			</div>
		</section>
	);
}
