import logo from './logo.svg';
import './App.css';
import { Sidebar} from 'flowbite-react';

function App() {
  return (
    <>
   <div className="w-fit">
  <Sidebar aria-label="Sidebar with logo branding example">
    <Sidebar.Logo
      href="#"
      img="favicon.png"
      imgAlt="Flowbite logo"
      
    >
   
      Flowbite
     
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        
        >
          Dashboard
        </Sidebar.Item>
       
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>
    </>
  );
}

export default App;
