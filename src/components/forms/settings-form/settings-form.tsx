import FrequencyForm from "./frequency-form";
import LimitForm from "./limit-form";
import ParametersForm from "./parameters-form";
import SwitchForm from "./switch-form";

type SettingsProps = {
    isDescriptionOn: boolean;
};

const SettingsForm: React.FC<SettingsProps> = ({isDescriptionOn}) => {
    return ( 
      <div className="h-full w-[95%] items-center justify-center m-2 rounded-3xl mx-6 font-inter text-white static">
          <ParametersForm isDescriptionOn={isDescriptionOn}/>
          <SwitchForm isDescriptionOn={isDescriptionOn}/>
          <FrequencyForm isDescriptionOn={isDescriptionOn}/>
          <LimitForm isDescriptionOn={isDescriptionOn}/>
      </div>
      );
  };
  
  export default SettingsForm;