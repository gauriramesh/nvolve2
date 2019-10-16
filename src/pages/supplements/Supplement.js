import React, { useState } from "react"; 
import "./Supplement.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const SupplementOptions = {
    TRAVEL_INSURANCE: "Travel Insurance",
    SOFS: "SOFS"
}; 

const Supplement = (props) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [dropdownSelected, setDropdownSelected] = useState("None")

    function toggleDropdown() { setIsDropdownOpen(prev => !prev); }; 
    function changeSelected(newSelected) { setDropdownSelected(prev => newSelected); }; 

    return (
        <div>
            <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    {dropdownSelected}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => setDropdownSelected(() => "None")}>
                    None
                    </DropdownItem> 
                    <DropdownItem onClick={() => changeSelected(SupplementOptions.TRAVEL_INSURANCE)}>
                    {SupplementOptions.TRAVEL_INSURANCE}
                    </DropdownItem>
                    <DropdownItem onClick={() => changeSelected(SupplementOptions.SOFS)}>
                    {SupplementOptions.SOFS}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    ); 

}

export default Supplement; 