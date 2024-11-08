type Theme = "light" | "dark" | "system";

const THEME_LIGHT: Theme = "light";
const THEME_DARK: Theme = "dark";
const THEME_SYSTEM: Theme = "system";

interface ThemeButtons {
  [key: string]: HTMLElement | null;
}

const applyTheme = (theme: Theme): void => {
  if (theme === THEME_LIGHT) {
    document.documentElement.classList.remove("dark");
  } else if (theme === THEME_DARK) {
    document.documentElement.classList.add("dark");
  } else if (theme === THEME_SYSTEM) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  window.localStorage.setItem("theme", theme);
  updateToggleButtonsState(theme);
};

const getPreferredTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  return savedTheme || THEME_SYSTEM;
};

const updateToggleButtonsState = (currentTheme: Theme): void => {
  const buttons: ThemeButtons = {
    [THEME_LIGHT]: document.getElementById("themeToggleLight"),
    [THEME_DARK]: document.getElementById("themeToggleDark"),
    [THEME_SYSTEM]: document.getElementById("themeToggleSystem"),
  };

  Object.entries(buttons).forEach(([theme, button]) => {
    if (button) {
      button.classList.toggle("active", theme === currentTheme);
    }
  });
};

export function initThemeToggle() {
  let theme = getPreferredTheme();
  applyTheme(theme);

  // watch if there is a window.MatchMedia
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMediaQuery.addEventListener("change", (e: MediaQueryListEvent) => {
    const currentTheme = localStorage.getItem("theme") as Theme;
    if (currentTheme === THEME_SYSTEM) {
      applyTheme(THEME_SYSTEM);
    }
  });

  initializeThemeToggle();
}

const handleToggleClick = (newTheme: Theme): void => {
  applyTheme(newTheme);
};

const initializeThemeToggle = (): void => {
  const toggleButtons: Record<Theme, string> = {
    [THEME_DARK]: "themeToggleDark",
    [THEME_LIGHT]: "themeToggleLight",
    [THEME_SYSTEM]: "themeToggleSystem",
  };

  Object.entries(toggleButtons).forEach(([theme, buttonId]) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => handleToggleClick(theme as Theme));
    } else {
      console.warn(`Button with id "${buttonId}" not found.`);
    }
  });
};
