import React from "react"
import { Document, Page, pdfjs } from 'react-pdf'
import resume from "./documents/resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function CV() {
    return (
        <div id="CV">
            <Document 
                file={resume}
                onLoadError={console.error}
                style={{width: '75vw', height: "auto"}}
                >
                <Page pageIndex={0} />
            </Document>
        </div>
    )
}

export default CV;