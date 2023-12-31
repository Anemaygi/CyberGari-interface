import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { userConfig, PeriodicityScale } from "./settings-form";
import { useEffect, useState } from "react";


type SettingsProps = {
    isDescriptionOn: boolean;
    configs: userConfig;
    setConfigs: React.Dispatch<React.SetStateAction<userConfig>>;
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


const FrequencyForm: React.FC<SettingsProps> = ({isDescriptionOn, configs, setConfigs}) => {
  const [scale, setScale] = useState("");
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if(configs.id !== "") {
        setScale(configs.userConfig.periodicityScale);
        setTime(configs.userConfig.periodicityTime);
    }
  }, [configs])

  useEffect(() => {
    if(configs.id !== "") {
        setLoading(false)
    }
  }, [scale, time])


  return ( 
    <div className="m-2 rounded-3xl flex flex-col mx-6 font-inter text-white mb-10">
        <FrequencyTitle isDescriptionOn={isDescriptionOn} configs={configs} setConfigs={setConfigs}/>
         <div className="flex space-x-2 my-3">
            <div className="float-left mr-5">
                {
                    !loading && (
                        <Select onValueChange={(selectedValue: PeriodicityScale) => {setConfigs(currValue => ({
                            ...currValue,
                            userConfig: {
                                ...currValue.userConfig,
                                periodicityScale: selectedValue,
                            },
                        }))}} defaultValue={scale ? scale : undefined}>
                            <SelectTrigger className="w-[250px] bg-[#D9D9D9] text-black">
                                <SelectValue placeholder="Apenas manualmente" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#D9D9D9] text-black">
                                <SelectItem value="MANUALLY">Apenas Manualmente</SelectItem>
                                <SelectItem value="DAYS">Dias</SelectItem>
                                <SelectItem value="WEEKS">Semanas</SelectItem>
                                <SelectItem value="MONTHS">Meses</SelectItem>
                                <SelectItem value="YEARS">Anos</SelectItem>
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
                                periodicityTime: parseInt(event.target.value,10),
                            },
                            }))
                        }} defaultValue={time ? time : undefined}/>
                )
            }
        </div>
    </div>
    );
};

export default FrequencyForm;