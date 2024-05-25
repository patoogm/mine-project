import { Table } from "react-bootstrap"
import PropTypes from "prop-types";
import "../styles/Projects.css"
import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'



export const TableProjects = ({projectName, locationProject, description}) => {
    const useLanguage = () => useContext(LanguageContext);
    const { t } = useLanguage();
    
    
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
                    <td>1</td>
                    <td>{projectName}</td>
                    <td>{locationProject}</td>
                    <td>{description}</td>
                </tr>
            </tbody>
        </Table>
    </>
    )
};

TableProjects.PropTypes = {
    projectName: PropTypes.string.isRequired,
    locationProject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}