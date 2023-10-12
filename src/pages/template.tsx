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
          
           


        </div>
      </div>
    
  );
};

export default Template;
