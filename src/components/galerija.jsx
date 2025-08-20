import { useState, useEffect } from "react";
import GalerijaCSS from "..\\css\\galerija.module.css";

function Galerija() {
  const slike = [
    { url: "/assets/image00001.jpeg", id: "img1" },
    { url: "/assets/image00002.jpeg", id: "img2" },
    { url: "/assets/image00003.jpeg", id: "img3" },
    { url: "/assets/image00004.jpeg", id: "img4" },
    { url: "/assets/image00005.jpeg", id: "img5" },
    { url: "/assets/image00006.jpeg", id: "img6" },
    { url: "/assets/image00007.jpeg", id: "img7" },
    { url: "/assets/image00008.jpeg", id: "img8" },
    { url: "/assets/image00009.jpeg", id: "img9" },
  ];

  const [fullscreenImage, setFullscreenImage] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(
    window.innerWidth < 770 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setImagesPerPage(window.innerWidth < 770 ? 2 : 4);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(slike.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = slike.slice(startIndex, endIndex);

  const Slika = ({ url, id }) => (
    <div className={GalerijaCSS.slika}>
      <img src={url} alt={id} />
      <button 
       className={GalerijaCSS.zoom_btn}
       onClick={() => setFullscreenImage(url)}
      >
        <img
         src="/assets/search-interface-symbol1.png" 
         alt="zoom" 
        />
      </button>
    </div>
  );

  const Slike = () => (
    <div className={GalerijaCSS.slike}>
      {currentImages.map((slika) => (
        <Slika key={slika.id} url={slika.url} id={slika.id} />
      ))}
    </div>
  );

  const Listanje = () => (
    <div className={GalerijaCSS.listanje}>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? GalerijaCSS.activePage : ""}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  const FullscreenView = ({ url, onClose }) => (
    <div className={GalerijaCSS.fullscreen_overlay} onClick={onClose}>
      <img src={url} alt="fullscreen" className={GalerijaCSS.fullscreen} />
    </div>
  );

  return (
    <>
    <div className={GalerijaCSS.galerija}>
      <h2>Galerija</h2>
      <Slike />
      <Listanje />
    </div>
    {fullscreenImage && (
      <FullscreenView
        url={fullscreenImage}
        onClose={() => setFullscreenImage(null)}
      />
    )}
    </>
    
  );
}

export default Galerija;
