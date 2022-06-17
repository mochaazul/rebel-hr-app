import {Tab} from '@headlessui/react'

interface TabComponentInterface {
  tabList : string[]
}

const Tabs: React.FC<TabComponentInterface> = ({
  tabList
}) => {
  
  return (
  <Tab.Group>
    <Tab.List>
      {
        tabList.map(tabTitle=>{
          return <Tab>{tabTitle}</Tab>
        })
      }
    </Tab.List>
  </Tab.Group>
  )
}


export default Tabs