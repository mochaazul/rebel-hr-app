import React from "react";

interface DropdownProps {
  dropdownButton: React.ReactNode;
  menuItems: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownButton,
  menuItems
}) => {

  return (
    // <Menu>
    //   <Menu.Button>
    //     { dropdownButton }
    //   </Menu.Button>
    //   <Menu.Items>
    //     {
    //       menuItems.map(menuItem => {

    //         return (
    //           <Menu.Item>
    //             {/* {({active})=>{
    //               return menuItem
    //             }} */}
    //           </Menu.Item>
    //         );
    //       })
    //     }
    //   </Menu.Items>
    // </Menu>
    <></>
  );
};

export default Dropdown;