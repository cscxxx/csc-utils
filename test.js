import {
  formatDate,
  debounce,
  fetchData,
  enumToArray,
} from "./dist/index.esm.js";

// 测试日期格式化
console.log("格式化当前日期:", formatDate(new Date()));

// 测试防抖函数
const debouncedLog = debounce((text) => {
  console.log("防抖输出:", text);
}, 1000);

debouncedLog("测试1");
debouncedLog("测试2");
debouncedLog("测试3"); // 只会输出 "测试3"

// 测试 API 请求
fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("API 响应:", data))
  .catch((err) => console.error("API 错误:", err));

// 测试枚举转换
const HttpStatus = {
  OK: "200",
  NotFound: 404,
  ServerError: 500,
};

console.log("枚举转换:", enumToArray(HttpStatus));
