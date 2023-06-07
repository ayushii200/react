const cars = [
    { title: 'BMW', isname: false, id: 1 },
    { title: 'Volvo', isname: false, id: 2 },
    { title: 'Lamborghini', isname: true, id: 3 },
  ];
  
  export default function Carslist() {
    const listItems = cars.map(cars =>
      <li
        key={cars.id}
        style={{
          color: cars.isname ? 'orange' : 'green'
        }}
      >
        {cars.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }

  