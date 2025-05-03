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
