export function rightScaleOut(node, options) {
  let nodeTransform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTransform} scaleX(${t}); transform-origin: top right;`,
  };
}
export function rightScaleOutInverse(node, options) {
  let nodeTransform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTransform} scaleX(${
        1 / t
      }); transform-origin: top right;`,
  };
}

export function rightScaleIn(node, options) {
  let nodeTrasnform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTrasnform} scaleX(${t}); transform-origin: top left`,
  };
}
export function rightScaleInInverse(node, options) {
  let nodeTrasnform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTrasnform} scaleX(${
        1 / t
      }); transform-origin: top right`,
  };
}

export function topScaleOut(node, options) {
  let nodeTransform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTransform} scaleY(${t}); transform-origin: top left;`,
  };
}
export function topScaleOutInverse(node, options) {
  let nodeTransform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTransform} scaleY(${
        1 / t
      }); transform-origin: top left;`,
  };
}

export function topScaleIn(node, options) {
  let nodeTrasnform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTrasnform} scaleY(${t}); transform-origin: bottom left`,
  };
}
export function topScaleInInverse(node, options) {
  let nodeTrasnform = node.style.transform;
  return {
    delay: options.delay,
    duration: options.duration,
    easing: options.easing,
    css: (t) =>
      `transform: ${nodeTrasnform} scaleY(${
        1 / t
      }); transform-origin: bottom left`,
  };
}
