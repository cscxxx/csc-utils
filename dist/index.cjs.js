'use strict';

var _ = require('lodash');
var dayjs = require('dayjs');
var axios = require('axios');

// 工具函数示例
function formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
    return dayjs(date).format(format);
}
function debounce(func, wait) {
    return _.debounce(func, wait);
}
async function fetchData(url) {
    const response = await axios.get(url);
    return response.data;
}

exports._ = _;
exports.dayjs = dayjs;
exports.axios = axios;
exports.debounce = debounce;
exports.fetchData = fetchData;
exports.formatDate = formatDate;
//# sourceMappingURL=index.cjs.js.map
