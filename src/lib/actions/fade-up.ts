export function fadeUp(node: HTMLElement, options = { duration: 600, delay: 0 }) {
  node.style.opacity = '0';
  node.style.transform = 'translateY(20px)';
  node.style.transition = `opacity ${options.duration}ms ease-out ${options.delay}ms, transform ${options.duration}ms ease-out ${options.delay}ms`;
  node.style.willChange = 'opacity, transform';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
