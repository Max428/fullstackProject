import React, {useState} from 'react';
import './ShareLinkModal.sass';



const ShareLinkModal = ({
    closeModal,
    sharedUrl
}) => {

    const [textCopiedToClipboard, setTextCopiedToClipboard] = useState(false);

	//remove port from url
	const fullUrl =
		window.location.hostname !== 'localhost'
			? `${window.location.hostname}${sharedUrl}`
			: `${window.location.hostname}:3000${sharedUrl}`;
	const copyToClipboard = () => {
		setTextCopiedToClipboard(false);
		var copyText = document.getElementById('shareLinkModalTextArea');
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand('copy');
		setTextCopiedToClipboard(true);
		const setTextCopiedToClipboardTimeout = setTimeout(function () {
			setTextCopiedToClipboard(false);
			clearTimeout(setTextCopiedToClipboardTimeout);
		}, 2500);
	};


    return(
        <div className="ShareLinkModal" onClick={closeModal}>
			<div className="shareLinkModalContent" onClick={(e) => e.stopPropagation()}>
				<div className="top-left-background"></div>
				<div className="bottom-right-background"></div>
				<button onClick={closeModal} className="closeShareLinkModalButton">
					Stäng
				</button>
				<input value={fullUrl} id="shareLinkModalTextArea" readOnly />
				<div className="linkCopiedMessageContainer">
					{textCopiedToClipboard ? <p id="linkCopiedMessage">Länken kopierad</p> : null}
				</div>
				<button onClick={copyToClipboard} className="copyLinkButton">
					Kopiera länk
				</button>
			</div>
		</div>


    );

}
export default ShareLinkModal;