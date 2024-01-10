import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFView = ({ pdfUrl }) => {
  return (
    <div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@4.0.379/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default PDFView;
