import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_712bcod', 'template_f0qmljo', form.current, {
        publicKey: 'wbEa7QT3kxF66S4Fg',
      })
      .then(
        () => {
          console.log('Contact envoyé!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <h2 className="mb-6" id="contact">Contact 👋</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
        <label htmlFor="subject">Sujet</label>
        <input type="text" id="subject" name="subject" className="bg-slate-100 p-2 rounded-lg" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} className="bg-slate-100 p-2 rounded-lg"></textarea>
        <button type="submit" className="w-[150px] bg-[color:--primary] text-white font-bold px-4 py-2 rounded-lg" >Envoyer</button>
      </form>
    </>
  )
}

export default ContactForm;