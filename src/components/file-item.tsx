import React from "react";
import { FiFileText, FiTrash2, FiMaximize2 } from "react-icons/fi";

interface ManipuleItem {
  id: String;
  name: String;
  lastView: String;
  type: boolean;
}


const FileItem: React.FC<ManipuleItem> = ({id, name, lastView, type}) => {
  
  
  
  const deleteItem = ({id}: { id: String }) => {
    console.log("Deletou "+id);
  };
  
  const uncompressItem  = ({id}: { id: String }) => {
    console.log("Descomprimiu "+id);
  };
  

  return(
  
    <div className="w-autospace-x-2 flex flex-row align-center ">
      <div className="flex items-center text-roxo1 "><FiFileText size={24} /></div>
      <div className="flex flex-grow flex-col text-left mx-3">
        <p className="font-bold">{name}</p>
        <p className="text-sm">Último acesso em {lastView}</p>
      </div>
      <div className="flex items-center"><div onClick={() => uncompressItem({ id })} className={`bg-azul3 cursor-pointer rounded-md h-8 w-8 flex items-center justify-center ${ type ? "hidden":""}`}><FiMaximize2 size={20} /></div></div>
      <div className="flex items-center"><div onClick={() => deleteItem({ id })} className="bg-[#bb1332] ml-2 cursor-pointer rounded-md h-8 w-8 flex items-center justify-center"><FiTrash2 size={20} /></div></div>
      
    </div>

  );
}

export default FileItem;