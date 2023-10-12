import React from 'react';
import SideBar from '@/components/sidebar';

import PieChart from '@/components/pie-chart';
import HistoryChart from '@/components/history-chart';
import ReportButton from '@/components/report-button';


const Dashboard: React.FC = () => {
  return (
      <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
          <SideBar />
          
           <div className="flex flex-grow overflow-y-auto">
           <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full">
            <div className="col-span-7 "><PieChart /></div>
            <div className="col-span-3">oi</div>
            <div className="col-span-7"><HistoryChart /></div>
            <div className="col-span-3 flex justify-center align-center items-center">
              <div className="h-72 w-72"><ReportButton size={80} /></div>
            </div>
          </div>
           
           </div>


        </div>
      </div>
    
  );
};

export default Dashboard;
