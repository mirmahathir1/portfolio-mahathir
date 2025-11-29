// Helper to resolve local static image assets under `src/assets/bucket`
// Usage remains the same as before:
// firebasePath(['projects', 'picup', '0.png'])
// now returns a webpack-resolved path to `src/assets/bucket/projects/picup/0.png`
export const firebasePath = (arrayOfDirectory) => {
    const relativePath = arrayOfDirectory.join('/');
    // `require` allows webpack to include these assets in the bundle
    return require(`../assets/bucket/${relativePath}`);
};