import logo from './logo.svg';
import images from './mysore.jpg';
import img1 from './Dubai.jpg';
import img2 from './Brindavan-Garden-Mysore.webp';
import img3 from './Kedarnath.webp';
import img4 from './kashmir.jpg';
import './App.css';

function App() {
  return (
  
    <div className="App">
      <ul className='nav'>
      <h4> 
         <li><a href='#s'>Switzerland</a> </li>
         <li><a href='#d'>Dubai</a></li>
         <li><a href='#m'> Mysore</a></li>
         <li><a href='#ke'>Kedarnath</a></li>
         <li><a href='#k'>Kashmir</a></li>
         </h4>
      </ul>
      <h1>Best Places To Visit</h1>
      <div id='s'>
      <h2>Switzerland</h2>
      <p>Switzerland is famous for its mountains, clocks and its food – especially cheese and chocolates. 
        It's a fantastic place for winter sports. The British Royals love to snowboard in Klosters while skiing 
        in Zermatt gives you fantastic views of the iconic Matterhorn mountain.</p>
        <center><img src={images} className="App-logo"/></center></div>
      <div id='d'>
        <h2>Dubai</h2>
        <p>Dubai is famous for the record-breaking Burj Khalifa, Dubai Mall, and the Palm, its vibrant culture, 
          turbulent history, modern infrastructure, huge aquariums, and indoor ski slopes. Dubai is also known for
           its ultra-fast cars, driverless subway, scorching summer heat, and fantastic beaches.</p>
        <center><img src={img1} className="App-logo"/></center></div>
      <div id='m'>
        <h2>Mysore</h2>
        <p>Mysore is famous in the world for its sandalwood and rosewood artifacts, stone sculptures, incense sticks,
           inlay work with ivory and its exquisite silk sarees. Mysuru emerged to be one of the major IT hubs in
            Karnataka. Mysuru is second in state for software exports.</p>
        <center><img src={img2} className="App-logo"/></center></div>
        <div id='ke'>
        <h2>Kedarnath</h2>
        <p>Kedarnath forms one of the four sites of the Chota Char Dham Pilgrimage. Dedicated to Lord Shiva, 
          Kedarnath Temple is among the 275 temples of Paadal Petra Sthalams (the most powerful Shiva temples in
           the world) and is also the most important among the Panch Kedars.</p>
        <center><img src={img3} className="App-logo"/></center></div>
        <div id='k'>
        <h2>Kashmir</h2>
        <p>Kashmir is famous for dry fruits, Pashmina shawls, silverware, traditional jewelry, and carpets.</p>
        <center><img src={img4} className="App-logo"/></center></div>

        
    </div>
    
  );
}

export default App;
