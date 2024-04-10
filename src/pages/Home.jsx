import React, { useEffect, useState } from "react";
import ReportDetails from "../components/ReportDetails";
import ReportForm from "../components/ReportForm";

const Home = () => {
   const [reports, setReports] = useState(null);
  
   useEffect(() => {
      const fetchReports = async () => {
         try {
            const response = await fetch('http://localhost:4000/','https://kaigoreport-api.onrender.com');
            const json = await response.json();
            if (response.ok) {
               setReports(json);
            } else {
               throw new Error("Failed to fetch reports");
            }
         } catch (error) {
            console.error("Error fetching reports:", error);
         }
      };

      fetchReports();
   }, []);

  return (
    <div className="home">
      <div className="reports">
         {reports && reports.map((report) =>(
            <ReportDetails report={report} key={report._id}  />
         ))}
      </div>
      <ReportForm />
    </div>
  );
};

export default Home;
