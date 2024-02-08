'use client'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Cropper } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/themes/corners.css';

const CropImage = ({ photoUrl }) => {
    console.log(photoUrl)
    const cropperRef = useRef(null);

	const [coordinates, setCoordinates] = useState(null);

	const [preview, setPreview] = useState();

	const [image] = useState(photoUrl);
    const onCrop = () => {
		if (cropperRef.current) {
			setCoordinates(cropperRef.current.getCoordinates());
			setPreview(cropperRef.current.getCanvas()?.toDataURL());
		}
	};
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-10/12 max-w-5xl h-5/6">
                <div className="modal-header">
                    <h2 className="text-2xl font-bold">Crop Image</h2>
                </div>
                <div className="modal-body">
                    <Cropper
                        ref={cropperRef}
                        image={image}
                        crop={onCrop}
                        width={400}
                        height={400}
                        theme="corners"
                    />
                    <div className="flex justify-center">
                        <Image
                            src={preview}
                            alt="Preview"
                            className="w-40 h-40 rounded-md border-2 border-gray-300"
                        />
                    </div>
                    
		</div>

                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </dialog>
    )
}

export default CropImage