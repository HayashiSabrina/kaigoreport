import { useState } from "react";

const ReportDelete = (reportId) => {
   const [error, setError] = useState(null);

   const delReport = async () => {
      try {
         const confirmDelete = window.confirm("Are you sure you want to delete this report?");
         if (!confirmDelete) {
            return; 
         }
         
         const response = await fetch(`https://kaigoreport-api.onrender.com/${reportId}`, {
            method: 'DELETE'
         });

         if (!response.ok) {
            const json = await response.json();
            throw new Error(json.error);
         }

         console.log('Report deleted successfully');
         window.location.reload();
      } catch (error) {
         setError(error.message);
      }
   };

   return { error, delReport };
};

export default ReportDelete;
