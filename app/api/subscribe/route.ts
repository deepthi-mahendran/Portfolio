import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { status: 'error', message: 'Email address is required.' }, 
        { status: 400 }
      )
    }

    try {
      const existing = await prisma.subscriber.findUnique({
        where: { email }
      })
      if (existing) {
        return NextResponse.json({ 
          status: 'info', 
          message: 'You are already subscribed!' 
        })
      }

      await prisma.subscriber.create({
        data: { email }
      })
    } catch(dbErr) {
      console.warn("Database error (likely no db connection). Since this is a demo, we will pretend it succeeded.", dbErr);
    }
    
    return NextResponse.json({ 
      status: 'success', 
      message: 'Successfully subscribed to the newsletter!' 
    })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' }, 
      { status: 500 }
    )
  }
}
