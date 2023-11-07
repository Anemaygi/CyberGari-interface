import { FiMinus, FiPlus, FiSearch, FiTag, FiTrash } from "react-icons/fi";
import { Input } from "./ui/input";
import IconButton from "./icon-button";
import Modal from 'react-modal';
import React from "react";
import Button from "./button";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


Modal.setAppElement('#root');

interface CreateModalProps {
    isOpen: boolean;
    OnRequestClose: React.ReactEventHandler
    selectFunction: (newColor: string) => void
}

const CreateModal: React.FC<CreateModalProps> = ({isOpen, OnRequestClose, selectFunction}) => {
    const bg = {
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)'
        }
      };

    const colors = ["#D9D9D9", "#07C8C5", "#0E557C", "#0077C2", "#002FCB", "#ED0EE4", "#835BC5"]

    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={OnRequestClose}
                className="m-auto lg:my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded"
                style={bg}
            >
                <div className="p-10">
                    <h2 className="font-bold text-lg my-3">CRIAR NOVA TAG</h2>
                    <p className="mb-5">Aqui você pode criar uma etiqueta personalizada! Quanto maior a importância da tag, menor 
                        a chance de ele ser selecionado para ser comprimido ou excluído.</p>
                    
                    <label className="font-bold">Nome</label>
                    <Input type="text" placeholder="Nome da Tag" className="w-full bg-[#D9D9D9] text-black mt-3 mb-5" />

                    <label className="font-bold">Cor da Tag</label><br/>
                    <div className="flex w-full grid grid-cols-2 lg:grid-cols-7 items-center">
                        {
                            colors.map(scolor => (
                                <button className={`bg-[${scolor}] mx-auto mt-3 mb-8 rounded-full h-[30px] w-[30px] col-span-1 focus:border-2 focus:border-white focus:shadow-xl`} onClick={() => selectFunction}/>
                            ))
                        }
                    </div>

                    <label className="font-bold">Importância do Arquivo</label>
                    <div className="w-full grid grid-cols-12 mt-5 mb-10 gap-1">
                        <FiMinus size={20} color="white" className="hidden md:grid col-span-1 mx-auto"/>
                        <Slider defaultValue={[3]} max={10} step={1} className="col-span-12 md:col-span-10" />
                        <FiPlus size={20} color="white" className="hidden md:grid col-span-1 mx-auto" />
                    </div>
                    


                    <div className="grid grid-cols-1 lg:grid-cols-9 mt-10">
                        <div className="col-span-1 lg:col-start-3"><Button title={"Criar"} handleClick={() => console.log("Criar")}/></div>
                        <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={OnRequestClose}>Cancelar</button>
                    </div>
                </div>
            </Modal>

    );
};

interface AddTagModalProps {
    isOpen: boolean;
    OnRequestClose: React.ReactEventHandler
}

const AddTagModal: React.FC<AddTagModalProps> = ({ isOpen, OnRequestClose }) => {
    const bg = {
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)'
        }
      };

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={OnRequestClose} 
            className="m-auto my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded-lg"
            style={bg}
        >
            <div className="p-10">
                <h2 className="font-bold text-lg my-3">ADICIONAR TAG</h2>
                <Select>
                    <SelectTrigger className="w-full bg-[#D9D9D9] text-black mt-3 mb-5">
                        <SelectValue placeholder="Nome da Tag" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#D9D9D9] text-black">
                        <SelectItem value="1">Nome da Tag 1</SelectItem>
                        <SelectItem value="2">Nome da Tag 2</SelectItem>
                        <SelectItem value="3">Nome da tag 3</SelectItem>
                    </SelectContent>
                </Select>

                <div className="grid grid-cols-1 lg:grid-cols-9 mt-10 text-center">
                    <div className="col-span-1 lg:col-start-3 mr-5"><Button title={"Criar"} handleClick={() => console.log("Adicionar")}/></div>
                    <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={OnRequestClose}>Fechar</button>
                </div>
            </div>

        </Modal>
    );
}

interface FailModalProps {
    isOpen: boolean;
    OnRequestClose: React.ReactEventHandler
}

const FailModal: React.FC<FailModalProps> = ({ isOpen, OnRequestClose }) => {
    const bg = {
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)'
        }
      };

      return (
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            className="m-auto my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded-lg"
            style={bg}
        >
             <div className="p-10">
                <h2 className="font-bold text-lg my-3">ATENÇÃO</h2>
                <p className="mb-5">Para adicionar ou retirar uma tag, primeiro você precisa selecionar os arquivos ou pastas
                    que contenham as tags de interesse.</p>

                <div className="text-center">
                    <div className=""><Button title={"Fechar"} handleClick={OnRequestClose}/></div>
                </div>
            </div>
        </Modal>
      );

}

interface RemoveTagModalProps {
    isOpen: boolean;
    listSize: number;
    OnRequestClose: React.ReactEventHandler
}

const RemoveTagModal: React.FC<RemoveTagModalProps> = ({ isOpen, OnRequestClose, listSize }) => {
    const bg = {
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)'
        }
      };

      return (
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            className="m-auto my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded-lg"
            style={bg}
        >
             <div className="p-10 text-center">
                <h2 className="font-bold text-lg my-3">ATENÇÃO</h2>
                <p className="mb-5">Deseja excluir as tags em {listSize} arquivos?</p>

                <div className="grid grid-cols-1 lg:grid-cols-9 mt-3 text-center">
                    <div className="col-span-1 lg:col-start-3 mr-5"><Button title={"Remover"} handleClick={() => console.log("Remover")}/></div>
                    <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={OnRequestClose}>Fechar</button>
                </div>
            </div>
        </Modal>
      );

}

interface LabelsMenuProps {
    getFileList: () => string[]
}


const LabelsMenu: React.FC<LabelsMenuProps> = ({getFileList}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [addIsOpen, setAddIsOpen] = React.useState(false);
    const [removeIsOpen, setRemoveIsOpen] = React.useState(false);
    const [failIsOpen, setFailIsOpen] = React.useState(false);
    
    var color = "";

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    function abrirAddModal() {
        if(getFileList().length === 0) {
            setFailIsOpen(true);
        } else {
            setAddIsOpen(true);
        }
    }

    function fecharAddModal() {
        setAddIsOpen(false);
    }

    function abrirRemoveModal() {
        if(getFileList().length === 0) {
            setFailIsOpen(true);
        } else {
            setRemoveIsOpen(true);
        }
    }

    function fecharRemoveModal() {
        setRemoveIsOpen(false);
    }

    function fecharFailModal() {
        setFailIsOpen(false);
    }

    function selectColor(newColor : string) {
        color = newColor;
    }


    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 mr-5">
            <div className="w-full flex justify-end font-inter my-3 relative col-span-1 lg:col-span-3">
                <Input className="text-white bg-secbackground border-0 rounded-xl p-5" placeholder="Pesquisar"/>
                <FiSearch size={25} color="#FFFFFF" className="mr-7 mt-2 absolute"/>
            </div>
            <div className="w-full font-inter col-span-1">
                <IconButton icon={<FiTag size={25}/>} title="" handleClick={abrirModal} />
            </div>
            <CreateModal isOpen={modalIsOpen} OnRequestClose={fecharModal} selectFunction={selectColor}/>
            <div className="w-full font-inter col-span-1">
                <IconButton icon={<FiPlus size={25}/>} title="" handleClick={abrirAddModal} />
            </div>
            <AddTagModal isOpen={addIsOpen} OnRequestClose={fecharAddModal} />
            <div className="w-full font-inter col-span-1">
                <IconButton icon={<FiTrash size={25}/>} title="" handleClick={abrirRemoveModal} />
            </div>
            <RemoveTagModal isOpen={removeIsOpen} OnRequestClose={fecharRemoveModal} listSize={getFileList().length}/>
            <FailModal isOpen={failIsOpen} OnRequestClose={fecharFailModal}/>
        </div>
      );
  };

export default LabelsMenu;