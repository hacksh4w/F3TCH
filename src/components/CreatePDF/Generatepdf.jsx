import React from 'react'
import { useRef } from 'react';
import ReportTemplate from './Createpdf';
import jsPDF from 'jspdf';
import { useState } from 'react';


const Generatepdf = () => {
    const[name,setName]=useState('');
    

        const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
		doc.setFont('Inter-Regular', 'normal');

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save(name);
			},
		});
	};

	return (
		<div>
         <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Patient ID"/>
			<button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
			<div className='' ref={reportTemplateRef}>
				<ReportTemplate />
			</div>
		</div>

  )
}

export default Generatepdf