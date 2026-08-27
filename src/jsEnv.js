// Check if the code is running in a Node.js environment
export function isNode() {
  return (
    typeof process !== 'undefined' &&
    process.versions != null &&
    process.versions.node != null
  );
}

// Check if the code is running in a browser environment
export function isBrowser() {
  return (
    typeof window !== 'undefined' && typeof window.document !== 'undefined'
  );
}

// Detect the platform (Node.js or Browser)
export function detectPlatform() {
  if (isNode()) {
    return 'Node.js';
  }
  if (isBrowser()) {
    return 'Browser';
  }
  return 'Unknown';
}

// Detect the operating system in the environment
export function detectOperatingSystem() {
  if (isNode()) {
    return process.platform; // 'darwin', 'win32', 'linux', etc.
  }

  if (isBrowser()) {
    const userAgent = navigator.userAgent;

    if (/Windows NT/i.test(userAgent)) return 'Windows';
    if (/Mac OS X/i.test(userAgent)) return 'MacOS';
    if (/Linux/i.test(userAgent)) return 'Linux';
    if (/Android/i.test(userAgent)) return 'Android';
    if (/iOS|iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';

    return 'Unknown';
  }

  return 'Unknown';
}

// Detect the browser name and version
export function detectBrowser() {
  if (!isBrowser()) {
    return null;
  }

  const userAgent = navigator.userAgent;

  if (/Chrome\/\d+/i.test(userAgent) && !/Edg\/\d+/i.test(userAgent)) {
    return 'Chrome';
  }
  if (/Firefox\/\d+/i.test(userAgent)) {
    return 'Firefox';
  }
  if (/Safari\/\d+/i.test(userAgent) && !/Chrome\/\d+/i.test(userAgent)) {
    return 'Safari';
  }
  if (/Edg\/\d+/i.test(userAgent)) {
    return 'Edge';
  }
  if (/MSIE \d+/i.test(userAgent) || /Trident\/\d+/i.test(userAgent)) {
    return 'Internet Explorer';
  }

  return 'Unknown Browser';
}

// Detect support for specific web APIs
export function detectApiSupport() {
  if (!isBrowser()) {
    return null;
  }

  return {
    serviceWorker: 'serviceWorker' in navigator,
    webGL: !!window.WebGLRenderingContext,
    localStorage: 'localStorage' in window,
    sessionStorage: 'sessionStorage' in window,
    geolocation: 'geolocation' in navigator,
    notifications: 'Notification' in window,
    fetch: 'fetch' in window,
  };
}

// Detect network information (e.g., connection type)
export function detectNetworkInfo() {
  if (!isBrowser()) {
    return 'Network information not available';
  }

  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

  if (!connection) {
    return 'Network information not available';
  }

  return {
    type: connection.effectiveType || 'unknown',
    downlink: connection.downlink ?? null,
    rtt: connection.rtt ?? null,
    saveData: connection.saveData ?? false,
  };
}

// Comprehensive function to get all environment information
export function getEnvironmentInfo() {
  return {
    platform: detectPlatform(),
    operatingSystem: detectOperatingSystem(),
    browser: detectBrowser(),
    apiSupport: detectApiSupport(),
    networkInfo: detectNetworkInfo(),
  };
}
