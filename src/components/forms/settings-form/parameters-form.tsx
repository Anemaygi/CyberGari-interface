import { faDatabase, faEye, faMaximize, faPuzzlePiece, faTag, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SettingsProps = {
    isDescriptionOn: boolean;
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

const ParametersCards: React.FC<ParametersProps> = ({id, text, icon, value, onChange}) => (
    <label className="w-[30%] cursor-pointer my-2 ml-5 h-[5rem] px-2 py-3 bg-secbackground checkbox-wrapper font-bold text-[1vw] flex shadow-lg rounded-lg border-[1px] border-background float-left">
          <div className="inline-flex items-center">
            <input type="checkbox" checked={value} onChange={onChange} className="hidden"/>
            <div className=" mx-3 text-[2vw]"> {icon} </div>
            <div>{text}</div>
          </div>
    </label>

);

const ParametersForm: React.FC<SettingsProps> = ({isDescriptionOn}) => {
    const [checkedExtension, setCheckedExtension] = React.useState(false);
    const [checkedSize, setCheckedSize] = React.useState(false);
    const [checkedAccess, setCheckedAccess] = React.useState(false);
    const [checkedViews, setCheckedViews] = React.useState(false);
    const [checkedTags, setCheckedTags] = React.useState(false);
    const [checkedOther, setCheckedOther] = React.useState(false);

    const handleChangeExtension = () => {
        setCheckedExtension(!checkedExtension);
    };

    const handleChangeSize = () => {
        setCheckedSize(!checkedSize);
    };

    const handleChangeAccess = () => {
        setCheckedAccess(!checkedAccess);
    };

    const handleChangeViews = () => {
        setCheckedViews(!checkedViews);
    };

    const handleChangeTags = () => {
        setCheckedTags(!checkedTags);
    };

    const handleChangeOther = () => {
        setCheckedOther(!checkedOther);
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
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white my-10">
        <ParametersTitle isDescriptionOn={isDescriptionOn} />
        <div className="flow-root">
            {cardsContent.map((item) => (
                    <ParametersCards id={item.id} text={item.texto} icon={item.icon} value={item.value} onChange={item.function}/>
            ))}
        </div>
    </div>
    );
};

export default ParametersForm;