import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FiCornerLeftUp } from "react-icons/fi";

interface File{
  filePath:string,
  id: string,
  modifiedTime: string,
  name: string,
  type: string,
}

interface ManipuleItem {
  file: File,
  handleClick: (name:string,pathname:string) => void,
  getFileItem: () => string[]
}


const FileType: React.FC<ManipuleItem> = ({file, handleClick, getFileItem}) => {
  
  const name = file.name;
  const pathname = file.filePath;

  const [backgroundColor, setColor] = useState("")

  const handleFileClick = () => {
    
    handleClick(name,pathname)
    if(getFileItem().includes(pathname)){
      setColor("bg-white bg-opacity-5")
    } else {
      setColor("")
    }
  }


  return (
  
    <div title={name} className={`fileName overflow-hidden m-1 truncate cursor-pointer ${backgroundColor} col-span-1 text-center my-5 hover:bg-[#D9D9D9] hover:bg-opacity-5 hover:border-1 hover:border-white p-1 rounded-lg`} onClick={handleFileClick}>
      {
        file.type == "diretory" ? 
        <div className="text-roxo1 text-7xl"><FontAwesomeIcon icon={faFolder}/></div> : 
        <div className="text-roxo1 text-7xl"><FontAwesomeIcon icon={faFile} /></div>
      }
      <label className="">{name}</label>
    </div>

  );
}

interface FilesProps {
  handleFileClick: (name:string,pathname:string) => void;
  getFileList: () => string[]
  search: string,
}

interface FileItem {
  filePath:string,
  id:string,
  modifiedTime:string,
  name:string,
  type:string,
}


const FilesView: React.FC<FilesProps> = ({handleFileClick, getFileList, search}) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8080/files/`, { 
      method: 'GET'})
      .then(response => response.json())
      .then(json => {
        setFiles(json)
      })
      .catch(error => console.error(error));
},[])
  
return (
    <div className="lg:h-[90%] mr-5 p-2 overflow-y-auto rounded-3xl flex flex-col bg-[#121625] font-inter text-white shadow-md">
       <p>RootFolder <FiCornerLeftUp /></p> 
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 overflow-y-auto">
          {files
          .filter(file => search === "" || file.name.includes(search))
          .map(file => (
            <FileType file={file} handleClick={handleFileClick} getFileItem={getFileList}/>
          ))}
        </div>
    </div> 
    );
};

export default FilesView;