'use client';

import ReactTimeago from 'react-timeago';

export default function TimeagoComponent({ date }: { date: string }) {
  return <ReactTimeago date={date} />;
}
