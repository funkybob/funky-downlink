
/*
 * Heavily inspired by csv-exportor
 */

export function downlink(content, filename, type = 'text/plain; charset=utf-8') {
	const blob = new Blob(content, {type});
	const url = window.URL.createObjectURL(blob);

	const a = document.createElement('a')
	a.href = url;
	a.download = filename;
	a.click();
	window.URL.revokeObjectURL(url);
}
