import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState(''); // Kullanıcıdan alınacak metin

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-4">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Kullanıcı metni günceller
        className="border rounded-lg p-2 mb-4"
      />
      {inputText && (
        <QRCodeSVG
          value={inputText} // QR kodu oluşturmak için kullanılan metin
          size={256} // QR kodunun boyutu
          fgColor="#000000" // QR kodunun ön plan rengi
          bgColor="#ffffff" // QR kodunun arka plan rengi
          level="L" // Hata düzeltme seviyesi (L, M, Q, H)
        />
      )}
    </div>
  );
};

export default QRCodeGenerator;
