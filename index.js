const data = [
  {
    type: 'dog',
    breed: 'super-dog',
    age: 1,
    ears: 2,
  },
  {
    type: 'cat',
    breed: 'awesome-cat',
    age: 3,
    whiskers: 3,
  },
  {
    type: 'bird',
    breed: 'cool-bird',
    age: 2,
  },
];

// ['type', 'breed', 'age', 'ears', 'whiskers']
const columns = data.reduce((cols, item) => {
  Object.keys(item).forEach(key => {
    if (!cols.includes(key)) {
      cols.push(key);
    }
  });

  return cols;
}, []);

/**
 * [
 *    ['dog', 'super-dog', '1', '2', ''],
 *    ['cat', 'awesome-cat', '3', '', '3'],
 *    ['bird', 'cool-bird', '2', '', ''],
 * ]
 */
const values = data.map(row => {
  return columns.map(col => {
    return String(row[col] || '');
  });
});

/**
 * [
 *    ['type', 'breed', 'age', 'ears', 'whiskers'],
 *    ['dog', 'super-dog', '1', '2', ''],
 *    ['cat', 'awesome-cat', '3', '', '3'],
 *    ['bird', 'cool-bird', '2', '', ''],
 * ]
 */
const table = [columns, ...values];

// -------------------- of variable length
const generateDivider = length => '-'.repeat(length);

// Prints the table
const renderTable = table => {
  const columnRow = table[0];
  const valueRows = table.slice(1); // the rows excluding the column row

  // Getting the max length of each column
  const columnLengths = columns.map((col, i) => {
    return Math.max(...table.map(x => x[i].length));
  });

  // Prints the column row;
  const renderedColumn = '| ' + columnRow.map((x, i) => x.padEnd(columnLengths[i], ' ')).join(' | ') + ' |';
  const divider = generateDivider(renderedColumn.length);

  console.log(divider);
  console.log(renderedColumn);
  console.log(divider);

  valueRows.forEach(row => {
    // Print each value row
    const renderedRow = '| ' + row.map((x, i) => x.padEnd(columnLengths[i], ' ')).join(' | ') + ' |';
    console.log(renderedRow);
  });

  console.log(divider);
};

renderTable(table);
