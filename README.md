# csc-utils

A TypeScript utility library with commonly used tools and functions.

## Features

- TypeScript support
- Built with Rollup
- Includes popular utilities:
  - lodash
  - dayjs
  - axios

## Installation

```bash
npm install csc-utils
```

## Usage

```typescript
import { formatDate, debounce, fetchData } from "csc-utils";

// Format date
const formattedDate = formatDate(new Date());

// Use debounce
const debouncedFn = debounce(() => {
  console.log("Debounced function called");
}, 1000);

// Fetch data
const data = await fetchData("https://api.example.com/data");
```

## API

### formatDate(date: Date | string, format?: string): string

Formats a date using dayjs.

### debounce(func: Function, wait: number): Function

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed.

### fetchData(url: string): Promise<any>

Makes an HTTP GET request using axios.

## License

ISC
