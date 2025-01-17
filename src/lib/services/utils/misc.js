/**
 * Check if the given input is a simple object.
 * @param {any} input - Input, probably an object.
 * @returns {boolean} Result.
 */
export const isObject = (input) =>
  input !== null && typeof input === 'object' && !Array.isArray(input);

/**
 * Check if the given input is an array of objects.
 * @param {any} input - Input, probably an array.
 * @returns {boolean} Result.
 */
export const isObjectArray = (input) =>
  Array.isArray(input) && /** @type {any[]} */ (input).every((item) => isObject(item));

/**
 * Return a simple `Promise` to resolve in the given time, making it easier to wait for a bit in the
 * code, particularly while making sequential HTTP requests.
 * @param {number} [ms] - Milliseconds to wait.
 * @returns {Promise<void>} Nothing.
 */
export const sleep = (ms = 1000) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(void 0);
    }, ms);
  });

/**
 * Wait until the given element enters the viewport.
 * @param {HTMLElement | undefined} element - Element to observe.
 * @returns {void | Promise<void>} Promise to be resolved when the element becomes visible. If the
 * `element` is not available yet, `undefined` will be returned instead.
 */
export const waitForVisibility = (element) => {
  if (!element) {
    return void 0;
  }

  return new Promise((resolve) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        resolve(void 0);
      }
    });

    window.requestAnimationFrame(() => {
      observer.observe(element);
    });
  });
};
