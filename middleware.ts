import { auth } from "@/auth"
 
export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname == "/dashboard" ) {
    const newUrl = new URL("/signin", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
  if (req.auth && req.nextUrl.pathname == "/signin" || req.auth && req.nextUrl.pathname == "/signup") {
    const newUrl = new URL  ("/dashboard", req.nextUrl.origin)
    return Response.redirect(newUrl)
  } 
})