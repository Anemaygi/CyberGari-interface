import { useState } from "react";
import FrequencyForm from "./frequency-form";
import LimitForm from "./limit-form";
import ParametersForm from "./parameters-form";
import SwitchForm from "./switch-form";

export enum PeriodicityScale {
    MANUALLY = "MANUALLY",
    DAYS = "DAYS",
    WEEKS = "WEEKS",
    MONTHS = "MONTHS",
    YEARS = "YEARS",
}

export interface userConfig {
    fileExtension: boolean;
    fileSize: boolean;
    tags: boolean;
    numVisualizations: boolean;
    autExclusion: boolean;
    autCompression: boolean;
    periodicityScale: PeriodicityScale;
    periodicityTime: number;
    maxLimit: string;
    limitValue: number;
}

type SettingsProps = {
    isDescriptionOn: boolean;
    userConfig: userConfig;
    setUserConfig: React.Dispatch<React.SetStateAction<userConfig>>;
};


const SettingsForm: React.FC<SettingsProps> = ({isDescriptionOn, userConfig, setUserConfig}) => {

    // const [userConfig, setUserConfig] = useState<userConfig>({
    //     fileExtension: false,
    //     fileSize: false,
    //     tags: false,
    //     numVisualizations: false,
    //     autExclusion: false,
    //     autCompression: false,
    //     periodicityScale: PeriodicityScale.MANUALLY,
    //     periodicityTime: 0,
    //     maxLimit: '',
    //     limitValue: 0,
    // })

    return ( 
      <div className="h-full w-[95%] items-center justify-center m-2 rounded-3xl mx-6 font-inter text-white static">
          <ParametersForm isDescriptionOn={isDescriptionOn} configs={userConfig} setConfigs={setUserConfig}/>
          <SwitchForm isDescriptionOn={isDescriptionOn} configs={userConfig} setConfigs={setUserConfig}/>
          <FrequencyForm isDescriptionOn={isDescriptionOn} configs={userConfig} setConfigs={setUserConfig}/>
          <LimitForm isDescriptionOn={isDescriptionOn} configs={userConfig} setConfigs={setUserConfig}/>
      </div>
      );
  };
  
  export default SettingsForm;