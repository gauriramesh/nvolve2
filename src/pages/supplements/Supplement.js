import React, { useState } from "react"; 
import "./Supplement.css";
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from "reactstrap";
import Sofs from "./Sofs";

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
                <ListGroupItem key={element}> 
                    {SupplementOptions[element]} 
                    <Button onClick={() => removeSupplement(element)}>Remove</Button>
                </ListGroupItem>
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
                        <DropdownItem onClick={() => changeSelected(SupplementOptions.TRAVEL_INSURANCE)}>
                        {SupplementOptions.TRAVEL_INSURANCE}
                        </DropdownItem>
                        <DropdownItem onClick={() => changeSelected(SupplementOptions.SOFS)} disabled={addedSupplements.sofs} >
                        {SupplementOptions.SOFS}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="container">
               
                {dropdownSelected === "None" && 
                    <ListGroup flush> 
                        <ListGroupItem color="info">Added Supplements</ListGroupItem>
                        <SupplementList />
                    </ListGroup>
                }

                {dropdownSelected === SupplementOptions.SOFS && <Sofs addSupplement={addSupplement} changeSelected={changeSelected} /> }

            </div>

            <div className="bottom-right">
                <Button color="primary"> Submit and Continue to Review </Button> 
            </div>
        </>
    );

}

export default Supplement; 