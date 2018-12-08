/**
 * Created by manuel on 5/8/18.
 */

// Load the Visualization API and the piechart package.
google.charts.load('current', {'packages': ['corechart', 'bar', 'table']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawHashtagTotalChart);
google.charts.setOnLoadCallback(drawKeywordTotalChart);
google.charts.setOnLoadCallback(drawTrendingTotalChart);
google.charts.setOnLoadCallback(drawUserTotalChart);

function drawHashtagTotalChart() {
    var allText = "#mma2018\t62\n#bts\t42\n#vsfashionshow\t38\n#coyg\t38\n#레드벨벳\t32\n#redvelvet_rbb…\t32\n#arstot\t30\n#방탄소년단\t28\n#youthpart2\t22\n#데이식스\t22";

    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0], parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Hashtag');
    data.addColumn('number', 'Top 10 Hashtag Totals');
    data.addRows(arrayData);

    var options = {
        title: 'Top 10 Hashtags Between All Tweets',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Word Count',
            minValue: 0
        },
        vAxis: {
            title: 'Hashtag'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('totalHashtagCount'));

    chart.draw(data, options);
}

function drawKeywordTotalChart() {
    var allText = "trump\t1476\nheadache\t14\nzika\t0\nflu\t14\ndiarrhea\t4\nebola\t2\nmeasles\t0";
    console.log(allText);

    var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0], parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Keywords');
    data.addColumn('number', ' Totals');
    data.addRows(arrayData);

    var options = {
        title: 'Total Keyword Count Between All Tweets',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Word Count',
            minValue: 0
        },
        vAxis: {
            title: 'Keywords'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('totalKeywordCount'));

    chart.draw(data, options);
}

function drawTrendingTotalChart() {

    var allText = "time\t50\ntwitter\t43\nlove\t28\n2018\t27\ndec\t26\npeople\t25\nmma\t23\nalbum\t21\nam\t21\nfull\t21";

    console.log(allText);

        var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0], parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Trending Words');
    data.addColumn('number', ' Totals');
    data.addRows(arrayData);

    var options = {
        title: 'Top 10 Trending Words Between All Tweets',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Word Count',
            minValue: 0
        },
        vAxis: {
            title: 'Trending Words'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('totalTrendingCount'));

    chart.draw(data, options);
}

function drawUserTotalChart() {

    var allText = "1.05382611106538E+018\t92\n2880970217\t88\n1.03553798344782E+018\t87\n34928794\t84\n8.27185503460016E+017\t81\n1.05949463717234E+018\t74\n2828172761\t74\n560382303\t74\n8.33796893822042E+017\t70\n3964605254\t64";

    console.log(allText);

        var allTextLines = allText.split("\n");
    console.log(allTextLines);
    var arrayData = [];
    for (var j=0; j<allTextLines.length; j++) {
            var row = allTextLines[j].split("\t");
            arrayData.push([row[0], parseInt(row[1], 10)]);
    }

    console.log(arrayData);

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Users');
    data.addColumn('number', 'Post Totals');
    data.addRows(arrayData);

    var options = {
        title: 'Top 10 Most Posting Users Between All Tweets',
        chartArea: {width: '800px'},
        hAxis: {
            title: 'Post Count',
            minValue: 0
        },
        vAxis: {
            title: 'User IDs'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('totalUserCount'));

    chart.draw(data, options);
}