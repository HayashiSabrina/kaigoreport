import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EditReport = () => {
   const { id } = useParams();
   const [report, setReport] = useState(null);
   const [victim, setVictim] = useState('');
   const [reporter, setReporter] = useState('');
   const [where, setWhere] = useState('');
   const [description, setDescription] = useState('');
   const [error, setError] = useState(null);
   const { t} = useTranslation();

   useEffect(() => {
      const fetchReport = async () => {
         try {
            const response = await fetch(`http://localhost:4000/api/reports/${id}`);
            const json = await response.json();
            if (response.ok) {
               setReport(json);
               setVictim(json.victim);
               setReporter(json.reporter);
               setWhere(json.where);
               setDescription(json.description);
            } else {
               throw new Error(json.error);
            }
         } catch (error) {
            console.error("Error fetching report:", error);
            setError(error.message);
         }
      };

      fetchReport();
   }, [id]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const updatedReport = { victim, reporter, where, description };

      try {
         const response = await fetch(`http://localhost:4000/api/reports/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedReport),
            headers: {
               'Content-Type': 'application/json'
            }
         });
         const json = await response.json();

         if (!response.ok) {
            throw new Error(json.error);
         }

         console.log('Report updated:', json);
         window.location.href = "/"; 
      } catch (error) {
         console.error("Error updating report:", error);
         setError(error.message);
      }
   };

   if (!report) {
      return <div>Loading...</div>;
   }

   return (
      
        
     
      <form className="edit" onSubmit={handleSubmit}>
         <h3>{t("editReport")}</h3>

         <label>{t("name")}</label>
         <input
            type="text"
            value={victim}
            onChange={(e) => setVictim(e.target.value)}
         />

         <label>{t("responsiblePerson")}</label>
         <input
            type="text"
            value={reporter}
            onChange={(e) => setReporter(e.target.value)}
         />

         <label>{t("where")}</label>
         <input
            type="text"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
         />

         <label>{t("description")}</label>
         <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
         />

         <button>{t("updateBtn")}</button>
         {error && <div className="error">{error}</div>}
      </form>
   );
};

export default EditReport;
