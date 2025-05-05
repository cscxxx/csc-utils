import _ from "lodash";
import dayjs from "dayjs";
import axios from "axios";

// 导出依赖
export { _, dayjs, axios };

// 工具函数示例
export function formatDate(
  date: Date | string,
  format = "YYYY-MM-DD HH:mm:ss"
): string {
  return dayjs(date).format(format);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  return _.debounce(func, wait);
}

export async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.get<T>(url);
  return response.data;
}
/**
 * enum HttpStatus {
 *   OK = 200,
 *   NotFound = 404,
 *   ServerError = 500,
 * }
 * 将枚举转换为 {value: 枚举名, label: 枚举值} 的数组
 * @param enumObj 枚举对象
 * @returns 转换后的数组
 */
export function enumToArray<T extends Record<string, string | number>>(
  enumObj: T
): Array<{ value: keyof T; label: T[keyof T] }> {
  return Object.entries(enumObj)
    .filter(([key]) => isNaN(Number(key))) // 过滤掉数字枚举的反向映射
    .map(([key, value]) => ({
      value: key as keyof T,
      label: value as T[keyof T],
    }));
}
export * from "./stories";
