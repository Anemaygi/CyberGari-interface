import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FiCornerLeftUp, FiHome } from "react-icons/fi";

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
  
    <div title={name} className={`fileName overflow-hidden h-fit m-1 truncate cursor-pointer ${backgroundColor} col-span-1 text-center my-5 hover:bg-[#D9D9D9] hover:bg-opacity-5 hover:border-1 hover:border-white p-1 rounded-lg`} onClick={handleFileClick}>
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
  const [rootFolder, setRootFolder] = useState<string>("");
  const [currentFolder, setCurrentFolder] = useState<string>("");
  const [listSubfolder, setListSubfolder] = useState<Array<File>>([]);

  
  function findCommonRootPath(paths: Array<string>) {
    const splitPaths = paths.map((path: string) => path.split('/'));
    const minLength = Math.min(...splitPaths.map((path: any) => path.length));
  
    let commonRootPath = '';
    for (let i = 0; i < minLength; i++) {
      const parts = new Set(splitPaths.map((path: any) => path[i]));
      if (parts.size === 1) {
        commonRootPath += parts.values().next().value + '/';
      } else {
        break;
      }
    }
  
    return commonRootPath.slice(0, -1);
  }

  
function isFileinFolder(fileName:string, current:string) {
  if(fileName.startsWith(current)){ 
    if(fileName.split(current).length >1 && fileName.split(current)[1].includes('/')) return false
    return true
  }
  return false
}

function getSubfolders(current: string): File[] {
  const subfolders: Array<File> = [];

  files.forEach(file => {
    if (file.filePath.startsWith(current)) {
      const subfolderPath = file.filePath.split(current)[1];

      if (subfolderPath.includes('/')) {
        const subfolderName = subfolderPath.split('/')[0];
        if(!subfolders.find(subfolder => subfolder.name === subfolderName)){
        const folderToAdd : File = {
              filePath:subfolderName,
              id: "",
              modifiedTime: "",
              name: subfolderName,
              type: "diretory",
            }
        
        subfolders.push(folderToAdd);}
      }
    }
  });

  return subfolders;
}


  useEffect(() => {
    fetch(`http://localhost:8080/files/`, { 
      method: 'GET'})
      .then(response => response.json())
      .then(json => {
        const filePaths = json.map((file: File) => file.filePath);
        // const commonRootPath = findCommonRootPath(filePaths);
        setRootFolder(findCommonRootPath(filePaths)+"/")
        setCurrentFolder(findCommonRootPath(filePaths)+"/")
        setFiles(json)
      })
      .catch(error => console.error(error));
},[])
  
useEffect(() => {
  setListSubfolder(getSubfolders(currentFolder));
}, [currentFolder, files]);




 
function handleFolderClick(fileName:string) {
  const fileNameRight = fileName+'/'
  setCurrentFolder(prevCurrentFolder => prevCurrentFolder + fileNameRight);
  setListSubfolder(getSubfolders(currentFolder))
}

function handleBackClick() {
  const lastSlashIndex = currentFolder.lastIndexOf('/');
  const secondToLastSlashIndex = currentFolder.lastIndexOf('/', lastSlashIndex - 1);
  setCurrentFolder(prev => prev.substring(0, secondToLastSlashIndex + 1));
}

return (
    <div className="lg:h-[90%] mr-5 p-2 overflow-y-auto rounded-3xl flex flex-col bg-[#121625] font-inter text-white shadow-md">
       <div className="w-full flex flex-wrap items-center p-4 text-roxo1/50"><div className="flex flex-grow">{currentFolder}</div><div onClick={()=>setCurrentFolder(rootFolder)} className="w-fit h-fit cursor-pointer"><FiHome size={25} title="Volte para a pasta raíz" /></div></div> 
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 overflow-y-auto">
          

        { currentFolder != rootFolder ?
          
          <div onClick={handleBackClick} title={"Voltar à pasta anterior"} className={`fileName overflow-hidden m-1 truncate cursor-pointer col-span-1 text-center my-5 hover:bg-[#D9D9D9] hover:bg-opacity-5 hover:border-1 hover:border-white p-1 rounded-lg`}>
        <div className="text-roxo1 text-7xl w-full flex justify-center relative">
          <div className="w-fit h-fit relative"><FontAwesomeIcon icon={faFolder}/>
          <div className="text-white/80 absolute w-full h-full top-1/2 left-1"><FiCornerLeftUp size={20}/></div>
          </div>
        </div>
          <label className="">{"Voltar"}</label>
       </div>
        :
        <></> 
      }



        {listSubfolder.map((file,idx) => (
            <div className="h-full"><FileType key={idx} file={file} handleClick={handleFolderClick} getFileItem={getFileList}/></div>
          ))}
          {files
          .filter(file => isFileinFolder(file.filePath, currentFolder))
          .filter(file => search === "" || file.name.includes(search))
          .map((file,idx) => (
            <div className="h-full"><FileType key={idx} file={file} handleClick={handleFileClick} getFileItem={getFileList}/></div>
          ))}
          
        </div>
    </div> 
    );
};

export default FilesView;