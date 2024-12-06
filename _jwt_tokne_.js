
/**
 * MAKE API SECURE
 * ------------
 * 
 * concept:
 * 1. assign two tokens for each person (access token, refresh token )
 * 2. access token contains: user identification (email, role, etc..). valid for shorter duration.
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh token is invalid then logout the user
 * 
 *
 */

/**
 * JWT token
 * ---------
 * generated a token by using jwt.sign
 * create api set to cookie. http only, secure, sameSite
 * from client side : axios withCredentials: true
 * cors set up origin and credentials : true
 * 
 */

/**
 * for secure api calls
 * server side install cookie parse and use is as a middleware
 * client side make call using axios withCredentials
 * 
 */