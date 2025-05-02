import { useState, useEffect } from "react";
import GalerijaCSS from "..\\css\\galerija.module.css";

function Galerija() {
  const slike = [
    { url: "src/assets/image2.png", id: "img1" },
    { url: "src/assets/image2.png", id: "img2" },
    { url: "src/assets/image2.png", id: "img3" },
    { url: "src/assets/image2.png", id: "img4" },
    { url: "src/assets/image2.png", id: "img5" },
    { url: "src/assets/image2.png", id: "img6" },
    { url: "src/assets/image2.png", id: "img7" },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(
    window.innerWidth < 770 ? 2 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      setImagesPerPage(window.innerWidth < 770 ? 2 : 4);
      setCurrentPage(0); 
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
      <button className={GalerijaCSS.zoom_btn}>
        <img src="src/assets/search-interface-symbol1.png" alt="zoom" />
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

  return (
    <div className={GalerijaCSS.galerija}>
      <h2>Galerija</h2>
      <Slike />
      <Listanje />
    </div>
  );
}

export default Galerija;
