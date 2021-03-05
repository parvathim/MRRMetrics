'use strict';
require('dotenv').config();

const ChartMogul = require('chartmogul-node');
const config = new ChartMogul.Config(process.env.CHARTMOGUL_ACCOUNT_TOKEN, process.env.CHARTMOGUL_SECRET_KEY);

console.log();
console.log("Total MRR for Q1 2019:");
console.log();

ChartMogul.Metrics.mrr(config, {
    'start-date': '2021-01-01',
    'end-date': '2021-04-30',
}).then(res => {
    var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    for (let i = 0; i < res.entries.length; i++) {
        var month = res.entries[i].date.substr(5, 2);
        console.log(months[month - 1] + ":  " + res.entries[i].mrr);
    }
})