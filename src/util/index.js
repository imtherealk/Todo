/**
 * Utilities
 */

export function emulateEvent(callback) {
  setTimeout(() => callback(), 0);
}
