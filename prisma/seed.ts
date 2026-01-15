import { PrismaClient } from '../lib/generated/prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.habitLog.deleteMany()
  await prisma.habit.deleteMany()
  await prisma.task.deleteMany()
  await prisma.user.deleteMany()

  console.log('Cleared existing data')

  // Create a test user
  const passwordHash = await bcrypt.hash('password123', 10)
  
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      passwordHash,
    },
  })

  console.log('✓ Created user:', user.email)

  // Create tasks
  await prisma.task.createMany({
    data: [
      {
        userId: user.id,
        title: 'Complete project documentation',
        description: 'Write comprehensive docs for the habit tracker',
        dueDate: new Date('2026-01-20'),
        completed: false,
      },
      {
        userId: user.id,
        title: 'Review pull requests',
        description: 'Check and merge pending PRs',
        completed: true,
      },
      {
        userId: user.id,
        title: 'Fix responsive design issues',
        dueDate: new Date('2026-01-18'),
        completed: false,
      },
    ],
  })

  console.log('✓ Created 3 tasks')

  // Create habits
  const exerciseHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: 'Morning Exercise',
      frequency: 'DAILY',
    },
  })

  const readingHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: 'Read for 30 minutes',
      frequency: 'DAILY',
    },
  })

  const weeklyReviewHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: 'Weekly Planning Session',
      frequency: 'WEEKLY',
    },
  })

  const meditationHabit = await prisma.habit.create({
    data: {
      userId: user.id,
      title: 'Meditation',
      frequency: 'DAILY',
    },
  })

  console.log('✓ Created 4 habits')

  // Create habit logs for the past 7 days
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const logs = []

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Exercise habit - completed most days
    if (i !== 1 && i !== 4) {
      logs.push({
        habitId: exerciseHabit.id,
        date,
        completed: true,
        completedAt: new Date(date.getTime() + 8 * 60 * 60 * 1000), // 8 AM
      })
    } else {
      logs.push({
        habitId: exerciseHabit.id,
        date,
        completed: false,
      })
    }

    // Reading habit - consistent streak
    logs.push({
      habitId: readingHabit.id,
      date,
      completed: i < 5,
      completedAt: i < 5 ? new Date(date.getTime() + 20 * 60 * 60 * 1000) : undefined, // 8 PM
    })

    // Meditation - sporadic
    if (i === 0 || i === 2 || i === 6) {
      logs.push({
        habitId: meditationHabit.id,
        date,
        completed: true,
        completedAt: new Date(date.getTime() + 7 * 60 * 60 * 1000), // 7 AM
      })
    }
  }

  await prisma.habitLog.createMany({
    data: logs,
  })

  console.log('✓ Created habit logs for the past 7 days')
  console.log('\n🎉 Database seeded successfully!')
  console.log('\nTest credentials:')
  console.log('  Email: test@example.com')
  console.log('  Password: password123')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
