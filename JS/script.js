google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(desenharMapa);

function desenharMapa() {
    let data = google.visualization.arrayToDataTable(obterDados());

    let options = {
        // region: 'BR'
        colorAxis: { colors: ['#d30c13', '#be090e', '#a9060a', '#930305', '#7e0000'] },
        backgroundcolor: 'lightblue'
    };

    let chart = new google.visualization.GeoChart(document.getElementById('mapa'));

    chart.draw(data, options);
}

// função do mapa

function obterDados() {
    let dados = [
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 700],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ]
    return dados
}

// gráfico pizza

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharPizza);

function desenharPizza() {

    let data = google.visualization.arrayToDataTable(obterDados1());

    let options = {
        title: 'My Daily Activities'
    };

    let chart = new google.visualization.PieChart(document.getElementById('pizza'));

    chart.draw(data, options);
}

function obterDados1() {
    let dados1 = [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]
    return dados1
}

// gráfico tabela

google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(desenharTabela);

function desenharTabela() {
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Salary');
  data.addColumn('boolean', 'Full Time Employee');
  data.addRows([
    ['Mike',  {v: 10000, f: '$10,000'}, true],
    ['Jim',   {v:8000,   f: '$8,000'},  false],
    ['Alice', {v: 12500, f: '$12,500'}, true],
    ['Bob',   {v: 7000,  f: '$7,000'},  true],
    ['Jake',   {v: 6730,  f: '$6,730'},  true],
    ['Alphonso',   {v: 18000,  f: '$18,000'},  false],
    ['Warley',   {v: 7010,  f: '$7,010'},  true],
    ['Chris',   {v: 7500,  f: '$7,500'},  false],
    ['Ben',   {v: 9320,  f: '$9320'},  false],
    ['Martin',   {v: 8120,  f: '$8120'},  true]
  ]);
    
   let table = new google.visualization.Table(document.getElementById('tabela'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}