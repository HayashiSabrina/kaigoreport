import ReportDelete from "./hooks/ReportDelete";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ReportDetails = ({ report }) => {
   const { error, delReport } = ReportDelete(report._id);
   const { t} = useTranslation();

   return (
      <div className="report-details">
         <h4>{report.victim}</h4>
         <p><strong>{t("whoDetails")}</strong>
         <span>{report.reporter}</span></p>
         <p><strong>{t("whereDetails")}</strong>
         <span>{report.where}</span></p>
         <p><strong>{t("whatDetails")}</strong>
         <span>{report.description}</span></p>
         <p><strong>{t("dateDetails")}</strong>
         <span>{format(new Date(report.createdAt), 'MM/dd/yyyy HH:mm:ss')}</span></p>
         
         
         <Link to={`/edit-report/${report._id}`} className="material-symbols-outlined">Edit</Link>
         <button className="material-symbols-outlined" onClick={delReport}>Delete</button>
         {error && <div className="error">{error}</div>}
         
      </div>
      
      
   );
};

export default ReportDetails;