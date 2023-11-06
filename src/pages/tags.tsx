import FilesView from "@/components/files-view";
import LabelsMenu from "@/components/labels-menu";
import SideBar from "@/components/sidebar";

const Tags: React.FC = () => {
    return (
        <div className="flex p-4 h-screen bg-secbackground">
          <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
            <SideBar />
            <div className="w-full grid-cols-6">
            <LabelsMenu />
            <FilesView />
            </div>
  
          </div>
        </div>
      
    );
  };
  
  export default Tags;