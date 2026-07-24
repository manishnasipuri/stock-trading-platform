// Re-export to the actual filename casing used on disk (WatchList.js).
// This helps when some imports use different casing. Prefer importing
// './WatchList' in code; this file just provides a fallback.
export { default } from "./WatchListImpl";