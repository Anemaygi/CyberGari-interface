import FilesView from "@/components/files-view";
import LabelsMenu from "@/components/labels-menu";
import SideBar from "@/components/sidebar";

const Tags: React.FC = () => {
  
  var fileList : string[] = [];
  

  function handleFileClick(name: string) {
    if(fileList.includes(name)) {
      fileList = fileList.filter(file => {
        return file !== name
      })
    } else {
      fileList.push(name);
    }
  }

  function getFileList() {
      return fileList;
  }


    return (
        <div className="flex p-4 h-full lg:h-screen bg-secbackground">
          <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
            <SideBar />
            <div className="w-full grid-cols-6">
            <LabelsMenu getFileList={getFileList} />
            <FilesView handleFileClick={handleFileClick} getFileList={getFileList} />
            </div>
  
          </div>
        </div>
      
    );
  };
  
  export default Tags;