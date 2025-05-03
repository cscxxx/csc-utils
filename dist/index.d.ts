import _ from "lodash";
import dayjs from "dayjs";
import axios from "axios";
export { _, dayjs, axios };
export declare function formatDate(date: Date | string, format?: string): string;
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
export declare function fetchData<T>(url: string): Promise<T>;
