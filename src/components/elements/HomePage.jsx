import { useEffect, useMemo, useRef, useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export function HomePage() {

  return (
    <div>
      <Header title="This is my first NextJS App 🍔" />
    </div>
  );
}