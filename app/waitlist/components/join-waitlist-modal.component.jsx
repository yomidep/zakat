import Modal from '@/components/Modal';
import OrangeBgButton from '@/components/orange-bg-button';
import React from 'react'

// JW stands for Join waitlist

const JoinWaitlistModal = ({showJWModal, handleJWCloseModal}) => {
    const customMessage = "Hey guys, join the Zakat Chain and help to make a difference in the world. Click on the link to join the waitlist.";
    const url = "https://zakatchain.com";
    const text = customMessage + " \n" + url;
    const encodedMessage = encodeURIComponent(text);
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
                        Thank you for joining the waitlist. You will recieve information on how to join the Zakat Chain soon.
                    </p>
                    <p>
                        Meanwhile, you can help to share the word about Zakat Chain on WhatsApp.
                    </p>
                    <div className="flex justify-center items-center mt-4">
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