import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface ManipuleItem {
  name: string;
  type: string;
  handleClick: (name:string) => void
  getFileItem: () => string[]
}


const FileType: React.FC<ManipuleItem> = ({name, type, handleClick, getFileItem}) => {
  
  const [backgroundColor, setColor] = useState("")

  const handleFileClick = () => {
    handleClick(name)
    if(getFileItem().includes(name)){
      setColor("bg-white bg-opacity-5")
    } else {
      setColor("")
    }
  }


  return (
  
    <div className={`fileName cursor-pointer ${backgroundColor} col-span-1 text-center my-5 hover:bg-[#D9D9D9] hover:bg-opacity-5 hover:border-1 hover:border-white p-1 rounded-lg`} onClick={handleFileClick}>
      {
        type == "diretory" ? 
        <div className="text-roxo1 text-7xl"><FontAwesomeIcon icon={faFolder}/></div> : 
        <div className="text-roxo1 text-7xl"><FontAwesomeIcon icon={faFile} /></div>
      }
      <label className="">{name}</label>
    </div>

  );
}

interface FilesProps {
  handleFileClick: (name:string) => void;
  getFileList: () => string[]
}

const FilesView: React.FC<FilesProps> = ({handleFileClick, getFileList}) => {
  const files = {
    "driveFiles": [
      {
        "type": "diretory",
        "name": "Lorem Ipsum 1",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum 2",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum 3",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum 4",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum 5",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum 6",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum 7",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum 8",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum 9",
        "tags": [
          "Tag 1"
        ]
      }
    ]
  };

  return (
    <div className="lg:h-[90%] mr-5 p-2 overflow-y-auto rounded-3xl flex flex-col bg-[#121625] font-inter text-white shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 overflow-y-auto">
          {files.driveFiles.map(file => (
            <FileType name={file.name} type={file.type} handleClick={handleFileClick} getFileItem={getFileList}/>
          ))}
        </div>
    </div> 
    );
};

export default FilesView;