import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get('discord_user')

  if (!cookie) {
    return NextResponse.json({ user: null })
  }

  try {
    const user = JSON.parse(cookie.value)
    return NextResponse.json({ user })
  } catch {
    return NextResponse.json({ user: null })
  }
}
