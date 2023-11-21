import { faDatabase, faEye, faMaximize, faPuzzlePiece, faTag, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { userConfig } from "./settings-form";

type SettingsProps = {
    isDescriptionOn: boolean;
    configs: userConfig;
    setConfigs: React.Dispatch<React.SetStateAction<userConfig>>;
};
  
const ParametersTitle: React.FC<SettingsProps> = ({
    isDescriptionOn
}) => (
    <div className="mb-5">
        <h2 className="font-bold text-lg">Quais parâmetros dos arquivos podemos acessar?</h2>
        { isDescriptionOn === true ? (
            <p className="text-justify">Nós apenas acessaremos os parâmetros que você nos der permissão. Quanto mais 
                parâmetros, melhor será a análise!</p>
                ) : (<></>)
        }
    </div>
);

type ParametersProps = {
    id: string;
    text: string;
    icon: React.ReactNode;
    value: boolean;
    onChange: () => void;
};

const ParametersCards: React.FC<ParametersProps> = ({id, text, icon, value, onChange}) => {
    const [backgroundColor, setColor] = useState("");

    const handleChange = () => {
        if(backgroundColor === "") {
            setColor("border-roxo1 border text-roxo1")
        } else {
            setColor("")
        }
    }

    return (
        <>
        <label className={`${backgroundColor} cursor-pointer px-2 py-3 bg-secbackground font-bold text-md h-28 flex shadow-lg rounded-lg float-left relative`}>
            <div className={`h-6 w-6 bg-roxo1 flex items-center justify-center absolute rounded-full -top-2 -right-2 ${backgroundColor == "" ? 'hidden' : ''}`}>
                <div className='text-white'><FiCheck size={15}/></div>
            </div>
            <div className="flex items-center" onChange={handleChange}>
                <input type="checkbox" checked={value} onChange={onChange}
                className="hidden"
                />
                <div className="mx-3 text-[2rem]" > {icon} </div>
                <div>{text}</div>
            </div>
        </label>
        </>
    );

};

const ParametersForm: React.FC<SettingsProps> = ({isDescriptionOn, configs, setConfigs}) => {
    const [checkedExtension, setCheckedExtension] = React.useState(false);
    const [checkedSize, setCheckedSize] = React.useState(false);
    const [checkedAccess, setCheckedAccess] = React.useState(false);
    const [checkedViews, setCheckedViews] = React.useState(false);
    const [checkedTags, setCheckedTags] = React.useState(false);
    const [checkedOther, setCheckedOther] = React.useState(false);

    const handleChangeExtension = () => {
        setCheckedExtension((prevValue) => !prevValue);
        setConfigs((currValue) => ({
            ...currValue,
            fileExtension: !checkedExtension,
        }));
    };
    

    const handleChangeSize = () => {
        setCheckedSize((prevValue) => !prevValue);
        setConfigs(currValue => ({
            ...currValue,
            fileSize: !checkedSize,
            }));
    };

    const handleChangeAccess = () => {
        setCheckedAccess(!checkedAccess);
        // NOT IN THE OBJECT
    };

    const handleChangeViews = () => {
        setCheckedViews((prevValue) => !prevValue);
        setConfigs(currValue => ({
            ...currValue,
            numVisualizations: !checkedViews,
            }));
    };

    const handleChangeTags = () => {
        setCheckedTags((prevValue)=>!prevValue)
        setConfigs(currValue => ({
            ...currValue,
            tags: !checkedTags,
            }));
    };

    const handleChangeOther = () => {
        setCheckedOther(!checkedOther);
        // NOT IN THE OBJECT
    };

    const cardsContent = [
        { 
          id: "file-extension",
          texto: "Extensão do arquivo",
          icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
          value: checkedExtension,
          function: handleChangeExtension
        },
        { 
            id: "file-size",
            texto: "Tamanho do arquivo",
            icon: <FontAwesomeIcon icon={faMaximize} />,
            value: checkedSize,
            function: handleChangeSize
        },
        { 
            id: "file-access",
            texto: "Acessos do arquivo",
            icon: <FontAwesomeIcon icon={faUserGroup} />,
            value: checkedAccess,
            function: handleChangeAccess
        },
        { 
            id: "file-views",
            texto: "Visualização dos arquivos",
            icon: <FontAwesomeIcon icon={faEye} />,
            value: checkedViews,
            function: handleChangeViews
        },
        { 
            id: "file-tags",
            texto: "Tags dos arquivos",
            icon: <FontAwesomeIcon icon={faTag} />,
            value: checkedTags,
            function: handleChangeTags
        },
        { 
            id: "file-other",
            texto: "Outros metadados",
            icon: <FontAwesomeIcon icon={faDatabase} />,
            value: checkedOther,
            function: handleChangeOther
        },  
      ];

  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white my-10 w-full">
        
        <ParametersTitle isDescriptionOn={isDescriptionOn} configs={configs} setConfigs={setConfigs}/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsContent.map((item) => (
                    <ParametersCards key={item.id} id={item.id} text={item.texto} icon={item.icon} value={item.value} onChange={item.function}/>
            ))}
        </div>
    
    </div>
    );
};

export default ParametersForm;