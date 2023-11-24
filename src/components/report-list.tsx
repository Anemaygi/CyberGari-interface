import React, {useState} from 'react';
import { FiFileText, FiTrash2, FiMaximize2 } from "react-icons/fi";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import FileItem from './file-item';


interface ActionButtonProps {
  id: string;
}

const DeleteButton: React.FC<ActionButtonProps> = ({ id })  => {
  
  const deleteItem = (id: String) => {
    console.log("Deletou "+id);
  };
    
  return(
    <div className="flex items-center"><div onClick={() => deleteItem( id )} className="bg-[#bb1332] ml-2 cursor-pointer rounded-md h-8 w-8 flex items-center justify-center"><FiTrash2 size={20} /></div></div>
  );
}

const UncompressButton: React.FC<ActionButtonProps> = ({ id })  => {
  
  const uncompressItem = (id: String) => {
    console.log("Comprimiu "+id);
  };
    
  return(
    <>
      <div className="flex items-center"><div onClick={() => uncompressItem( id )} className={`bg-azul3 cursor-pointer rounded-md h-8 w-8 flex items-center justify-center`}><FiMaximize2 size={20} /></div></div>
      <DeleteButton id={id} />
    </>
  );
}

type File = {
  id: string;
  name: string;
  size: number;
  modifiedTime: string;
}

type UserReport = {
  id: string;
  filesToCompress: File[];
  filesToDelete: File[];
  fileCount: number;
}


type ReportsListProps = {
  report: UserReport;
}


const ReportList: React.FC<ReportsListProps> = ({report}) => {
  const [type, setType] = useState(true);

  const switchToggle = () => {
    setType(!type);
    console.log("clicouuu");
  };
   

  return (

        <Card className="shadow-md bg-[#121625] text-center w-full h-full rounded-3xl text-white border-0 flex flex-col items-center p-8">
          <CardContent>
          <div className="bg-[#3C3A56]/40 flex grow px-1 py-1 rounded-xl space-x-1 text-white w-full cursor-pointer" onClick={switchToggle}>
            <div className={`w-32 none rounded-xl py-0.5 transition-all ${type ? "bg-roxo2" : "" } `}>A excluir</div>
            <div className={`w-32 rounded-xl py-0.5 transition-all ${!type ? "bg-roxo2" : "" }`}>Comprimidos</div>
          </div>
          </CardContent>
                   
          <div className="overflow-y-auto grow w-full h-56 m-2">
            
            { type ? 
              report.filesToDelete.map(file => (
                <div className="m-2">
                  <FileItem file={file} action={<DeleteButton id={file.id}/>}/>
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
              :
              report.filesToCompress.map(file => (
                <div className="m-2">
                  <FileItem file={file} action={<UncompressButton id={file.id}/>} />
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
            }
            
            </div>
        </Card>
   
  );
};

export default ReportList;
