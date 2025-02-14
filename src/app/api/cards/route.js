

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Create prisma client outside the handler to reuse connections
const prisma = new PrismaClient();

export async function GET() {
  console.log('GET /api/cards - Starting request');
  
  try {
    // Test database connection explicitly
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('Database connection successful');

    // Attempt to query the database
    console.log('Querying database for cards...');
    const cards = await prisma.card.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    console.log('Query successful, found', cards.length, 'cards');

    // Ensure we're returning a valid response even with empty results
    return new NextResponse(
      JSON.stringify({
        success: true,
        data: cards || [],
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    // Log the full error details
    console.error('Detailed error in GET /api/cards:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    // Return a properly structured error response
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch cards',
        details: error.message,
        code: error.code,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } finally {
    // Cleanup
    try {
      await prisma.$disconnect();
      console.log('Database disconnected successfully');
    } catch (error) {
      console.error('Error disconnecting from database:', error);
    }
  }
}

export async function POST(req) {
  console.log('POST /api/cards - Starting request');
  
  try {
    const data = await req.json();
    console.log('Received data:', data);

    // Validate input
    if (!data.title || !data.description) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: 'Missing required fields',
          timestamp: new Date().toISOString()
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Create the card
    const card = await prisma.card.create({
      data: {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl || '',
        pageName: data.pageName || 'default',
        services: data.services || 'default',
      },
    });

    console.log('Card created successfully:', card);

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: card,
        timestamp: new Date().toISOString()
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error('Detailed error in POST /api/cards:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    return new NextResponse(
      JSON.stringify({
        success: false,
        error: 'Failed to create card',
        details: error.message,
        code: error.code,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}