import React from 'react';
import SideBar from '@/components/sidebar';

import PieChart from '@/components/pie-chart';
import HistoryChart from '@/components/history-chart';
import ReportButton from '@/components/report-button';


const Template: React.FC = () => {
  return (
      <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
          <SideBar />
          <div className="w-56 h-56">
          <ReportButton />
          </div>
          {/* <div className="grid grid-cols-10 grid-cols-auto gap-3 overflow-y-auto">
            <div className="col-span-6"><HistoryChart/></div>
            <div className="col-span-4"><HistoryChart/></div>
            <div className="col-span-6"><PieChart/></div>
            <div className="col-span-4"><PieChart/></div>
          </div> */}
          

        </div>
      </div>
    
  );
};

export default Template;
