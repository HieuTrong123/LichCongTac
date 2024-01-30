import React, { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import * as XLSX from 'xlsx';

function App() {
  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const dataArr = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        setExcelData(dataArr);
      };

      reader.readAsBinaryString(file);
    }
  };
  return (
    <>
      <Navbar />
      <Container excelData={excelData} />

    </>
  );
}

export default App;
