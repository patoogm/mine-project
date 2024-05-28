import { Button, Table, Modal } from "react-bootstrap"
import PropTypes from "prop-types";
import "../styles/Projects.css"
import { useContext, useState } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'



export const TableProjects = ({projectName, locationProject, description}) => {
    const useLanguage = () => useContext(LanguageContext);
    const { t } = useLanguage();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>{t.projects.projectNameHeader}</th>
                    <th>{t.projects.location}</th>
                    <th>{t.projects.description}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button variant="light" onClick={handleShow}>+</Button></td>
                    <td>{projectName}</td>
                    <td>{locationProject}</td>
                    <td>{description}</td>
                </tr>
            </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{projectName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{t.projects.aboutProject}</Modal.Body>
        </Modal>
    </>
    )
};

TableProjects.PropTypes = {
    projectName: PropTypes.string.isRequired,
    locationProject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}