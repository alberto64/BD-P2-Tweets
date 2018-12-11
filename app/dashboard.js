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
    var allText = "#grammys\t47\n#bts\t32\n[#2018mama]\t31\n#finsup\t31\n[#2018mama\t27\n[#아이엠]\t23\n#armynavygame\t19\n#nevsmia\t18\n#boca!\t18\n#finsup\t17";

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
    var allText = "headache\t1235\nflu\t689\nebola\t163\ndiarrhea\t92\nmeasles\t57\nzika\t11";

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

    var allText = "trump\t215\nthank\t164\ntheir\t158\nover\t142\ntime\t134\nwin\t122\n&amp;\t119\npeople\t106\npresident\t97\nyear\t96";


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

    var allText = "25073877\t4883\n890891\t2060\n739784130\t1303\n292929271\t886\n232901331\t884\n21059255\t879\n105119490\t854\n138203134\t854\n7.80206406024692E+017\t840\n8.7824760009651E+017\t763";

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