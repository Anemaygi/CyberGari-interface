import FilesView from "@/components/files-view";
import LabelsMenu from "@/components/labels-menu";
import SideBar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tags: React.FC = () => {
  const [files, setFiles] = useState([]);
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

  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')!));
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('user')) { 
      navigate('/login');
    }
  }, [user, navigate]);

  

    if(user) return (
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
    return (
      <div className="h-full w-full flex mt-10">
        <img className='w-[300px] m-auto' src={'src/img/loading.gif'}></img>
      </div>
      );
  };
  
  export default Tags;