import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});


export default async function Home() {
  const todos = await prisma.dyna.findMany();
  const title = todos?.[0]?.title;
  const description = todos?.[0]?.description;
  const keyword = todos?.[0]?.keyword;
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>
          {title}
          {description}
          {keyword}
        </h1>
      </div>
    </section>
  )
}
