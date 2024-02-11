import React from "react";
import { Modal } from "bootstrap";

/**
 *
 * @param {string} modalId
 * @param {string} modalTitle
 * @param {React.ReactNode} children
 * @returns
 * @example
 * // Button Example
 * <button
 *  className="btn btn-lg btn-outline-primary"
 *  type="button"
 *  data-bs-toggle="modal"
 *  data-bs-target="#exampleModal"
 * >
 * <CustomModal modalId="exampleModal" modalTitle="Example Modal">
 *  <p>Modal Content</p>
 * </CustomModal>
 */

const CustomModal = ({ extraHeaderButton, modalId, modalTitle, children }) => {
  return (
    <div className="modal fade" id={modalId} aria-hidden="true" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>

            <div class="btn-group">
              {extraHeaderButton}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
