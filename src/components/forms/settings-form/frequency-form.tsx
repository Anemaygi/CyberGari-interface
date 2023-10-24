import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SettingsProps = {
    isDescriptionOn: boolean;
};
  
const FrequencyTitle: React.FC<SettingsProps> = ({
    isDescriptionOn
}) => (
    <div className="mb-5">
        <h2 className="font-bold text-lg">Aviso de frequência para novas análises automáticas</h2>
        { isDescriptionOn === true ? (
            <p className="text-justify">Com qual frequência analisaremos seus arquivos? Defina uma frequência para atualizar 
                seus dados com uma análise automaticamente</p>
                ) : (<></>)
        }
    </div>
)


const FrequencyForm: React.FC<SettingsProps> = ({isDescriptionOn}) => {
  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white mb-10">
        <FrequencyTitle isDescriptionOn={isDescriptionOn} />
         <div className="flex space-x-2 flow-root my-3">
            <div className="float-left mr-5">
                <Select>
                    <SelectTrigger className="w-[250px] bg-[#D9D9D9] text-black">
                        <SelectValue placeholder="Apenas manualmente" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#D9D9D9] text-black">
                        <SelectItem value="manually">Apenas Manualmente</SelectItem>
                        <SelectItem value="days">Dias</SelectItem>
                        <SelectItem value="weeks">Semanas</SelectItem>
                        <SelectItem value="months">Meses</SelectItem>
                        <SelectItem value="years">Anos</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Input type="number" placeholder="1" className="w-[10%] bg-[#D9D9D9] text-black" />
        </div>
    </div>
    );
};

export default FrequencyForm;