import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

const ALLOWED_EXTENSIONS = ['.json', '.js', '.md', '.txt']
const ALLOWED_MIME_TYPES = [
  'application/json',
  'text/javascript',
  'application/javascript',
  'text/markdown',
  'text/plain',
  'text/x-markdown',
]

interface UserCookie {
  id: number
  discordId: string
  username: string
  displayName: string
  isGuildMember?: boolean
  isAdmin?: boolean
}

export async function POST(request: NextRequest) {
  // Check if user is logged in
  const userCookie = request.cookies.get('discord_user')
  if (!userCookie) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  let user: UserCookie
  try {
    user = JSON.parse(userCookie.value)
  } catch {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  // Check guild membership (admins can bypass)
  if (!user.isGuildMember && !user.isAdmin) {
    return NextResponse.json({ error: 'Guild membership required' }, { status: 403 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file extension
    const fileName = file.name.toLowerCase()
    const hasValidExtension = ALLOWED_EXTENSIONS.some(ext => fileName.endsWith(ext))
    if (!hasValidExtension) {
      return NextResponse.json(
        { error: `Invalid file type. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate mime type (allow octet-stream since browsers often send it for text files)
    const isValidMime = ALLOWED_MIME_TYPES.includes(file.type) ||
                        file.type === '' ||
                        file.type === 'application/octet-stream'
    if (!isValidMime) {
      return NextResponse.json(
        { error: `Invalid mime type: ${file.type}` },
        { status: 400 }
      )
    }

    // Validate file size (max 1MB)
    if (file.size > 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Max size: 1MB' },
        { status: 400 }
      )
    }

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Create media entry via PayloadCMS
    const media = await payload.create({
      collection: 'media',
      data: {
        alt: file.name,
      },
      file: {
        data: buffer,
        name: file.name,
        mimetype: file.type || 'text/plain',
        size: file.size,
      },
    })

    return NextResponse.json({
      success: true,
      media: {
        id: media.id,
        filename: media.filename,
        url: media.url,
      },
    })
  } catch (error) {
    console.error('Upload error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: `Upload failed: ${errorMessage}` }, { status: 500 })
  }
}
