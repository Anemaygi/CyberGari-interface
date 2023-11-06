import { FiPlus, FiSearch, FiTag, FiTrash } from "react-icons/fi";
import { Input } from "./ui/input";
import IconButton from "./icon-button";
import Modal from 'react-modal';
import React from "react";
import Button from "./button";
import { Slider } from "./ui/slider";


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
                className="m-auto my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded"
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
                    <Slider defaultValue={[3]} max={10} step={1} className=" mt-5 mb-10" />


                    <div className="grid grid-cols-1 lg:grid-cols-9 mt-10">
                        <div className="col-span-1 lg:col-start-3"><Button title={"Criar"} handleClick={() => console.log("Criar")}/></div>
                        <button className="col-span-1 lg:col-start-6" onClick={OnRequestClose}>Cancelar</button>
                    </div>
                </div>
            </Modal>

    );
};


const LabelsMenu: React.FC = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    var color = "";

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    function selectColor(newColor : string) {
        color = newColor;
        console.log("socorro");
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
                <IconButton icon={<FiPlus size={25}/>} title="" handleClick={() => console.log("oi")} />
            </div>
            <div className="w-full font-inter col-span-1">
                <IconButton icon={<FiTrash size={25}/>} title="" handleClick={() => console.log("oi")} />
            </div>
        </div>
      );
  };

export default LabelsMenu;