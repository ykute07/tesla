import './App.css';
import Header from './components/Header';
import Item from './components/Item'
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {                               //checking changes for github
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item 
          title='Lowest Cost Solar Panel In America'
          desc='Money-back guarantee'
          descLinks=''
          backgroundImg={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
          first
        
        />
        
        <Item
          title='Model S'
          desc='$69,420'
          descLinks=''
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
         
        />
        <Item 
          title='Model 3'
          desc='Money-back guarantee'
          descLinks=''
          backgroundImg={Model3}
          leftBtnText='CUSTOM ORDER'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
         
        />
        <Item 
          title='Model X'
          desc='Money-back guarantee'
          descLinks=''
          backgroundImg={ModelX}
          leftBtnText='CUSTOM ORDER'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
         
        />
        <Item 
          title='Model X'
          desc='Money-back guarantee'
          descLinks=''
          backgroundImg={ModelY}
          leftBtnText='CUSTOM ORDER'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
         
        />
        <Item 
          title='Accessories'
          desc='Money-back guarantee'
          descLinks=''
          backgroundImg={Accessories}
          leftBtnText='CUSTOM ORDER'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
         
        />
        <Item 
          title=' Solar Roof'
          desc='Money-back guarantee'
          descLinks=''
          backgroundImg={SolarRoof}
          leftBtnText='CUSTOM ORDER'
          leftBtnLinks=''
          rightBtnText='LEARN MORE'
          rightBtnLinks=''
          twoButtons='true'
         
        />
        
      </div>
    </div>
  );
}

export default App;
