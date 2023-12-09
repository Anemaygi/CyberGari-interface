import { FiMinus, FiPlus, FiSearch, FiTag, FiTrash } from "react-icons/fi";
import { Input } from "./ui/input";
import IconButton from "./icon-button";
import Modal from 'react-modal';
import React, { useEffect, useState } from "react";
import Button from "./button";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";




Modal.setAppElement('#root');

interface CreateModalProps {
    isOpen: boolean;
    OnRequestClose: React.ReactEventHandler
}

interface Tag {
    name: string,
    tagPriority: number,
    tagColor: string,
}


const CreateModal: React.FC<CreateModalProps> = ({ isOpen, OnRequestClose }) => {
    const [tag, setTag] = useState<Tag>({ name: "", tagPriority: 3, tagColor: "#D9D9D9" })
    const [warning, setWarning] = useState<string>("");

    const bg = {
        overlay: {
            background: 'rgba(0, 0, 0, 0.5)'
        }
    };

    const colors = ["#D9D9D9", "#07C8C5", "#0E557C", "#0077C2", "#002FCB", "#ED0EE4", "#835BC5"]

    const [user, setUser] = useState<any | null>(null);
    useEffect(() => {
        if (!user && localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')!));
        }
    }, [])

    const handleCreate = () => {


        if (!tag.name) {
            setWarning("NoName")
            return
        }
        setWarning("Loading")
        if (user) {
            fetch(`http://localhost:8080/tags/${user.userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(tag),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Status: ${response.status}`);
                    }
                    setWarning("Sucess")
                    if (response.headers.get('content-length') !== '0') {
                        return response.json();
                    } else {
                        return null;
                    }

                }
                )
                .then((data) => {
                    if (data) {
                        console.log(data);
                    }
                })
                .catch(error => {
                    setWarning("Error")
                    console.error(error)
                });
        }
    }


    const selectFunction = (newColor: string): void => {
        setTag((prev) => ({
            ...prev,
            tagColor: newColor
        }))
    };



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


                <h2 className={`${warning == "Loading" ? "text-roxo1" : warning == "Error" ? "text-red-500" : warning == "Sucess" ? "text-green-500" : "hidden"} font-bold text-lg my-3 text-center`}>{warning == "Loading" ? "Carregando..." : warning == "Error" ? "Não foi possível criar a tag, tente novamente mais tarde" : warning == "Sucess" ? "Tag criada com sucesso!" : ""}</h2>

                <label className="font-bold">Nome</label>
                <p className={`${warning == "NoName" ? "text-red-500" : "hidden"}`}>Não é possível criar tags sem um nome</p>
                <Input
                    onChange={(e) => {
                        setWarning("")
                        setTag((prev) => ({ ...prev, name: e.target.value }));
                    }}
                    type="text" placeholder="Nome da Tag" className="w-full bg-[#D9D9D9] text-black mt-3 mb-5" />

                <label className="font-bold">Cor da Tag</label><br />
                <div className="w-full grid grid-cols-2 lg:grid-cols-7 items-center">
                    {

                        colors.map(scolor => (
                            <button style={{ backgroundColor: scolor }} className={`${tag.tagColor == scolor ? 'border-white shadow-xl border-2' : ''} mx-auto mt-3 mb-8 rounded-full h-[30px] w-[30px] col-span-1`} onClick={() => selectFunction(scolor)} />
                        ))
                    }
                </div>

                <label className="font-bold">Importância do Arquivo</label>
                <div className="w-full grid grid-cols-12 mt-5 mb-10 gap-1">
                    <FiMinus size={20} color="white" className="hidden md:grid col-span-1 mx-auto" />
                    <Slider defaultValue={[3]} max={10} step={1} className="col-span-12 md:col-span-10"
                        onValueChange={
                            (e) => {
                                setTag((prev) => ({
                                    ...prev,
                                    tagPriority: e[0]
                                }))
                            }} />
                    <FiPlus size={20} color="white" className="hidden md:grid col-span-1 mx-auto" />
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-9 mt-10">
                    <div className="col-span-1 lg:col-start-3"><Button title={"Criar"} handleClick={handleCreate} /></div>
                    <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={(e) => {
                        OnRequestClose(e)
                        setWarning("")
                    }}>
                        Cancelar</button>
                </div>
            </div>
        </Modal>

    );
};

interface AddTagModalProps {
    isOpen: boolean,
    OnRequestClose: React.ReactEventHandler,
    getFileList: () => string[],
}

interface FileTagUpdateVO {
    fileId: string,
    tagNames: Array<string>
}

const AddTagModal: React.FC<AddTagModalProps> = ({ isOpen, OnRequestClose, getFileList }) => {
    const [user, setUser] = useState<any | null>(null);
    const [tagList, setTagList] = useState<Array<Tag>>([]);
    const [addTagName, setAddTagName] = useState<string>("");
    const [requestBody, setRequestBody] = useState<Array<FileTagUpdateVO>>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!user && localStorage.getItem('user')) {
                setUser(JSON.parse(localStorage.getItem('user')!));
            }

            if (user) {
                fetch(`http://localhost:8080/tags/${user.userId}`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => setTagList(json))
                    .catch(error => console.error(error));
            }
        }

        fetchData()

    }, [user])



    const bg = {
        overlay: {
            background: 'rgba(0, 0, 0, 0.5)'
        }
    };

    const [warning, setWarning] = useState<string>("");

    const handleAddButton = (): void => {

        setWarning("Loading")
        const fileList = getFileList();
        let requestList: Array<FileTagUpdateVO> = []
        for (const file of fileList) {
            const newItem: FileTagUpdateVO = {
                fileId: file,
                tagNames: [addTagName],
            };
            requestList.push(newItem);
        }
        setRequestBody(requestList)

        fetch(`http://localhost:8080/tags/files/${user.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(requestBody),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Status: ${response.status}`);
                }
                setWarning("Sucess")

            }
            )
            .catch(error => {
                setWarning("Error")
                console.error(error)
            });
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
                <h2 className={`${warning == "Loading" ? "text-roxo1" : warning == "Error" ? "text-red-500" : warning == "Sucess" ? "text-green-500" : "hidden"} font-bold text-lg my-3 text-center`}>
                    {warning == "Loading" ? "Carregando..." : warning == "Error" ? "Não foi possível adicionar os arquivos na tag, tente mais tarde." : warning == "Sucess" ? "Arquivos adicionados na tag com sucesso!" : ""}
                </h2>
                <Select onValueChange={(e) => setAddTagName(e)}>
                    <SelectTrigger className="w-full bg-[#D9D9D9] text-black mt-3 mb-5">
                        <SelectValue placeholder={"Nome da Tag"} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#D9D9D9] text-black" >
                        {tagList.map((tag) => (
                            <SelectItem key={tag.name} value={tag.name}>
                                {tag.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <div className="grid grid-cols-1 lg:grid-cols-9 mt-10 text-center">
                    <div className="col-span-1 lg:col-start-3 mr-5"><Button title={"Adicionar"} handleClick={handleAddButton} /></div>
                    <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={(e) => {
                        OnRequestClose(e)
                        setWarning("")
                    }}>Fechar</button>
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
                    <div className=""><Button title={"Fechar"} handleClick={OnRequestClose} /></div>
                </div>
            </div>
        </Modal>
    );

}

interface RemoveTagModalProps {
    isOpen: boolean;
    listSize: number;
    OnRequestClose: React.ReactEventHandler
    getFileList: () => string[],

}

const RemoveTagModal: React.FC<RemoveTagModalProps> = ({ isOpen, OnRequestClose, listSize, getFileList }) => {
    const [user, setUser] = useState<any | null>(null);
    const [tagList, setTagList] = useState<Array<Tag>>([]);
    const [addTagName, setAddTagName] = useState<string>("");
    const [requestBody, setRequestBody] = useState<Array<FileTagUpdateVO>>([]);
    const [warning, setWarning] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            if (!user && localStorage.getItem('user')) {
                setUser(JSON.parse(localStorage.getItem('user')!));
            }

            if (user) {
                fetch(`http://localhost:8080/tags/${user.userId}`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => setTagList(json))
                    .catch(error => console.error(error));
            }
        }

        fetchData()

    }, [user])


    const handleRemoveButton = (): void => {

        setWarning("Loading")
        const fileList = getFileList();
        let requestList: Array<FileTagUpdateVO> = []
        for (const file of fileList) {
            const newItem: FileTagUpdateVO = {
                fileId: file,
                tagNames: [],
            };
            requestList.push(newItem);
        }

        setRequestBody(requestList)

        fetch(`http://localhost:8080/tags/files/${user.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(requestBody),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Status: ${response.status}`);
                }
                setWarning("Sucess")

            }
            )
            .catch(error => {
                setWarning("Error")
                console.error(error)
            });
    };



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
                <h2 className={`${warning == "Loading" ? "text-roxo1" : warning == "Error" ? "text-red-500" : warning == "Sucess" ? "text-green-500" : "hidden"} font-bold text-lg my-3`}>
                    {warning == "Loading" ? "Carregando..." : warning == "Error" ? "Não foi possível remover os arquivos de suas tags, tente mais tarde." : warning == "Sucess" ? "Arquivos removidos de suas tags com sucesso!" : ""}
                </h2>
                <p className="mb-5">Deseja excluir as tags em {listSize} arquivos?</p>

                <div className="grid grid-cols-1 lg:grid-cols-9 mt-3 text-center">
                    <div className="col-span-1 lg:col-start-3 mr-5"><Button title={"Remover"} handleClick={handleRemoveButton} /></div>
                    <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={(e) => {
                        OnRequestClose(e)
                        setWarning("")
                    }}>Fechar</button>
                </div>
            </div>
        </Modal>
    );

}

interface LabelsMenuProps {
    getFileList: () => string[],
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}


interface DeleteModalProps {
    isOpen: boolean,
    OnRequestClose: React.ReactEventHandler,
}


const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, OnRequestClose }) => {
    const [user, setUser] = useState<any | null>(null);
    const [tagList, setTagList] = useState<Array<Tag>>([]);
    const [tagName, setTagName] = useState<string>("");
    const [warning, setWarning] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            if (!user && localStorage.getItem('user')) {
                setUser(JSON.parse(localStorage.getItem('user')!));
            }

            if (user) {
                fetch(`http://localhost:8080/tags/${user.userId}`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => setTagList(json))
                    .catch(error => console.error(error));
            }
        }

        fetchData()

    }, [user])



    const bg = {
        overlay: {
            background: 'rgba(0, 0, 0, 0.5)'
        }
    };



    const handleAddButton = (): void => {

        setWarning("Loading")

        fetch(`http://localhost:8080/tags/${user.userId}/${tagName}`, {
            method: 'DELETE',
        })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error(`Status: ${response.status}`);
                }
                setWarning("Sucess")
            }
            )
            .catch(error => {
                setWarning("Error")
                console.error(error)
            });
    };






    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            className="m-auto my-[5%] bg-secbackground border-0 text-white shadow-md font-inter w-[50%] rounded-lg"
            style={bg}
        >
            <div className="p-10">
                <h2 className="font-bold text-lg my-3">DELETAR TAG</h2>
                <h2 className={`${warning == "Loading" ? "text-roxo1" : warning == "Error" ? "text-red-500" : warning == "Sucess" ? "text-green-500" : "hidden"} font-bold text-lg my-3 text-center`}>
                    {warning == "Loading" ? "Carregando..." : warning == "Error" ? "Não foi possível deletar a tag, tente mais tarde." : warning == "Sucess" ? "Tag deletada com sucesso!" : ""}
                </h2>
                <Select onValueChange={(e) => setTagName(e)}>
                    <SelectTrigger className="w-full bg-[#D9D9D9] text-black mt-3 mb-5">
                        <SelectValue placeholder={"Nome da Tag"} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#D9D9D9] text-black" >
                        {tagList.map((tag) => (
                            <SelectItem key={tag.name} value={tag.name}>
                                {tag.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <div className="grid grid-cols-1 lg:grid-cols-9 mt-10 text-center">
                    <div className="col-span-1 lg:col-start-3 mr-5"><Button title={"Deletar"} handleClick={handleAddButton} /></div>
                    <button className="col-span-1 lg:col-start-6 lg:pl-7" onClick={(e) => {
                        OnRequestClose(e)
                        setWarning("")
                    }}>Fechar</button>
                </div>
            </div>

        </Modal>
    );
}

const LabelsMenu: React.FC<LabelsMenuProps> = ({ getFileList, setSearch }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [addIsOpen, setAddIsOpen] = React.useState(false);
    const [removeIsOpen, setRemoveIsOpen] = React.useState(false);
    const [failIsOpen, setFailIsOpen] = React.useState(false);
    const [deleteIsOpen, setDeleteIsOpen] = React.useState(false);

    function abrirDeleteModal() {
        setDeleteIsOpen(true);
    }

    function fecharDeleteModal() {
        setDeleteIsOpen(false);
    }

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    function abrirAddModal() {
        if (getFileList().length === 0) {
            setFailIsOpen(true);
        } else {
            setAddIsOpen(true);
        }
    }

    function fecharAddModal() {
        setAddIsOpen(false);
    }

    function abrirRemoveModal() {
        if (getFileList().length === 0) {
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




    return (
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 mr-5">
            <div className="w-full flex justify-end font-inter my-3 relative col-span-1 lg:col-span-3">
                <Input className="text-white bg-secbackground border-0 rounded-xl p-5" placeholder="Pesquisar" onChange={(e) => {

                    setSearch(e.target.value)
                }} />
                <FiSearch size={25} color="#FFFFFF" className="mr-7 mt-2 absolute" />
            </div>
            <div className="w-full font-inter col-span-1" title="Criar nova tag">
                <IconButton icon={<FiTag size={25} />} title="" handleClick={abrirModal} />
            </div>
            <CreateModal isOpen={modalIsOpen} OnRequestClose={fecharModal} />
            <div className="w-full font-inter col-span-1" title="Adicionar arquivos à tag">
                <IconButton icon={<FiPlus size={25} />} title="" handleClick={abrirAddModal} />
            </div>
            <AddTagModal isOpen={addIsOpen} OnRequestClose={fecharAddModal} getFileList={getFileList} />
            <div className="w-full font-inter col-span-1" title="Remover tags de arquivos">
                <IconButton icon={<FiMinus size={25} />} title="" handleClick={abrirRemoveModal} />
            </div>
            <RemoveTagModal isOpen={removeIsOpen} OnRequestClose={fecharRemoveModal} listSize={getFileList().length} getFileList={getFileList} />
            <div className="w-full font-inter col-span-1" title="Deletar tags">
                <IconButton icon={<FiTrash size={25} />} title="" handleClick={abrirDeleteModal} />
            </div>
            <DeleteModal isOpen={deleteIsOpen} OnRequestClose={fecharDeleteModal} />


            <FailModal isOpen={failIsOpen} OnRequestClose={fecharFailModal} />
        </div>
    );
};

export default LabelsMenu;