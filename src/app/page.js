"use client";
import { useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import { Montserrat } from "next/font/google";

const monsterrat = Montserrat({subsets:["latin"], weight:"700"})

export default function Home() {
  const [qr, setQr] = useState("");

  function handelQR(event) {
    setQr(event.target.value);
  }
  const download = async () => {
    if (qr != "") {
      try {
        const canvas = await html2canvas(document.getElementById('content'), {scale : 4, backgroundColor: null});
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'QR_code.png';
        link.click();
        setQr("");
      } catch (error) {
        console.log('Error capturing image:', error);
      }
    } else {
      alert("Please Provide Link and Title")
    }
    
  };

  return (
    <main className=" bg-red-300 h-screen flex flex-col justify-center items-center">

        <div id="content" className="flex flex-col justify-center items-center rounded-xl bg-purple-950 w-4/5 h-3/5 py-10 lg:w-fit lg:px-5 small">
          <QRCode
            className="w-fit"
            value={qr}
            size={256}
            level="H"
            bgColor="transparent"
            fgColor="rgb(243, 248, 255)"
          />
          <hr className=" border-neutral-100 my-10 w-3/4 mx-auto"/>
          <div className={monsterrat.className + " text-center text-3xl text-white"} contentEditable>
            TITLE
          </div>
        </div>

        <div className="mt-5 w-4/5 lg:w-fit">
          <div className="">
            <input
              className=" w-full text-center placeholder:text-gray-700 text-white placeholder:font-bold text-xl rounded-md bg-blue-400 p-2"
              type="text"
              placeholder="QR-Link"
              aria-label="Link"
              onChange={handelQR}
              value={qr}
            />
          </div>
          <div className=" w-full text-center p-2 bg-green-600 rounded-md my-2 text-white font-bold">
            <button onClick={download} className="">
              DOWNLOAD
            </button>
          </div>
        </div>

    </main>
  );
}
