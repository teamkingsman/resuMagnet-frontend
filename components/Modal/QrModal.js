import { QRCodeCanvas } from 'qrcode.react';

const QrModal = ({link}) => {
    const baseLink = "http://localhost:3000" 
    return (
        <dialog id="qr-modal" className="modal justify-center">
            <div className="modal-box ">
                <div className="modal-header">
                    <h2 className="text-2xl font-bold">Share This QR</h2>
                </div>
                <div className="modal-body">

                    <QRCodeCanvas
                        value={`${baseLink}/r/${link}`}
                        size={150}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"Q"}
                        includeMargin={true}
                    />
                    <button className="btn btn-xs sm:btn-md md:btn-md lg:btn-lg mx-auto text-whitecolor bg-sub_color rounded-lg hover:bg-whitecolor hover:text-main">Share QR</button>

                </div>

                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </dialog>
    )
}

export default QrModal