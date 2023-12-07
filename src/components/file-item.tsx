import { toLocalDate } from "@/utils";
import React from "react";
import { FiFileText, FiTrash2, FiMaximize2 } from "react-icons/fi";




interface FileToDelete {
  id: string;
  name: string;
  modifiedTime: string;
}
interface ManipuleItem {
  file: FileToDelete;
  action: React.ReactElement;
}


const FileItem: React.FC<ManipuleItem> = ({file, action}) => {
  

  return(
  
    <div className="w-autospace-x-2 flex flex-row align-center ">
      <div className="flex items-center text-roxo1 "><FiFileText size={24} /></div>
      <div className="flex flex-grow flex-col text-left mx-3">
        <p className="font-bold break-all">{file.name}</p>
        <p className="text-sm">Último acesso em {toLocalDate(file.modifiedTime)}</p>
      </div>
      {action}
            
    </div>

  );
}

export default FileItem;