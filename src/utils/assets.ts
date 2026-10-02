/**
 * Resolve public asset URLs safely across all deployment targets:
 * - Localhost dev server: /images/...
 * - AI Studio preview: /images/...
 * - GitHub Pages subpath: ./images/... or /Balochi-doch-web2/images/...
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Remove leading slash if any
  const clean = path.startsWith('/') ? path.slice(1) : path;
  
  // import.meta.env.BASE_URL is './' or '/Balochi-doch-web2/'
  const base = import.meta.env.BASE_URL || './';
  
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}
