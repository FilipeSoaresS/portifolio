import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contato() {
  const phoneNumber = '5548996755924'; // Número de telefone para o WhatsApp
  const emailAddress = 'filipesoaresilva@gmail.com'; // Endereço de email

  const openWhatsApp = () => {
    const message = 'Olá, estou entrando em contato pelo WhatsApp';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const sendEmail = () => {
    const subject = 'Contato';
    const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.open(emailURL);
  };

  return (
    <div>
      <h1>Fale comigo:</h1>
      <p className='contato' onClick={sendEmail}>
        Email: filipesoaresilva@gmail.com
        <FaEnvelope className="icones" />
      </p>
      <p className='contato' onClick={openWhatsApp}>
        Telefone/WhatsApp: 48-996755924
        <FaWhatsapp className="icones" />
      </p>
      <p className='contato' style={{ margin: '20px', fontWeight: 'bold', textAlign: 'center' }}>Minhas redes:</p>
      <div className="icone-container">
        <a href="https://github.com/FilipeSoaresS">
          <FaGithub className="icones" />
        </a>
        <a href="https://www.instagram.com/lipess/">
          <FaInstagram className="icones" />
        </a>
        <a href="https://www.linkedin.com/in/filipe-soares-616854243/">
          <FaLinkedin className="icones" />
        </a>
      </div>
    </div>
  );
}

export default Contato;
