import quartzBg from "@web/public/assets/images/quartz.png";
import HeroSection from "@web/components/home/HeroSection";
import porcelainBg from "@web/public/assets/images/porcelain-bg.png";
import sinteredBg from "@web/public/assets/images/sinteredStone.png";
export default function Home() {
	const sectionInfo = [
		{
			title: "The Finest Countertop Makers",
			description: "With a rich legacy spanning two decades",
			video: "assets/videos/countertopvideo.mp4",
			btn1: "Order & Buy",
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
			video: "assets/videos/countertopvideo1.mp4",
			footer: "true",
			btn1: "More",
			btn2: "AI Assistant",
		},
	];

	return (
		<div className="snap-y h-screen overflow-y-scroll snap-mandatory">
			{sectionInfo.map((item, index) => (
				<HeroSection key={index} item={item} />
			))}
		</div>
	);
}
