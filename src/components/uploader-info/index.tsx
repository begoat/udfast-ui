import React, { useState, useCallback, useMemo } from 'react';
import { Button, Modal } from 'rsuite';
import QRCode from 'qrcode.react';
import { globalHistory as history } from '@reach/router';

import { useLocale } from '@/utils/hooks';
import { copyToClipboard } from '@/utils/clipboard';

import uploaderInfoStyle from './index.module.scss';

interface UploaderInfoProps {
  peerId: string;
}

export default ({
  peerId = ''
}: UploaderInfoProps) => {
  const [modalShow, setModalShow] = useState(false);
  const { location: { origin } } = history;
  const url = useMemo(() => {
    return `${origin}/d/${peerId}`;
  }, [peerId, origin]);
  const { formatMessage } = useLocale();
  const handleShowQrCode = useCallback(() => {
    setModalShow(true);
  }, []);

  const handleHideQrCode = useCallback(() => {
    setModalShow(false);
  }, []);

  const handleCpClicked = useCallback(() => {
    copyToClipboard(url);
  }, [url]);

  return (
    <>
      <div className={uploaderInfoStyle.container}>
        <span>{formatMessage('tempAddress')}</span>
        <p>{url}</p>
        <div className={uploaderInfoStyle.operation}>
          <Button appearance='primary' onClick={handleCpClicked}>{formatMessage('copy')}</Button>
          <QRCode
            value={url}
            size={40}
            onClick={handleShowQrCode}
          />
        </div>
      </div>
      <Modal show={modalShow} onHide={handleHideQrCode} size='xs'>
        <Modal.Body>
          <div className={uploaderInfoStyle.modalBodyInner}>
            <QRCode
              value={url}
              size={200}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
