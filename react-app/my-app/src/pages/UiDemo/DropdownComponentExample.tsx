import { Menu } from '@headlessui/react';
import { Button, Input, Text } from 'components';
import Dropdown from 'components/Dropdown';


const menuItemsDummy = [
  {
    title: 'Menu 1'
  },
  {
    title: 'Menu 2'
  },
  {
    title: 'Menu 3'
  },
  {
    title: 'Menu 4'
  }
  
]
const DropdownComponentExample = () => {
	

  const renderMenuItem = () => {
    return menuItemsDummy.map(item=>{
      return <a>{item.title}</a>
    })
  }

  const dropdownButton = () => (
    <Text.P>More</Text.P>
  )

	return (
	  <>
      <Dropdown 
      dropdownButton = { dropdownButton() }
      menuItems ={ renderMenuItem() } />
    </>
	);
};

export default DropdownComponentExample;
