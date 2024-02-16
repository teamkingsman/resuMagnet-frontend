import { QRCodeCanvas } from 'qrcode.react';

const QrModal = ({link}) => {
    return (
        <dialog id="qr-modal" className="modal">
            <div className="modal-box w-10/12 max-w-5xl h-5/6">
                <div className="modal-header">
                    <h2 className="text-2xl font-bold">Crop Image</h2>
                </div>
                <div className="modal-body">

                    <QRCodeCanvas
                        value={"fdfiroz.github.io"}
                        size={150}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"Q"}
                        includeMargin={true}
                    />
                </div>

                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </dialog>
    )
}

export default QrModal