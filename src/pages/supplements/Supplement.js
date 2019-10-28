import React, { useState } from "react";
import "./Supplement.css";
import ProgressBar from "../../components/ProgressBar";
import { PageOptions } from "../../services/eventServices";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Container
} from "reactstrap";
import Sofs from "./Sofs";
import TravelInsurance from "./TravelInsurance";
import Pepsi from "./Pepsi";

export const SupplementOptions = {
    TRAVEL_INSURANCE: "Travel Insurance",
    SOFS: "SOFS", 
    PEPSI: "Pepsi"
}; 

export const SupplementTable = (props) => {
    const SupplementList = () => {
        return Object.keys(props.addedSupplements).map(element => {
            return props.addedSupplements[element] ? (
                <tr key={SupplementOptions[element]}>    
                    <td>{SupplementOptions[element]}</td>
                    <td><Button onClick={() => props.removeSupplement(element)}>Remove</Button></td>
                </tr>
            ) : null;
        }); 
    }

    return (
        <Table striped> 
            <thead>
                <tr> 
                    <th>Supplement</th>
                    <th>Actions</th>
                </tr> 
            </thead>
            <tbody>
                <SupplementList />
            </tbody>
        </Table>
    ); 

}

const Supplement = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [dropdownSelected, setDropdownSelected] = useState("Add"); 
    const [addedSupplements, setAddedSupplements] = useState({"SOFS": null, "TRAVEL_INSURANCE": null, "PEPSI": null}); 

    function toggleDropdown() { setIsDropdownOpen(prev => !prev); }; 
    function changeSelected(newSelected) { setDropdownSelected(() => newSelected); }; 
    function addSupplement(key, newSupplement) { setAddedSupplements(prev => ({...prev, [key]: newSupplement })); }
    function removeSupplement(supplementToDelete) { setAddedSupplements(prev => ({...prev, [supplementToDelete]: null})); }

    return (
        <>
            <ProgressBar currentPage={PageOptions.supplements}></ProgressBar>

            <Container>
            <h5>Supplements</h5>
            <div style={{padding: "20px",
              backgroundColor: "#f5f1e7",
              borderRadius: "10px"}}>
                  
                  <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown} style={{ marginBottom: '20px'}}>
                    <DropdownToggle caret>
                        {dropdownSelected}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled={addedSupplements.TRAVEL_INSURANCE !== null} onClick={() => changeSelected(SupplementOptions.TRAVEL_INSURANCE)}>
                        {SupplementOptions.TRAVEL_INSURANCE}
                        </DropdownItem>
                        <DropdownItem disabled={addedSupplements.SOFS !== null} onClick={() => changeSelected(SupplementOptions.SOFS)} >
                        {SupplementOptions.SOFS}
                        </DropdownItem>
                        <DropdownItem disabled={addedSupplements.PEPSI !== null} onClick={() => changeSelected(SupplementOptions.PEPSI)} >
                        {SupplementOptions.PEPSI}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                {dropdownSelected === "Add" && <SupplementTable addedSupplements={addedSupplements} removeSupplement={removeSupplement} /> }

                {dropdownSelected === SupplementOptions.SOFS && <Sofs addSupplement={addSupplement} changeSelected={changeSelected} org={props.org} /> }

                {dropdownSelected === SupplementOptions.TRAVEL_INSURANCE && <TravelInsurance addSupplement={addSupplement} changeSelected={changeSelected} /> }

                {dropdownSelected === SupplementOptions.PEPSI && <Pepsi addSupplement={addSupplement} changeSelected={changeSelected} /> }
                <Button color="primary" style={{ margin: '30pt', float: 'left' }} onClick={props.previousForm}> &lt; Location </Button>
            <div className="bottom-right">
                <Button color="primary" style={{ margin: '10pt', float: 'right' }} disabled={dropdownSelected !== "Add"} onClick={() => { props.updateSupplements(addedSupplements); props.nextForm(); }}> Review &gt; </Button> 
            </div>
            </div>
            </Container>
        </>
    );

}

export default Supplement; 
