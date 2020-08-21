var debugThrowError = false; #default false
if (debugThrowError) {
	// throwing an error at any startup script will cause Travis to fail
	throw new Error();
	//
}
