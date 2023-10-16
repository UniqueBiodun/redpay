interface ImportMetaEnv {
	readonly VITE_APP_MERCHANT_SIGNUP: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
