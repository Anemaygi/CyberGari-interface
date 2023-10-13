import React, {useState} from 'react';
import { FiFileText, FiTrash2, FiMaximize2 } from "react-icons/fi";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import FileItem from './file-item';

const ReportList: React.FC = () => {
  const [type, setType] = useState(true);

  const switchToggle = () => {
    setType(!type);
    console.log("clicouuu");
  };

  
  const files = {
    "toDeleteFiles": [
      {
        "id": "1",
        "name": "File 1",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "2",
        "name": "File 2",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "3",
        "name": "File 3",
        "lastViewedDate": "05/08/2023"
      },
      {
        "id": "4",
        "name": "File 4",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "5",
        "name": "File 5",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "6",
        "name": "File 6",
        "lastViewedDate": "05/08/2023"
      },
      {
        "id": "7",
        "name": "File 7",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "8",
        "name": "File 8",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "9",
        "name": "File 9",
        "lastViewedDate": "05/08/2023"
      }
    ],
    "compressedFiles": [
      {
        "id": "1",
        "name": "Teste 1",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "2",
        "name": "R 2",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "3",
        "name": "G 3",
        "lastViewedDate": "05/08/2023"
      },
      {
        "id": "4",
        "name": "B 4",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "5",
        "name": "F 5",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "6",
        "name": "H 6",
        "lastViewedDate": "05/08/2023"
      },
      {
        "id": "7",
        "name": "I 7",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "8",
        "name": "J 8",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "9",
        "name": "K 9",
        "lastViewedDate": "05/08/2023"
      }
    ]
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
              files.toDeleteFiles.map(file => (
                <div className="m-2">
                  <FileItem id={file.id} name={file.name} lastView={file.lastViewedDate} type={type} />
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
              :
              files.compressedFiles.map(file => (
                <div className="m-2">
                  <FileItem id={file.id} name={file.name} lastView={file.lastViewedDate} type={type} />
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
            }
            
            </div>
        </Card>
   
  );
};

export default ReportList;
