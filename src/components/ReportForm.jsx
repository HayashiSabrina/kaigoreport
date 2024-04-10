import { useState } from "react";
import { useTranslation } from "react-i18next";

const ReportForm = () => {
   const [victim, setVictim] = useState('')
   const [reporter, setReporter] = useState('')
   const [where,  setWhere] = useState('')
   const [description, setDescription] = useState('')
   const [error, setError] = useState(null)
   const [emptyFields, setEmptyFields] = useState([])
   const { t} = useTranslation()

   const handleSubmit = async (e) => {
      e.preventDefault()

      const report = {victim, reporter, where, description }

      const response = await fetch('http://localhost:4000/api/reports', {
         method: 'POST',
         body: JSON.stringify(report),
         headers: {
            'Content-Type' : 'application/json'
         }
      })
      const json = await response.json()

      if(!response.ok) {
         setError(json.error)
         setEmptyFields(json.emptyFields)
      }
      if (response.ok) {
         setVictim('')
         setReporter('')
         setWhere('')
         setDescription('')
         setError(null)
         setEmptyFields([])
         console.log('new report add', json)

         window.location.reload();
      }
   }

  return (
   <form className="create" onSubmit={handleSubmit}>
      <h3>{t("addReport")}</h3>
      
      <label>{t("name")}</label>
      <input 
      type="text"
      onChange={(e) => setVictim(e.target.value)} 
      value={victim}
      className={emptyFields.includes('victim') ? 'error' : ''}
      />

      <label>{t("responsiblePerson")}</label>
      <input 
      type="text"
      onChange={(e) => setReporter(e.target.value)} 
      value={reporter}
      className={emptyFields.includes('reporter') ? 'error' : ''}
      />

      <label>{t("where")}</label>
      <input 
      type="text"
      onChange={(e) => setWhere(e.target.value)} 
      value={where}
      className={emptyFields.includes('where') ? 'error' : ''}
      />

      <label>{t("description")}</label>
      <textarea
      onChange={(e) => setDescription(e.target.value)}
      value={description}
      className={`description-input ${emptyFields.includes('description') ? 'error' : ''}`}
      />

      <button>{t("newReportBTN")}</button>
         {error && <div className="error">{error}</div>}
   </form>
  )
}

export default ReportForm