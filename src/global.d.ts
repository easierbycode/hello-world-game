import Phaser from "phaser";

declare global {
  interface Window {
    scene?: Phaser.Scene; // Or a more specific scene type if applicable
  }
}

// Export {} to make this a module file if it's not already.
// This is often needed if you have other .d.ts files or certain tsconfig settings.
// If this file only contains global declarations, this line might not be strictly necessary
// but is good practice to avoid potential issues.
export {};
