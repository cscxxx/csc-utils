import _ from 'lodash';
export { default as _ } from 'lodash';
import dayjs from 'dayjs';
export { default as dayjs } from 'dayjs';
import axios from 'axios';
export { default as axios } from 'axios';

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

export { debounce, fetchData, formatDate };
//# sourceMappingURL=index.esm.js.map
