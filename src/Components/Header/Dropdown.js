import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CategoryButton extends Component {
    render() {
        return (
            <Dropdown
                isOpen
                toggle={function noRefCheck() { }}
            >
                <DropdownToggle caret>
                    Category
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem tag={Link} to="/animal">
                        Animal
                    </DropdownItem>

                    <DropdownItem tag={Link} to="/nature">
                        Nature
                    </DropdownItem>
                    <DropdownItem tag={Link} to='/tech'>
                        Tech
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default CategoryButton;