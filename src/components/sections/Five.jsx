import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Clipboard2Check, Clipboard2CheckFill, GiftFill } from 'react-bootstrap-icons';

const Five = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = ' ';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container fluid className="fiveInv">
      <div className=' text-center pb-2 pt-4'>
        <h2 className='titulo fw-bold' style={{fontSize:'2.6rem'}}>Regalos</h2>
        <p className='asistenciaFont fs-6 my-0'>Para mi tu presencia es el mejor regalo,</p>
        <p className='asistenciaFont fs-6 my-0'>Pero si quieres regalarme algo y no sabes que</p>
        <p className='asistenciaFont fs-6 mb-3'>Te dejo esta opcion...</p>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
          <Button className="cardButton fs-6 mx-auto fw-bold">
            {copied ?
              <>
                Cbu Copiado!<Clipboard2CheckFill/>
              </> 
             :
             <>
                Mi Cbu <Clipboard2Check/>
             </> 
            }
          </Button>
        </CopyToClipboard>
        <p className='asistenciaFont text-decoration-underline mt-3 fst-italic'>Espero no Faltes!!</p>
      </div>
    </Container>
  );
};

export default Five;