import KontaktCSS from "..\\css\\kontakt.module.css"
import emailjs from 'emailjs-com';

function Kontakt() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(
          'service_vt5i842',
          'template_ogkyoyg',
          e.target,
          'ijCQb3ct_NU6kldSV'
        ).then(
          (result) => {
            console.log('Success:', result.text);
          },
          (error) => {
            console.error('Failed:', error.text);
          }
        );
    
        e.target.reset();
      }

    return(
        <div className={KontaktCSS.kontaktPage}>
            <div className={KontaktCSS.naslov}>
                <h1>Kontaktirajte nas</h1>
                <p>
                Tim iz Erni Detailinga rado će
                vas saslušati i predložiti ideje za
                događanja na koja možda niste ni pomislili.
                </p>
            </div>
            <form className={KontaktCSS.forma} onSubmit={sendEmail}>
                <h2>
                    Rado bismo čuli vaše mišljenje! 
                    <br />
                    Kontaktirajte nas!
                </h2>
                <label htmlFor="ime">Ime i prezime</label>
                <input type="text" name="ime" placeholder="Ime i prezime" required />
                <label htmlFor="broj_mobitela">Broj mobitela</label>
                <input type="number" name="broj_mobitela" placeholder="Broj mobitela" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" required />
                <label htmlFor="message">Vaša poruka</label>
                <textarea name="message" placeholder="Upišite vašu poruku ovdje" required />
                <button type="submit">Pošalji</button>
            </form>
        </div>
    )
}

export default Kontakt