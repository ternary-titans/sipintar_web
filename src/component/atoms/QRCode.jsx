import React, { useEffect, useState } from "react";
import QRCodeImage from "./QRCode";

const QRCode = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Ambil data dari database berdasarkan itemId
    const fetchData = async () => {
      try {
        // Panggil API atau metode lain untuk mendapatkan data dari database
        const response = await fetch(`/api/items/${itemId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchData();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <QRCodeImage text={item.qrCode} />
    </div>
  );
};

export default QRCode;
