import React from "react";

import "./Modal.css";


function Modal({ setOpenModal, props }) {

    return (
        <>
            <div className='modal'>
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                            >
                                X
                            </button>
                        </div>
                        <div className="modal_img">
                            <img
                                src={props.imgUrl}
                            ></img>

                        </div>
                        <div className="body">

                            {props.name}
                            <br></br>
                            ${props.price}
                        </div>
                        {/* <div className="footer">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                id="cancelBtn"
                            >
                                Cancel
                            </button>

                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Modal;
