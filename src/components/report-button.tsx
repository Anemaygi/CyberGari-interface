import React, { useEffect, useState } from 'react';
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
import { UserReport } from '@/pages/dashboard';
 

interface CompressButtonProps{
  id: string;
  handleCompress: (id: string) => void
}

const CompressButton: React.FC<CompressButtonProps> = ({id, handleCompress}) => {
  function compressItem(id: String){
    console.log("Comprime "+id);
  }  
  
  return(
    <div className="flex items-center"><div onClick={() => handleCompress( id )} className="bg-azul2 ml-2 cursor-pointer  text-xs rounded-md py-1 px-4 flex items-center justify-center">Comprimir</div></div>
  );
}



interface ReportButtonProps {
  size: number;
  handleClick: () => void
  getReport: () => UserReport
}

const ReportButton: React.FC<ReportButtonProps> = ({size, handleClick, getReport}) => {
  const [report, setReport] = useState<UserReport>();
  const [filesToCompress, setFilesToCompress] = useState([{ id: "", name: "", size: 0, modifiedTime: "" }]);

  const handleFileCompress = (id : string) => {
    const user = JSON.parse(localStorage.getItem('user')!);

    const reportConfirmation = {
      filesToDelete: [],
      filesToCompress: [id],
      reportId: localStorage.getItem('reportId'),
      userId: user.userId
    }

    fetch(`http://localhost:8080/reports`, { 
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT', body: JSON.stringify(reportConfirmation)
    }).catch(error => console.error(error));

    handleCompressList(id)
  }
  
  
  const handleReport = () => {
    handleClick();
    setReport(getReport());
  }

  useEffect(() => {
    handleReport();
  }, [])
  
  useEffect(() => {
    if (report) {
      setFilesToCompress(report!.filesToCompress)
    }
  }, [report])

  const handleCompressList = (id: string) => {
    const updatedFiles = filesToCompress.filter(file => file.id !== id);
    setFilesToCompress(updatedFiles)
  }

  const handleCompressAll = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    const reportConfirmation = {
      filesToDelete: [],
      filesToCompress: report!.filesToCompress.map(file => file.id),
      reportId: localStorage.getItem('reportId'),
      userId: user.userId
    }

    fetch(`http://localhost:8080/reports`, { 
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT', body: JSON.stringify(reportConfirmation)
    }).catch(error => console.error(error));

    setFilesToCompress([]);
  }

  return (
    <>
    <AlertDialog>
      
      <AlertDialogTrigger asChild>
        <div className="shadow-md border-2 border-roxo1 rounded-full p-2 inline-flex cursor-pointer h-72 w-72" onClick={handleReport}>
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
          { report && filesToCompress &&
            filesToCompress.map((file,idx) => (
                  <div className="m-2" key={idx}>
                    <FileItem file={file} action={<CompressButton id={file.id} handleCompress={handleFileCompress}/>} />
                    <div className="h-px bg-white/10 my-2"></div>
                  </div>
                ))
                }
        </div>
        </div>

        <AlertDialogFooter className="flex items-center">
          <AlertDialogAction>
          <div className="shadow-sm bg-gradient-to-r m-0 from-roxo1 to-roxo2 w-auto py-2 px-4 cursor-pointer rounded-2xl flex items-center justify-center" onClick={handleCompressAll}>
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
