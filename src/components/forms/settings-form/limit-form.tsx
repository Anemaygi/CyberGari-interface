import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SettingsProps = {
    isDescriptionOn: boolean;
};
  
const FrequencyTitle: React.FC<SettingsProps> = ({
    isDescriptionOn
}) => (
    <div>
        <h2 className="font-bold text-lg">Aviso de limite de armazenamento para novas análises automáticas</h2>
        { isDescriptionOn === true ? (
            <p className="text-justify">Defina um limite de armazenamento que, quando alcançado, faremos a análise automaticamente</p>
                ) : (<></>)
        }
    </div>
)


const LimitForm: React.FC<SettingsProps> = ({isDescriptionOn}) => {
  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white mb-20">
        <FrequencyTitle isDescriptionOn={isDescriptionOn} />
         <div className="flex space-x-2 flow-root my-3">
            <div className="float-left mr-5">
                <Select>
                    <SelectTrigger className="w-[250px] bg-[#D9D9D9] text-black">
                        <SelectValue placeholder="Apenas manualmente" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#D9D9D9] text-black">
                        <SelectItem value="manually">Apenas Manualmente</SelectItem>
                        <SelectItem value="days">MB</SelectItem>
                        <SelectItem value="weeks">GB</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Input type="number" placeholder="1" className="w-[10%] bg-[#D9D9D9] text-black" />
        </div>
    </div>
    );
};

export default LimitForm;