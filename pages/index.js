import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Box from "@/Components/Box";
import Sidebar from "@/Components/Sidebar";
import AssetContainer from "@/Components/AssetContainer";
import Sidebar2 from "@/Components/Sidebar2";

const inter = Inter({ subsets: ["latin"] });

export default function Home({repo}) {
  console.log(repo)
  console.log(repo.tasks[0].assets)
  return (
    <main className="">
      <Navbar />
      <div className="hidden sm:block absolute z-10">
        <Sidebar />
      </div>
      <div className="hidden md:block">
        <Sidebar2 />
      </div>

      <div className="sm:ml-[9rem]">
        <div className="flex justify-between mt-4 w-[145%] sm:w-[90%]">
          <div className="text-[#0029FF] font-[700] text-[28px]">
            Technical Project Management
          </div>
          <button className="bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Submit Task
          </button>
        </div>
        <div className="w-[145%] sm:w-[90%] h-[8rem] bg-[#E9ECEF]  mt-14">
          <Box title={repo.tasks[0].task_title} description={repo.tasks[0].task_description} />
        </div>
        <div className="absolute mt-12 ">
          <AssetContainer tasks={repo.tasks[0].assets}  />
        </div>
      </div>
    </main>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json");
  const repo = await res.json();
  return { props: { repo } };
};
