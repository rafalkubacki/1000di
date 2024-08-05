'use client'; // This line makes this a client-side component

import ReactTimeago from 'react-timeago';

export default function TimeagoComponent({ date }) {
  return <ReactTimeago date={date} />;
}
