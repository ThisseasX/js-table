const { inspect } = require('util');

const data = [
  {
    type: 'dog',
    breed: 'super-dog',
    age: 1,
    ears: 2,
  },
  {
    type: 'cat',
    breed: 'awesome-dog',
    age: 3,
    whiskers: 3,
  },
  {
    type: 'bird',
    breed: 'cool-bird',
    age: 2,
  },
];

const columns = data.reduce((cols, item) => {
  Object.keys(item).forEach(key => {
    if (!cols.includes(key)) {
      cols.push(key);
    }
  });

  return cols;
}, []);

const values = data.map(row => {
  return columns.map(col => {
    return String(row[col] || '');
  });
});

const table = [columns, ...values];

// console.log(inspect(table));

const generateDivider = length => '-'.repeat(length);

const renderTable = table => {
  const columnRow = table[0];
  const valueRows = table.slice(1);

  const renderedColumn = '| ' + columnRow.map(x => x.padEnd(12, ' ')).join(' | ') + ' |';
  const divider = generateDivider(renderedColumn.length);

  console.log(divider);
  console.log(renderedColumn);
  console.log(divider);

  valueRows.forEach(row => {
    const renderedRow = '| ' + row.map(x => x.padEnd(12, ' ')).join(' | ') + ' |';
    console.log(renderedRow);
  });

  console.log(divider);
};

renderTable(table);
