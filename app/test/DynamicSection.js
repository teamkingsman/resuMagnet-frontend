'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DynamicSection({ sectionData, sectionName, handleChange, handleAddEntry }) {
    console.log(sectionData)
    return (
        <div>
            <h2>{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</h2>
            <div       className="md:flex flex-col justify-center gap-4 mt-4">
                
            {sectionData.map((entry, index) => (
                 <div key={index}>
                 <h1 className="text-center font-extrabold py-2 text-2xl">{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} History {index+1}</h1>
                 <div className="md:flex justify-between gap-4">
                   <div className="form-control">
                     <label className="label">
                       <span className="flex items-center gap-2 label-text font-semibold text-main">
                         Degree
                       </span>
                     </label>
                     <input
                       type="text"
                       placeholder="Enter Degree"
                       className="input bg-base-300"
                       name={`degree`}
                       value={entry.degree || ''}
                            onChange={(e) => handleChange(sectionName, index, 'degree', e.target.value)}
                       required
                     />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="flex items-center gap-2 label-text font-semibold text-main">
                         Institute
                       </span>
                     </label>
                     <input
                       type="text"
                       placeholder="Enter Institute"
                       className="input bg-base-300"
                       name={`institute`}
                       value={entry.institute || ''}
                            onChange={(e) => handleChange(sectionName, index, 'institute', e.target.value)}
                       required
                     />
                   </div>
                 </div>
                 <div className="md:flex justify-between gap-4">
                   <div className="form-control">
                     <label className="label">
                       <span className="flex items-center gap-2 label-text font-semibold text-main">
                         Start Date
                       </span>
                     </label>
                     <input
                       type="date"
                       value={entry.startDate || ''}
                       onChange={(e) => handleChange(sectionName, index, 'startDate', e.target.value)}
                       placeholderText="Select Start Date"
                       className="input bg-base-300"
                       dateFormat="dd-MM-yyyy"
                     />
                   </div>
       
                   <div className="form-control">
                     <label className="label">
                       <span className="flex items-center gap-2 label-text font-semibold text-main">
                         End Date
                       </span>
                     </label>
                     <input
                        type="date"            
                        value={entry.endDate || ''}
                       onChange={(e) => handleChange(sectionName, index, 'endDate', e.target.value)}
                       placeholderText="Select End Date"
                       className="input bg-base-300"
                       dateFormat="dd-MM-yyyy"
                       disabled={entry.ongoing}
                     />
                   </div>
                 </div>
       
                 <div className="flex flex-col justify-between">
                   <div className="form-control">
                     <div className="flex items-center">
                       <label className="label">
                         <span className="flex gap-2 label-text font-semibold text-main">
                           Ongoing
                         </span>
                       </label>
                       <input
                       
                         type="checkbox"
                         value={entry.ongoing}
                       onChange={(e) => handleChange(sectionName, index, 'ongoing', e.target.checked)}
                       />
                     </div>
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="flex gap-2 label-text font-semibold text-main">
                         Description
                       </span>
                     </label>
                     <textarea
                       placeholder="Description"
                       className="textarea textarea-lg textarea-bordered bg-base-300"
                       name={`jobDescription`}
                       value={entry.jobDescription || ''}
                       onChange={(e) => handleChange(sectionName, index, 'jobDescription', e.target.value)}
                     />
                   </div>
                 </div>
               </div>
            ))}
                        </div>

            <button type="button" onClick={handleAddEntry}>
                Add {sectionName.slice(0, -1)}
            </button>
        </div>
    );
    
}

export default DynamicSection;