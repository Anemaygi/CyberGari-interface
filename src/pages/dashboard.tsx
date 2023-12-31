import React, { useEffect, useState } from 'react';
import SideBar from '@/components/sidebar';

import PieChart from '@/components/pie-chart';
import HistoryChart from '@/components/history-chart';
import ReportButton from '@/components/report-button';
import ReportList from '@/components/report-list';
import { useNavigate } from 'react-router-dom';
import { HistoryData } from '@/types/history';

type File = {
  id: string;
  name: string;
  size: number;
  modifiedTime: string;
}

export type UserReport = {
  id: string;
  filesToCompress: File[];
  filesToDelete: File[];
  fileCount: number;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState<HistoryData[]>([])
  const [user, setUser] = useState<any | null>(null);
  const [userReport, setUserReport] = useState<UserReport>(
    {
      id: "",
      filesToCompress: [],
      filesToDelete: [],
      fileCount: 0 
    }
  );

  useEffect(() => {
    if (!user && localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')!));
    }
  }, [])

  const handleReportGeneration = () => { 
    if(user) {
      fetch(`http://localhost:8080/reports/${user.userId}`, { 
        method: 'GET'})
        .then(response => response.json())
        .then(json => setUserReport(
          {
            id: json.id,
            filesToCompress: json.filesToCompress,
            filesToDelete: json.filesToDelete,
            fileCount: json.fileCount
          }
        ))
        .catch(error => console.error(error));
    }
    
  }

  const handleHistoryRequest = () => { 
    if(user) {
      fetch(`http://localhost:8080/storage-size-log/${user.userId}`, { 
        method: 'GET'})
        .then(response => response.json())
        .then(json => {
          console.log(json);
          const transformedData = json.map((item: HistoryData) => ({
            reportTimestamp: item.reportTimestamp,
            preOptimizationSize: item.preOptimizationSize,
            postOptimizationSize: item.postOptimizationSize
          }));
          setHistoryData(transformedData);
      })
        .catch(error => console.error(error));

      
    }
    
  }

  function getReport() {
    return userReport
  }

  useEffect(() => {
    handleReportGeneration();
    handleHistoryRequest();
  }, [user])

  useEffect(() => {
    localStorage.setItem('reportId', userReport.id);
  }, [userReport])
  
  useEffect(() => {
    if (!localStorage.getItem('user')) { 
      navigate('/login');
    }
  }, [user, navigate]);

  if(user){
    return (
        <div className="flex p-4 h-screen bg-secbackground">
          <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
            <SideBar />
            
            <div className="flex flex-grow overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full">
              <div className="col-span-7"><PieChart report={userReport}/></div>
              <div className="col-span-7 lg:col-span-3"><ReportList report={userReport}/></div>
              <div className="col-span-7"><HistoryChart chartData={historyData} /></div>
              <div className="col-span-7 lg:col-span-3 flex justify-center align-center items-center">
                <ReportButton handleClick={handleReportGeneration} getReport={getReport} size={80} />
              </div>
            </div>
            </div>
          </div>
        </div>
    );
}
return (
<div className="h-full w-full flex mt-10">
  <img className='w-[300px] m-auto' src={'src/img/loading.gif'}></img>
</div>
);


};

export default Dashboard;
