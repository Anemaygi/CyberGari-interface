import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FiCircle, FiDollarSign, FiTrendingUp } from "react-icons/fi";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "Resultados da Análise",
      data: [50, 25, 25],
      backgroundColor: ["#0077C2", "#07C8C5", "#0E557C"],
      borderWidth: 0,
      cutout: 90,
    },
  ],
};

const PieChart: React.FC = () => {
  return (
    <div className="h-[50%] m-2 rounded-3xl flex flex-col font-inter bg-[#121625] mx-3 text-white shadow-md flow-root">
      <div className="float-left mx-10 m-3.5">
        <Doughnut data={data} />
      </div>
      <div className="float-right m-10 mr-20 font-normal">
        <h2 className="font-bold text-xl mb-4">Resultados da Análise</h2>
        <Subtitle
          totalUsed={data.datasets[0].data[0]}
          totalCompressed={data.datasets[0].data[1]}
          totalDeleted={data.datasets[0].data[2]}
        />
        <AdditionalInformation moneySaved={20.01} storageReleased="2GB" />
      </div>
    </div>
  );
};

type SubtitleProps = {
  totalCompressed: number;
  totalDeleted: number;
  totalUsed: number;
};

const Subtitle: React.FC<SubtitleProps> = ({
  totalUsed,
  totalCompressed,
  totalDeleted,
}) => (
  <div className="text-sm">
    <div className="flex justify-content my-6">
      <FiCircle size={25} color="#0E557C" className="stroke-[4px] mr-3" />
      <label>{totalCompressed}% de arquivos comprimidos</label>
    </div>
    <div className="flex justify-content my-6">
      <FiCircle
        size={25}
        color="#07C8C5"
        className="stroke-[4px] float-left mr-3"
      />
      <label>{totalDeleted}% de arquivos para exclusão</label>
    </div>
    <div className="flex justify-content my-6">
      <FiCircle size={25} color="#0077C2" className="stroke-[4px] mr-3" />
      <label className="mt-[-3%]">
        {totalUsed}% de arquivos com acesso <br />
        frequente
      </label>
    </div>
  </div>
);

type AdditionalInformation = {
  moneySaved: number;
  storageReleased: string;
};

const AdditionalInformation: React.FC<AdditionalInformation> = ({
  moneySaved,
  storageReleased,
}) => (
  <div className="text-[#07C8C5] mt-10 text-xs">
    <div className="flex justify-content my-2">
      <FiDollarSign size={15} color="#07C8C5" className="mr-3" />
      <label>Economia de ${moneySaved}</label>
    </div>
    <div className="flex justify-content my-3">
      <FiTrendingUp size={15} color="#07C8C5" className=" float-left mr-3" />
      <label>{storageReleased} de armazenamento liberado</label>
    </div>
  </div>
);

export default PieChart;
