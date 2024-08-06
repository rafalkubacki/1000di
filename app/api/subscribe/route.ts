import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID!;
  const DATACENTER = API_KEY.split('-')[1];

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const response = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );

  if (response.ok) {
    return NextResponse.json(
      { message: 'Thank you! You have been added to the list!' },
      { status: 200 },
    );
  } else {
    return NextResponse.json(
      { message: 'Something has gone wrong. Perhaps you are already a subscriber.' },
      { status: 400 },
    );
  }
}
