import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// This endpoint can be called once after deployment to run database migrations
// Visit: https://your-site.vercel.app/api/migrate
// For security, this should be removed after first use or protected with authentication

export async function GET() {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: 'DATABASE_URL environment variable is not set' },
        { status: 500 }
      );
    }

    // Run Prisma migration
    const { stdout, stderr } = await execAsync('npx prisma migrate deploy');

    return NextResponse.json({
      success: true,
      message: 'Database migration completed successfully',
      output: stdout,
      errors: stderr || 'None',
    });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Migration failed',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

