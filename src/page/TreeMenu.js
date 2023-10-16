import React from 'react';

const App = () => {
  const MenuItem = ({ name, items }) => {
    if (!items || items.length === 0) {
      return <li>{name}</li>;
    }

    return (
      <li className="">
        {name}
        <ul>
          {items.map((item, index) => (
            <MenuItem key={index} name={item.name} items={item.items} />
          ))}
        </ul>
      </li>
    );
  };

  const MultiLevelMenu = ({ data }) => {
    return (
      <ul className="">
        {data.map((item, index) => (
          <MenuItem key={index} name={item.name} items={item.items} />
        ))}
      </ul>
    );
  };
  const data = [
    {
      name: 'Electronics',
      items: ['Laptop', 'Headphones'],
    },
    {
      name: 'Headphones',
      items: ['Shure', 'Bose', 'JLB'],
    },
    {
      name: 'Cars',
      items: ['SUV', 'Sedan', 'Sports'],
    },
    {
      name: 'SUV',
      items: ['Honda', 'Ferrari'],
    },
    {
      name: 'Laptop',
      items: ['Thinkpad'],
    },
  ];

  return <MultiLevelMenu data={data} />;
};

export default App;
