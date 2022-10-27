export * from "./check/check-price.mjs";

export * from "./is/is-discount.mjs";
export * from "./is/is-email-tidy.mjs";
export * from "./is/is-html-free.mjs";
export * from "./is/is-not-blank-string.mjs";
export * from "./is/is-not-empty-string.mjs";
export * from "./is/is-not-null.mjs";
export * from "./is/is-positive-int.mjs";
export * from "./is/is-price.mjs";
export * from "./is/is-single-line.mjs";
export * from "./is/is-string-date.mjs";
export * from "./is/is-uuid4.mjs";

export * from "./number/in-range.mjs";
export * from "./number/in-range-int.mjs";
export * from "./number/int-min-max.mjs";
export * from "./number/min-max.mjs";
export * from "./number/min-max-int.mjs";
export * from "./number/min-max-pct.mjs";
export * from "./number/money.mjs";

export * from "./string/fixed-length.mjs";
export * from "./string/text-length-fixed.mjs";
export * from "./string/min-max-length.mjs";
export * from "./string/text-length-min-max.mjs";

// noinspection RegExpRedundantEscape
export const IS_STRING_DATE_PATTERN = `^\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])$`;

export const IS_STRING_TIME_OF_DAY = `(?:[01]d|2[0123]):(?:[012345]d)`;
