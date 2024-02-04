import porcelainBg from '../../public/assets/images/porcelain-bg.png'
import quartzBg from '../../public/assets/images/quartz.png'
import sinteredBg from '../../public/assets/images/sinteredStone.png'
import BackgroundImageWithTitle from "../components/home/bgImageWithTitle/page";



export default function Home() {

  const sectionInfo = [
    {
      "title": "The Finest Countertop Makers",
      "description": "With a rich legacy spanning two decades",
      "video": "countertopvideo.mp4",
      "btn1": "Order& Buy",
      "btn2": "AI Assistant"
    },
    {
      "title": "Porcelain",
      "description": "Embrace The Luxury of Porcelain ",
      "img": porcelainBg,
      "btn1": "Order& Buy",
      "btn2": "AI Assistant"
    },
    {
      "title": "Sintered Stone",
      "description": "Unmatched Strengths and Beauty",
      "img": sinteredBg,
      "btn1": "Order& Buy",
      "btn2": "AI Assistant"
    },
    {
      "title": "Quartz Countertops",
      "description": "Perfect for Modern & Classic Interiors",
      "img": quartzBg,
      "btn1": "Order& Buy",
      "btn2": "AI Assistant"
    },
    {
      "title": "Experience Integrations ",
      "img": quartzBg,
      "btn1": "More",
      "btn2": "AI Assistant"
    },
  ]
  return (
    <main>
      {sectionInfo.map((item, index) => (
        <BackgroundImageWithTitle item={item} />
      ))}
    </main>
  );
}
