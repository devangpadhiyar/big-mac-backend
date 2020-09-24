/* 
  CSV File module fetches CSV data end exports it so that at module level the data is cached
 */

const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync'); //CSV parser library To parse data

// Read file sync and parse CSV data
const content = fs.readFileSync(
  path.join(__dirname, '../public/big-mac-index.csv'),
  'utf-8'
);

/*
Format of data in CSV is array of objects of given schema.

data = [
  {
    Country: 'Argentina',
    Date: '2000-04-01',
    'Local price': '2.5',
    'Dollar ex': '1.0',
    'Dollar price': '2.5',
    'Dollar PPP': '0.9960159362549802',
    'Dollar valuation': '-0.3984063745019806'
  }
]
 */

const data = parse(content, {
  columns: true,
  skip_empty_lines: true,
});

module.exports = data;
