import React, { useState } from "react"; 
import "./Supplement.css";
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from "reactstrap";
import Sofs from "./Sofs";
import TravelInsurance from "./TravelInsurance"; 

const SupplementOptions = {
    TRAVEL_INSURANCE: "Travel Insurance",
    SOFS: "SOFS"
}; 

const Supplement = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [dropdownSelected, setDropdownSelected] = useState("None"); 
    const [addedSupplements, setAddedSupplements] = useState({"SOFS": null, "TRAVEL_INSURANCE": null}); 

    function toggleDropdown() { setIsDropdownOpen(prev => !prev); }; 
    function changeSelected(newSelected) { setDropdownSelected(() => newSelected); }; 
    function addSupplement(key, newSupplement) { setAddedSupplements(prev => ({...prev, [key]: newSupplement })); }
    function removeSupplement(supplementToDelete) { setAddedSupplements(prev => ({...prev, [supplementToDelete]: null})); }

    const SupplementList = () => {

        return Object.keys(addedSupplements).map(element => {
            return addedSupplements[element] ? (
                <tr>    
                    <td>{SupplementOptions[element]}</td>
                    <td><Button onClick={() => removeSupplement(element)}>Remove</Button></td>
                </tr>
            ) : null;
        }); 

    }

    return (
        <>
            <div className="container">
                <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                        {dropdownSelected}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled={addedSupplements.TRAVEL_INSURANCE !== null} onClick={() => changeSelected(SupplementOptions.TRAVEL_INSURANCE)}>
                        {SupplementOptions.TRAVEL_INSURANCE}
                        </DropdownItem>
                        <DropdownItem disabled={addedSupplements.SOFS !== null} onClick={() => changeSelected(SupplementOptions.SOFS)} disabled={addedSupplements.sofs} >
                        {SupplementOptions.SOFS}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="container">
               
                {dropdownSelected === "None" && 
                    <Table striped> 
                        <tr>
                            <th>Supplement</th>
                            <th>Actions</th>
                        </tr>
                        <SupplementList />
                    </Table>
                }

                {dropdownSelected === SupplementOptions.SOFS && <Sofs addSupplement={addSupplement} changeSelected={changeSelected} /> }

                {dropdownSelected === SupplementOptions.TRAVEL_INSURANCE && <TravelInsurance addSupplement={addSupplement} changeSelected={changeSelected} /> }

            </div>

            <div className="bottom-right">
                <Button color="primary" onClick={() => props.updateSupplements(addedSupplements)}> Submit and Continue to Review </Button> 
            </div>
        </>
    );

}

export default Supplement; 