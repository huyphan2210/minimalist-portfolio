import { NextRequest, NextResponse } from "next/server";

export const REQUEST_HEADERS = {
  pathName: "x-pathname",
};

export const middleware = (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set(REQUEST_HEADERS.pathName, request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};
