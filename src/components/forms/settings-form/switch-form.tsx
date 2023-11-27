import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { userConfig } from "./settings-form";
import { useEffect, useState } from "react";

type SettingsProps = {
    isDescriptionOn: boolean;
    configs: userConfig;
    setConfigs: React.Dispatch<React.SetStateAction<userConfig>>;
};
  
const SwitchTitle: React.FC<SettingsProps> = ({
    isDescriptionOn
}) => (
    <div className="mb-5">
        <h2 className="font-bold text-lg">Exclusão e Compactação</h2>
        { isDescriptionOn === true ? (
            <p className="text-justify">Nas análises, descobrimos quais arquivos devem ser excluídos ou comprimidos. 
                Podemos excluí-los e compactá-los automaticamente ou você pode os analisar manualmente</p>
                ) : (<></>)
        }
    </div>
)


const SwitchForm: React.FC<SettingsProps> = ({isDescriptionOn, configs, setConfigs}) => {
    const [compress, setCompress] = useState(false)
    const [exclusion, setExclusion] = useState(false)

    useEffect(() => {
        if(configs.id !== ""){
            setExclusion(configs.userConfig.autExclusion);
            setCompress(configs.userConfig.autCompression);
        }
    }, [configs])


    return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white mb-10">
        <SwitchTitle isDescriptionOn={isDescriptionOn} configs={configs} setConfigs={setConfigs} />
         <div className="items-center space-x-2 flow-root my-3">
            <Label htmlFor="delete-files" className="font-bold text-base float-left">Excluir arquivos de forma automática</Label>
            <Switch id="delete-files" className="float-right" 
                checked={exclusion}  
                onCheckedChange={(exclusionValue) => {
                    setExclusion(exclusionValue);
                    setConfigs(currValue => ({
                    ...currValue,
                    userConfig: {
                        ...currValue.userConfig,
                        autExclusion: exclusionValue,
                    },
                    }));
                }}
            />
        </div>

        <div className="items-center space-x-2 flow-root my-3" >
            <Label htmlFor="compress-files" className="font-bold text-base float-left">Comprimir arquivos de forma automática</Label>
            <Switch id="compress-files" className="float-right" 
            checked={compress}  
            onCheckedChange={(isCompressed) => {
                setCompress(isCompressed);
                setConfigs(currValue => ({
                  ...currValue,
                  userConfig: {
                    ...currValue.userConfig,
                    autCompression: isCompressed,
                  },
                }));
              }}
            />
        </div>
    </div>
    );
};

export default SwitchForm;