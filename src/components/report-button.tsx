import React from 'react';
import { FiSearch } from "react-icons/fi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import FileItem from './file-item';
 


interface ReportButtonProps {
  size: number;
}

const ReportButton: React.FC<ReportButtonProps> = ({size}) => {
  const handleClick = () => {
    console.log("clicouuu");
  };


  const files = {
    "toCompressFiles": [
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
      },
      {
        "id": "10",
        "name": "Teste 1",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "12",
        "name": "R 2",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "13",
        "name": "G 3",
        "lastViewedDate": "05/08/2023"
      },
      {
        "id": "14",
        "name": "B 4",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "15",
        "name": "F 5",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "16",
        "name": "H 6",
        "lastViewedDate": "05/08/2023"
      },
      {
        "id": "17",
        "name": "I 7",
        "lastViewedDate": "01/10/2023"
      },
      {
        "id": "18",
        "name": "J 8",
        "lastViewedDate": "15/09/2023"
      },
      {
        "id": "19",
        "name": "K 9",
        "lastViewedDate": "05/08/2023"
      }
    ]
  };

  return (
    <>
    <AlertDialog>
      
      <AlertDialogTrigger asChild>
        <div className="shadow-md border-2 border-roxo1 rounded-full p-2 inline-flex cursor-pointer h-72 w-72" onClick={handleClick}>
          <div className="bg-gradient-to-r m-1 from-roxo1 to-roxo2 w-full rounded-full flex items-center justify-center">
            <div className="text-white"> <FiSearch size={size}/> </div>
          </div>
        </div>
      </AlertDialogTrigger>
      
      
      <AlertDialogContent className="bg-secbackground border-0 text-white shadow-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
          Ao comprimir arquivos, eles não serão mais acessáveis pelo Google Drive. Para acessá-los novamente, você precisará descomprimi-los pela interface.
          </AlertDialogDescription>
          
        </AlertDialogHeader>
        <AlertDialogDescription className="text-center">Nossa análise sugere que você comprima os seguintes arquivos:</AlertDialogDescription>

        <div className="m-5">
        <div className="overflow-y-auto grow w-full h-56">
          {
          files.toCompressFiles.map(file => (
                <div className="m-2">
                  <FileItem id={file.id} name={file.name} lastView={file.lastViewedDate} type={true} />
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
              }
        </div>
        </div>

        <AlertDialogFooter className="flex items-center">
          <AlertDialogAction>
          <div className="shadow-sm bg-gradient-to-r m-0 from-roxo1 to-roxo2 w-auto py-2 px-4 cursor-pointer rounded-2xl flex items-center justify-center" onClick={()=>{console.log("Comprmir todos")}}>
            <div className="text-white">Comprimir todos os arquivos</div>
          </div>
          </AlertDialogAction>
          <AlertDialogCancel className="text-roxo2 border-0 py-2 m-0">Cancel</AlertDialogCancel>   
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    
    
    
    </>
  );
};


export default ReportButton;
