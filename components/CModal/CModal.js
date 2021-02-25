import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./CModal.module.css";

function CModal({ show, onClose, project_name, desc }) {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={onClose}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center", padding: "10px 20px" }}>
            {project_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{ padding: "20px " }}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CModal;
