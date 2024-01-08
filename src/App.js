import React, { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import * as XLSX from 'xlsx';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(true);

  // const openPopup = () => {
  //   setPopupOpen(true);
  // };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
        setPopupOpen(false);
      };

      reader.readAsBinaryString(file);
    }
  };
  return (
    <>
      {/* <button onClick={openPopup}>Mở Popup</button> */}
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <input
          type="file"
          onChange={handleFile}
          id="file"
          className='inputfile'
        />
        <label htmlFor="file">Chọn file</label>
      </Popup>
      <Navbar />
      <Container excelData={excelData} />

    </>
  );
}

export default App;
