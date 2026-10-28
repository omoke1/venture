// @ts-nocheck
type Listener = (args: { location: Location }) => void;
const listeners = new Set<Listener>();

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    listeners.forEach((cb) => cb({ location: window.location }));
  });
}

export const navigate = (to: string) => {
  if (typeof window === "undefined") return;
  const [rawPath, hash] = to.split("#");
  const normalizedPath =
    !rawPath || rawPath === "/"
      ? "/"
      : rawPath.startsWith("/")
      ? rawPath
      : `/${rawPath}`;

  window.history.pushState({}, "", hash ? `${normalizedPath}#${hash}` : normalizedPath);
  listeners.forEach((cb) => cb({ location: window.location }));

  if (hash) {
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
  } else {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }
};

export const globalHistory = {
  get location() {
    return typeof window !== "undefined" ? window.location : ({ pathname: "/" } as Location);
  },
  listen(cb: Listener) {
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  },
  navigate
};
