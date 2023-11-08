import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { FiFileText, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Resultados',
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: '#ED0EE4',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const HistoryChart: React.FC = () => {
  return ( 
    <div className="h-full w-full overflow-y-auto items-center p-4 justify-center rounded-3xl flex flex-col bg-[#121625] font-inter text-white shadow-md">
        <div className='items-left w-[90%] my-5'>
            <h2 className='text-xl font-extrabold text-left'>Armazenamento salvo por tempo</h2>
        </div>
        <div className='h-[65%] w-[90%]'>
            <Line options={options} data={data} />
        </div>
        <AdditionalInfo
            releasedStorage='5GB'
            lastMonthPercentage= {20}
        />
    </div>
    );
};

type AdditionalInfoProps = {
    releasedStorage: string;
    lastMonthPercentage: number;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ releasedStorage, lastMonthPercentage }) => (
    <div className='flex text-[#AB58C5] my-5 text-sm'>
        <FiFileText size={15} color='#AB58C5'/>
        <label className='ml-2 mr-5'>{releasedStorage} liberado no último mês</label>
        { lastMonthPercentage >= 0 ?
            (
                <>
                    <FiTrendingUp size={15} color='#AB58C5'/>
                    <label className='ml-2'>{lastMonthPercentage}% a mais que o mês anterior</label>
                </>
            ) :
            (
                <>
                    <FiTrendingDown size={15} color='#AB58C5'/>
                    <label className='ml-2'>{lastMonthPercentage}% a menos que o mês anterior</label>
                </>
            ) 

         }
    </div>
)

export default HistoryChart;