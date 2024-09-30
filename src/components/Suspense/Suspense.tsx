import * as React from 'react';

function Loading() {
  return <h1>...Carrengando...</h1>;
}

function Suspense({ children }: React.PropsWithChildren) {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
}

export default Suspense;
