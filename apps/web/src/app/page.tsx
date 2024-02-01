import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@nextui-org/react";
export default function Home() {
  return (
    // <main className={styles.main}>

    //   {/* <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code><br></br>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div> */}
    // </main>
    <main>
      <div className="relative">
        <div className="w-full h-[1000px] ">
          <video className="w-full md:h-screen" autoPlay loop muted>
            <source src="countertopvideo.mp4" />
          </video>
        </div>

        <div className="lg:px-[340px] h-full w-full absolute top-[30px] flex flex-col justify-between ">
          <div className="text-center items-center">
            <p className=" lg:text-7xl lg:font-bold mb-5 text-[#F5F5F7]">The Finest Countertop Makers</p>
            <p className="font-normal text-center md:text-4xl text-[#F5F5F7]">With a rich legacy spanning two decades</p>
          </div>

          <div className="flex gap-x-6 justify-center relative ">
            <Button className="p-3 md:w-[272px] font-semibold bg-[#618BB6] text-[#fff]">Order & Buy</Button>
            <Button className="p-3 md:w-[272px] font-semibold bg-[#E5E5E5]">AI Assistance</Button>
          </div>
        </div>
      </div>


    </main>



  );
}
