"use client";
import { useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';

export default function Home() {
  const [title, setTitle] = useState("");
  const [qr, setQr] = useState("");

  function handelTitle(event) {
    setTitle(event.target.value);
  }
  function handelQR(event) {
    setQr(event.target.value);
  }
  const download = async () => {
    if (title != "" && qr != "") {
      try {
        const canvas = await html2canvas(document.getElementById('content'));
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageData;
        link.download = title + '.png';
        link.click();
        setTitle("");
        setQr("");
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    } else {
      alert("Please Provide Link and Title")
    }
    
  };

  return (
    <>
      <div className="lg:flex max-w-xl mx-auto h-full">
        <div id="content" className="mx-auto flex flex-col items-center w-64 py-10 my-10 shadow-2xl bg-blue-900">
          <QRCode
            className="w-3/4"
            value={qr}
            size={256}
            level="H"
            bgColor="rgba(0,0,0,0)"
            fgColor="rgb(209, 213, 219)"
          />
          <hr className=" w-3/4 h-1 mx-auto mb-3 border-0 rounded bg-gray-300" />
          <div className="text-center text-2xl font-sans font-semibold text-gray-300 h-8">
            {title}
          </div>
        </div>

        <div className="lg:pt-40 mx-auto w-3/4">
          <div className="flex items-center border-b border-teal-500 py-2 w-3/4 mx-auto">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="QR-Title"
              aria-label="Title"
              onChange={handelTitle}
              value={title}
            />
          </div>

          <div className="flex items-center border-b border-teal-500 py-2 w-3/4 mx-auto">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="QR-Link"
              aria-label="Link"
              onChange={handelQR}
              value={qr}
            />
          </div>
          <div className="w-3/4 mx-auto">
            <button onClick={download} className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-10 px-4 border border-blue-500 hover:border-transparent rounded">
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
