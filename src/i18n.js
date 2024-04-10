import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(LanguageDetector).use(initReactI18next).init({
   debug: true,
   lng: "en",
   resources: {
      en: {
         translation:{

            //headers
            editReport:"Edit Report",
            addReport: "Add a new Report",
            
            //form translate
            name: "Patient Name:",
            responsiblePerson: "Responsible for the report",
            where: "Where did it happen?",
            description:"Describe what happened:",

            //button
            updateBtn: "Update Report",
            newReportBTN: "Add new report",

            //delete component
            delAlertMsg: "Are you sure you want to delete this report?",
            
            //Report details

            whoDetails:	 "Who reported:",
            whereDetails:"Where did it happen:",
            whatDetails:"What happened:",
            dateDetails:"Report Created At:",
         }
      },

      jp: { 
         translation:{
         //headers
         editReport:"レポートの編集",
         addReport: "新しいレポートを追加する",

        
         //form translate
         name: "患者名",
         // editReport: "レポートの編集",
         responsiblePerson:"レポートの責任者",
         where: "それはどこで起きましたか",
         description:"何が起こったのか説明してください",

         //button
         updateBtn: "アップデートレポート",
         newReportBTN: "新しいレポート",
         
         //delete component
         delAlertMsg: "このレポートを削除してもよろしいですか",
         
          //Report details
         whoDetails:	"報告者",
         whereDetails: "それはどこで起きましたか",
         whatDetails:"何かお困りですか",
         dateDetails:"作成場所"
         
      },
   }
}
  })
  

export default i18n;