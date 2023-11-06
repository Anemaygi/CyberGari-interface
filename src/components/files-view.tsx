import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ManipuleItem {
  name: string;
  type: string;
}


const FileType: React.FC<ManipuleItem> = ({name, type}) => {
  

  return(
  
    <div className="col-span-1 text-center my-5">
      {
        type == "diretory" ? 
        <div className="text-roxo1 text-7xl"><FontAwesomeIcon icon={faFolder}/></div> : 
        <div className="text-roxo1 text-7xl"><FontAwesomeIcon icon={faFile} /></div>
      }
      <label className="">{name}</label>
    </div>

  );
}

const FilesView: React.FC = () => {
  const files = {
    "driveFiles": [
      {
        "type": "diretory",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "diretory",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      },
      {
        "type": "file",
        "name": "Lorem Ipsum",
        "tags": [
          "Tag 1"
        ]
      }
    ]
  };

  return (
    <div className="h-[90%] overflow-y-auto rounded-3xl flex flex-col bg-[#121625] font-inter text-white shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {files.driveFiles.map(file => (
            <FileType name={file.name} type={file.type}/>
          ))}
        </div>
    </div> 
    );
};

export default FilesView;