"use client"
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {

  const [title, setTitle] = useState("");
  const [qr, setQr] = useState("");

  function handelTitle(event) {
    setTitle(event.target.value)
  }
  function handelQR(event) {
    setQr(event.target.value)
  }

  return (
    <>
      <div className="mx-auto w-3/4 py-10 my-10 rounded-lg bg-blue-900">
        <QRCode
          className="mx-auto"
          value={qr}
          size={256}
          level="H"
          bgColor="rgba(0,0,0,0)"
          fgColor="rgb(209, 213, 219)"
        />
        <hr className=" w-56 h-1 mx-auto my-10 border-0 rounded md:my-10 bg-gray-300" />
        <div className="text-center text-4xl font-sans font-semibold text-gray-300">
          {title}
        </div>
      </div>

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
        <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 my-10 px-4 border border-blue-500 hover:border-transparent rounded">
          DOWNLOAD
        </button>
      </div>
    </>
  );
}
