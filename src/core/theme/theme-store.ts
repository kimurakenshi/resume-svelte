import { browser } from '$app/env';
import { writable } from 'svelte/store';
import { ThemeName } from '$core/theme/theme-enums';

const THEME_SESSION_STORAGE_KEY = 'sg_resume_theme';
const THEME_DEFAULT_VALUE = ThemeName.DARK;

const isValidTheme = (value) => Object.values(ThemeName).indexOf(value) !== -1;

const getStoredUserTheme = (): ThemeName | undefined => {
	try {
		const storedThemeValue: number = parseInt(
			window.localStorage.getItem(THEME_SESSION_STORAGE_KEY),
			0
		);

		if (!isValidTheme(storedThemeValue)) {
			return undefined;
		}
	} catch {
		return undefined;
	}
};

const storeUserTheme = (theme: ThemeName) => {
	window.localStorage.setItem(THEME_SESSION_STORAGE_KEY, theme.toString());

	if (!browser) {
		console.warn(
			'storeUserTheme: is running in the server and I am trying to add a class to the dom here'
		);

		return;
	}

	const hasDarkClass = document.documentElement.classList.contains(ThemeName.DARK);

	if (theme === ThemeName.DARK) {
		if (!hasDarkClass) {
			document.documentElement.classList.add(ThemeName.DARK);
		}
	} else {
		if (hasDarkClass) {
			document.documentElement.classList.remove(ThemeName.DARK);
		}
	}
};

function createThemeStore() {
	const { subscribe, set, update } = writable(ThemeName.DARK);

	return {
		subscribe,
		switchTheme: () => {
			update((currentTheme: ThemeName) => {
				const themeNameToSwitch =
					currentTheme === ThemeName.DARK ? ThemeName.LIGHT : ThemeName.DARK;

				storeUserTheme(themeNameToSwitch);

				return themeNameToSwitch;
			});
		},
		initializeTheme: () => {
			const storedUserTheme = getStoredUserTheme();

			if (storedUserTheme) {
				set(storedUserTheme);

				return;
			}

			storeUserTheme(THEME_DEFAULT_VALUE);
			set(THEME_DEFAULT_VALUE);
		}
	};
}

export const theme = createThemeStore();
