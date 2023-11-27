import { faDatabase, faEye, faMaximize, faPuzzlePiece, faTag, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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
    const [backgroundColor, setBackgroundColor] = useState(value ? "border-roxo1 border text-roxo1" : "");

    const handleChange = () => {
        setBackgroundColor((prevColor) => (prevColor === "" ? "border-roxo1 border text-roxo1" : ""));
        onChange(); // Trigger the onChange function passed from the parent component
    };

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
    const [loading, setLoading] = React.useState(true);
    const [cardsContent, setCardsContent] = useState<ParametersProps[]>([]);

    const [checkedExtension, setCheckedExtension] = React.useState(false);
    const [checkedSize, setCheckedSize] = React.useState(false);
    const [checkedAccess, setCheckedAccess] = React.useState(false);
    const [checkedViews, setCheckedViews] = React.useState(false);
    const [checkedTags, setCheckedTags] = React.useState(false);
    const [checkedOther, setCheckedOther] = React.useState(false);

    useEffect(() => {
        setCheckedExtension(configs.userConfig.fileExtension);
        setCheckedSize(configs.userConfig.fileSize);
        setCheckedAccess(configs.userConfig.lastSeen);
        setCheckedViews(configs.userConfig.numVisualizations);
        setCheckedTags(configs.userConfig.tags);
        setCheckedOther(configs.userConfig.otherData);
    }, [configs])

    useEffect(() =>{
        if(configs.id !== "") {
        setCardsContent([
            { 
              id: "file-extension",
              text: "Extensão do arquivo",
              icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
              value: configs.userConfig.fileExtension,
              onChange: handleChangeExtension
            },
            { 
                id: "file-size",
                text: "Tamanho do arquivo",
                icon: <FontAwesomeIcon icon={faMaximize} />,
                value: configs.userConfig.fileSize,
                onChange: handleChangeSize
            },
            { 
                id: "file-access",
                text: "Acessos do arquivo",
                icon: <FontAwesomeIcon icon={faUserGroup} />,
                value: configs.userConfig.lastSeen,
                onChange: handleChangeAccess
            },
            { 
                id: "file-views",
                text: "Visualização dos arquivos",
                icon: <FontAwesomeIcon icon={faEye} />,
                value: configs.userConfig.numVisualizations,
                onChange: handleChangeViews
            },
            { 
                id: "file-tags",
                text: "Tags dos arquivos",
                icon: <FontAwesomeIcon icon={faTag} />,
                value: configs.userConfig.tags,
                onChange: handleChangeTags
            },
            { 
                id: "file-other",
                text: "Outros metadados",
                icon: <FontAwesomeIcon icon={faDatabase} />,
                value: configs.userConfig.otherData,
                onChange: handleChangeOther
            },  
          ])
        }

    }, [checkedExtension, checkedSize, checkedAccess, checkedViews, checkedTags, checkedOther, configs])

     useEffect(() => {
        if(cardsContent.length > 1) {
            setLoading(false);
        }
    }, [cardsContent]);


    const handleChangeExtension = () => {
        setCheckedExtension((prevValue) => !prevValue);
        setConfigs(currValue => ({
            ...currValue,
            userConfig: {
                ...currValue.userConfig,
                fileExtension: !checkedExtension,
            },
        }));
    };
    

    const handleChangeSize = () => {
        setCheckedSize((prevValue) => !prevValue);
        setConfigs(currValue => ({
            ...currValue,
            userConfig: {
                ...currValue.userConfig,
                fileSize: !checkedSize,
            },
        }));
    };

    const handleChangeAccess = () => {
        setCheckedAccess((prevValue) => !prevValue);
        setConfigs(currValue => ({
            ...currValue,
            userConfig: {
                ...currValue.userConfig,
                lastSeen: !checkedAccess,
            },
        }));
    };

    const handleChangeViews = () => {
        setCheckedViews((prevValue) => !prevValue);
        setConfigs(currValue => ({
            ...currValue,
            userConfig: {
                ...currValue.userConfig,
                numVisualizations: !checkedViews,
            },
        }));
    };

    const handleChangeTags = () => {
        setCheckedTags((prevValue)=>!prevValue)
        setConfigs(currValue => ({
            ...currValue,
            userConfig: {
                ...currValue.userConfig,
                tags: !checkedTags,
            },
        }));
    };

    const handleChangeOther = () => {
        setCheckedOther((prevValue)=>!prevValue);
        setConfigs(currValue => ({
            ...currValue,
            userConfig: {
                ...currValue.userConfig,
                otherData: !checkedOther,
            },
        }));
    };
    

  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white my-10 w-full">
        
        <ParametersTitle isDescriptionOn={isDescriptionOn} configs={configs} setConfigs={setConfigs}/>
        
        {!loading && cardsContent.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cardsContent.map((item) => (
                        <ParametersCards key={item.id} id={item.id} text={item.text} icon={item.icon} value={item.value} onChange={item.onChange} />
                    ))}
                </div>
            )}
    </div>
    );
};

export default ParametersForm;