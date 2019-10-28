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
  Table
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
    const [dropdownSelected, setDropdownSelected] = useState("None"); 
    const [addedSupplements, setAddedSupplements] = useState({"SOFS": null, "TRAVEL_INSURANCE": null, "PEPSI": null}); 

    function toggleDropdown() { setIsDropdownOpen(prev => !prev); }; 
    function changeSelected(newSelected) { setDropdownSelected(() => newSelected); }; 
    function addSupplement(key, newSupplement) { setAddedSupplements(prev => ({...prev, [key]: newSupplement })); }
    function removeSupplement(supplementToDelete) { setAddedSupplements(prev => ({...prev, [supplementToDelete]: null})); }

    return (
        <>
            <ProgressBar currentPage={PageOptions.supplements}></ProgressBar>
            <div className="container">
                <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown}>
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
            </div>

            <div className="container">
               
                {dropdownSelected === "None" && <SupplementTable addedSupplements={addedSupplements} removeSupplement={removeSupplement} /> }

                {dropdownSelected === SupplementOptions.SOFS && <Sofs addSupplement={addSupplement} changeSelected={changeSelected} org={props.org} /> }

                {dropdownSelected === SupplementOptions.TRAVEL_INSURANCE && <TravelInsurance addSupplement={addSupplement} changeSelected={changeSelected} /> }

                {dropdownSelected === SupplementOptions.PEPSI && <Pepsi addSupplement={addSupplement} changeSelected={changeSelected} /> }

            </div>
            <Button color="primary" style={{ position: "absolute", bottom: "20pt", left: "20pt" }} onClick={props.previousForm}> &lt; Location </Button>
            <div className="bottom-right">
                <Button color="primary" disabled={dropdownSelected !== "None"} onClick={() => { props.updateSupplements(addedSupplements); props.nextForm(); }}> Review &gt; </Button> 
            </div>
        </>
    );

}

export default Supplement; 
