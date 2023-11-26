import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { userConfig } from "./settings-form";
import { useEffect, useState } from "react";


type SettingsProps = {
    isDescriptionOn: boolean;
    configs: userConfig;
    setConfigs: React.Dispatch<React.SetStateAction<userConfig>>;
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


const LimitForm: React.FC<SettingsProps> = ({isDescriptionOn, configs, setConfigs}) => {
const [limit, setLimit] = useState("");
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if(configs.id !== "") {
        setLimit(configs.userConfig.maxLimitScale);
        setValue(configs.userConfig.maxLimitValue);
    }
  }, [configs])

  useEffect(() => {
    if(configs.id !== "") {
        setLoading(false)
    }
  }, [limit, value])

  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white mb-20">
        <FrequencyTitle isDescriptionOn={isDescriptionOn} configs={configs} setConfigs={setConfigs}/>
         <div className="space-x-2 flow-root my-3">
            <div className="float-left mr-5">
                {
                    !loading && (
                        <Select onValueChange={(selectedValue) => {setConfigs(currValue => ({
                                    ...currValue,
                                    userConfig: {
                                        ...currValue.userConfig,
                                        maxLimitScale: selectedValue,
                                    },
                                }))}} defaultValue={limit ? limit : undefined}>
                            <SelectTrigger className="w-[250px] bg-[#D9D9D9] text-black">
                                <SelectValue placeholder="Apenas manualmente" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#D9D9D9] text-black">
                                <SelectItem value="MANUALLY">Apenas Manualmente</SelectItem>
                                <SelectItem value="MB">MB</SelectItem>
                                <SelectItem value="GB">GB</SelectItem>
                            </SelectContent>
                        </Select>
                    )
                }
            </div>
            {
                !loading && (
                    <Input type="number" placeholder="1" className="w-[10%] bg-[#D9D9D9] text-black" onChange={(event)=>{
                        setConfigs(currValue => ({
                            ...currValue,
                            userConfig: {
                                ...currValue.userConfig,
                                maxLimitValue: parseInt(event.target.value,10),
                            },
                        }))
                        }} defaultValue={value ? value : undefined}/>
                )
            }
        </div>
        
    </div>
    );
};

export default LimitForm;