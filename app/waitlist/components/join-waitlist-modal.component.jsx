import Modal from '@/components/Modal';
import ShareButtonPhoneComponent from '@/components/Share-button-phone.component';
import OrangeBgButton from '@/components/orange-bg-button';
import React, { useEffect, useState } from 'react'

// JW stands for Join waitlist
// This component is a modal that pops up when a user joins the waitlist
const customMessage = "Join ZakatChain in using the power of Web3 to impact the lives of the needy, poor and orphaned. ";
const url = "https://www.zakatchain.com";
const text = customMessage + " \n" + url;
const encodedMessage = encodeURIComponent(text);
// This is the message that will be shared when the user clicks the share button

const textToShare = {
    title: 'Zakat Chain',
    text: customMessage,
    url: url
};

// The comoponent recieves two props, showJWModal and handleJWCloseModal. showJWModal is a boolean that determines if the modal should be shown or not. handleJWCloseModal is a function that closes the modal
const JoinWaitlistModal = ({showJWModal, handleJWCloseModal}) => {
    // This function is called when the user clicks the share button. It shares the message.
      const handleShare = async () => {
        try {
          await navigator.share(textToShare);
        } catch (error) {
          alert('Error sharing:', error.message);
        }
      };
  return (
    <Modal
        isVisible={showJWModal}
        onClose={handleJWCloseModal}
        animation="fade"
    >
        <div className="rounded">
            <div className="py-5 px-2">
                <div className="flex justify-center items-center flex-col text-center">
                    <p className="">
                    Thank you for joining ZakatChain! You are now part of ZakatChain community!
                    </p>
                    <p>
                    Earn divine rewards from Allah by spreading the word of Zakat Chain.
                    </p>
                    {/*ShareButtonPhoneComponent will be shown on mobile phones only */}
                    <ShareButtonPhoneComponent handleShare={handleShare} additionalClasses="flex justify-center items-center mt-4 md:hidden" />
                    <div className="hidden justify-center items-center mt-4 md:flex" onClick={handleShare}>
                        <OrangeBgButton additionalClasses="rounded font-semibold">
                            <a href={`whatsapp://send?text=${encodedMessage}`} target='_blank'>
                                Share on WhatsApp
                            </a>
                        </OrangeBgButton>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default JoinWaitlistModal;