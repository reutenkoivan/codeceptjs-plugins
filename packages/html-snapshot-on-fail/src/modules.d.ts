declare module 'humanize-hash-long-str' {
  type opts = {
    maxLength?: number;
    humanizeHash?: boolean;
    words?: number;
    length?: number;
  }

  export const humanizeHashLongStr = (_str: string, _options: opts) => string
}
