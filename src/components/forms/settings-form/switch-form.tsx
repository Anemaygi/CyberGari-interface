import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type SettingsProps = {
    isDescriptionOn: boolean;
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


const SwitchForm: React.FC<SettingsProps> = ({isDescriptionOn}) => {
  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white mb-10">
        <SwitchTitle isDescriptionOn={isDescriptionOn} />
         <div className="flex items-center space-x-2 flow-root my-3">
            <Label htmlFor="delete-files" className="font-bold text-base float-left">Excluir arquivos de forma automática</Label>
            <Switch id="delete-files" className="float-right"/>
        </div>
        <div className="flex items-center space-x-2 flow-root my-3">
            <Label htmlFor="compress-files" className="font-bold text-base float-left">Comprimir arquivos de forma automática</Label>
            <Switch id="compress-files" className="float-right"/>
        </div>
    </div>
    );
};

export default SwitchForm;