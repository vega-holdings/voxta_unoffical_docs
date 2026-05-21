import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/', request.url))
  response.cookies.delete('discord_user')
  return response
}

export async function POST(_request: NextRequest) {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('discord_user')
  return response
}
