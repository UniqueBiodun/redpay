interface ImportMetaEnv {
	readonly VITE_APP_MERCHANT_SIGNUP: string;
	readonly VITE_APP_MERCHANT_SIGNIN: string;
	readonly VITE_APP_API_DOCUMENTATION: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
