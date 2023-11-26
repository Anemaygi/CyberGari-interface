import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FiCircle, FiDollarSign, FiTrendingUp } from "react-icons/fi";

ChartJS.register(ArcElement, Tooltip, Legend);

type File = {
  id: string;
  name: string;
  size: number;
  modifiedTime: string;
}

type UserReport = {
  id: string;
  filesToCompress: File[];
  filesToDelete: File[];
  fileCount: number;
}

type PieChartProps = {
  report: UserReport;
}

const PieChart: React.FC<PieChartProps> = ({report}) => {

  const totalUsed = ((report.fileCount - report.filesToCompress.length - report.filesToDelete.length) / report.fileCount) * 100;
  const totalDeleted = (report.filesToDelete.length / report.fileCount) * 100;
  const totalCompressed = (report.filesToCompress.length / report.fileCount) * 100;

  const data = {
    labels: [],
    datasets: [
      {
        label: "Resultados da Análise",
        data: [totalUsed, totalCompressed, totalDeleted],
        backgroundColor: ["#0077C2", "#07C8C5", "#0E557C"],
        borderWidth: 0,
        cutout: 90,
      },
    ],
  };

  const storageReleased = handleStorage(report);


  return (
    <div className="h-auto w-auto overflow-y-auto rounded-3xl flex-col flex items-center font-inter bg-[#121625] text-white shadow-md">
      <div><div className="float-left mx-10 m-3.5 mt-8">
        <Doughnut data={data} />
      </div>
      <div className="float-left m-10 mr-20 font-normal">
        <h2 className="font-bold text-xl mb-4">Resultados da Análise</h2>
        <Subtitle
          totalUsed={data.datasets[0].data[0]}
          totalCompressed={data.datasets[0].data[1]}
          totalDeleted={data.datasets[0].data[2]}
        />
        <AdditionalInformation moneySaved={20.01} storageReleased={`${storageReleased.toPrecision(1)}`} />
      </div></div>
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
      <label>{totalCompressed.toPrecision(4)}% de arquivos comprimidos</label>
    </div>
    <div className="flex justify-content my-6">
      <FiCircle
        size={25}
        color="#07C8C5"
        className="stroke-[4px] float-left mr-3"
      />
      <label>{totalDeleted.toPrecision(4)}% de arquivos para exclusão</label>
    </div>
    <div className="flex justify-content my-6">
      <FiCircle size={25} color="#0077C2" className="stroke-[4px] mr-3" />
      <label className="mt-[-3%]">
        {totalUsed.toPrecision(4)}% de arquivos com acesso <br />
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
      <label>{storageReleased}GB de armazenamento liberado</label>
    </div>
  </div>
);

export default PieChart;

function handleStorage(report: UserReport) {
  var totalInBytes: number = 0;
  report.filesToCompress.forEach(file => totalInBytes = totalInBytes + file.size);
  report.filesToDelete.forEach(file => totalInBytes = totalInBytes + file.size);
  const GB = Math.pow(1024, 3);
  return totalInBytes / GB;
}

