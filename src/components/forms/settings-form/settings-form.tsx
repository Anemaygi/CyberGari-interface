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
    id: string;
    userConfig: {
        fileExtension: boolean;
        fileSize: boolean;
        tags: boolean;
        numVisualizations: boolean;
        autExclusion: boolean;
        autCompression: boolean;
        periodicityScale: PeriodicityScale;
        periodicityTime: number;
        maxLimitScale: string;
        maxLimitValue: number;
        lastSeen: boolean;
        otherData: boolean;
    }
}

type SettingsProps = {
    isDescriptionOn: boolean;
    userConfig: userConfig;
    setUserConfig: React.Dispatch<React.SetStateAction<userConfig>>;
};


const SettingsForm: React.FC<SettingsProps> = ({isDescriptionOn, userConfig, setUserConfig}) => {

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