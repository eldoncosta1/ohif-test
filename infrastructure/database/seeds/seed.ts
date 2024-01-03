import { prismaClient as prisma } from '../prismaClient';
import { illnessId } from './illnessId';

async function seed() {
  console.log(`Start seeding ...`);

  await prisma.illness.create({
    data: {
      illnessType: 'NoIllness',
      id: illnessId,
    },
  });
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
