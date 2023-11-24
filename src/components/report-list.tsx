import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import Button from "./button";
import { FiFileText, FiTrash2, FiMaximize2 } from "react-icons/fi";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import FileItem from './file-item';
import { type } from 'os';

interface DeleteModalProps {
  isOpen: boolean;
  OnRequestClose: React.ReactEventHandler
  id: string
  handleDelete: (id: string) => void
}

type ReportConfirmation = {
  filesToDelete: string[],
  filestoCompress: string[],
  reportId: string,
  userId: string
}

const DeleteModal: React.FC<DeleteModalProps> = ({isOpen, OnRequestClose, id })  => {
  const bg = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)'
    }
  };

  const handleFileRemoval = () => {
    const user = JSON.parse(localStorage.getItem('user')!);

    const reportConfirmation = {
      filesToDelete: [id],
      filesToCompress: [],
      reportId: localStorage.getItem('reportId'),
      userId: user.userId
    }

    fetch(`http://localhost:8080/reports`, { 
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT', body: JSON.stringify(reportConfirmation)
    }).catch(error => console.error(error));

    OnRequestClose
  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={OnRequestClose}
        className="m-auto my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded-lg"
        style={bg}
    >
         <div className="p-10 text-center">
            <h2 className="font-bold text-lg my-3">ATENÇÃO</h2>
            <p className="mb-5">Tem certeza que deseja excluir esse arquivo?</p>

            <div className="grid grid-cols-1 lg:grid-cols-9 mt-3 text-center">
                <div className="col-span-1 lg:col-start-3 mr-5"><Button title={"Remover"} handleClick={handleFileRemoval}/></div>
                <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={OnRequestClose}>Fechar</button>
            </div>
        </div>
    </Modal>
  );
}


interface ActionButtonProps {
  id: string;
  handleDelete: (id: string) => void
}

const DeleteButton: React.FC<ActionButtonProps> = ({ id, handleDelete })  => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }
  
  const deleteItem = (id: String) => {
    console.log("Deletou "+id);
  };
    
  return(
    <>
      <div className="flex items-center"><div onClick={abrirModal} className="bg-[#bb1332] ml-2 cursor-pointer rounded-md h-8 w-8 flex items-center justify-center"><FiTrash2 size={20} /></div></div>
      <DeleteModal isOpen={modalIsOpen} OnRequestClose={fecharModal} id={id} handleDelete={handleDelete}/>
    </>
  );
}

const UncompressButton: React.FC<ActionButtonProps> = ({ id })  => {
  
  const uncompressItem = (id: String) => {
    console.log("Comprimiu "+id);
  };
    
  return(
    <>
      <div className="flex items-center"><div onClick={() => uncompressItem( id )} className={`bg-azul3 cursor-pointer rounded-md h-8 w-8 flex items-center justify-center`}><FiMaximize2 size={20} /></div></div>
      <DeleteButton id={id} handleDelete={() => console.log("clicou")}/>
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
  const [filesToDelete, setFilesToDelete] = useState([{ id: "", name: "", size: 0, modifiedTime: "" }]);

  useEffect(() => {
    setFilesToDelete(report.filesToDelete);
  }, [report])

  const handleDelete = (id: string) => {
    const updatedFiles = filesToDelete.filter(file => file.id !== id);
    setFilesToDelete(updatedFiles)
  }

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
            
            { type && filesToDelete ? 
              filesToDelete.map(file => (
                <div className="m-2">
                  <FileItem file={file} action={<DeleteButton handleDelete={handleDelete} id={file.id}/>}/>
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
              :
              report.filesToCompress.map(file => (
                <div className="m-2">
                  <FileItem file={file} action={<UncompressButton handleDelete={(irra) => console.log(irra)} id={file.id}/>} />
                  <div className="h-px bg-white/10 my-2"></div>
                </div>
              ))
            }
            
            </div>
        </Card>
   
  );
};

export default ReportList;
