import React from 'react';
import PNNLHeader from './PNNLHeader';
import PNNLFooter from './PNNLFooter';

interface Props {
  children: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Layout({ children }: Props) {
  return (
    <>
      <PNNLHeader />
      {children}
      <PNNLFooter />
    </>
  );
}