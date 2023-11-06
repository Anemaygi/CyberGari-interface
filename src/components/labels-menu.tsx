import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";
import Button from "./button";


const LabelsMenu: React.FC = () => {
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 mr-5">
            <div className="w-full flex justify-end font-inter my-3 relative col-span-1 lg:col-span-3">
                <Input className="text-white bg-secbackground border-0 rounded-xl p-5" placeholder="Pesquisar"/>
                <FiSearch size={25} color="#FFFFFF" className="mr-7 mt-2 absolute"/>
            </div>
            <div className="w-full font-inter my-3 col-span-1">
                <Button title="Comece agora!" handleClick={() => console.log("oi")} />
            </div>
            <div className="w-full font-inter my-3 col-span-1">
                <Button title="Comece agora!" handleClick={() => console.log("oi")} />
            </div>
            <div className="w-full font-inter my-3 col-span-1">
                <Button title="Comece agora!" handleClick={() => console.log("oi")} />
            </div>
        </div>
      );
  };

export default LabelsMenu;