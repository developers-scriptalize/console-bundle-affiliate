import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import authorImage from '@/images/avatars/author.png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Container size="lg" className="w-full space-y-12 py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="bg-xbox flex h-44 items-center justify-center rounded-lg">
            <Image src="/logos/xbox.svg" width={75} height={33} alt="Xbox" />
          </div>
          <div className="bg-playstation flex h-44 items-center justify-center rounded-lg">
            <Image
              src="/logos/playstation.svg"
              width={75}
              height={33}
              alt="Ps"
            />
          </div>
          <div className="bg-nintendo flex h-44 items-center justify-center rounded-lg">
            <Image
              src="/logos/nintendo.svg"
              width={150}
              height={33}
              alt="Nintendo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="h-80 rounded-lg bg-slate-600" />
          <div className="h-80 rounded-lg bg-slate-600" />
        </div>
      </Container>

      <div className="w-full bg-gray-100">
        <Container size="lg">
          <article className="flex space-x-6 py-6 lg:space-x-12 lg:py-12">
            <div className="space-y-2 lg:space-y-4">
              <h2 className="text-xl font-semibold">Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                nobis laborum saepe et numquam dignissimos vitae reprehenderit
                dolor non inventore officia sed laboriosam, neque veritatis odit
                quasi nulla tempora optio voluptatum nesciunt dolores, quisquam
                aliquid doloribus? Minus, est delectus dicta quas quo facere
                odit! Sunt laudantium veniam voluptates quasi cumque incidunt
                consequuntur atque quas, asperiores ipsa. Autem culpa veniam
                quisquam labore suscipit aspernatur quos non unde molestiae
                deserunt! Quis eum, necessitatibus, voluptas doloribus animi
                explicabo quibusdam dolorum placeat totam velit nesciunt maiores
                harum dicta voluptates impedit modi perspiciatis corrupti
                aspernatur quae corporis blanditiis fugit, iure amet ad!
                Quisquam, dolorem blanditiis.
              </p>
            </div>
            <Image
              src={authorImage}
              width={250}
              height={250}
              alt="mokkel"
              className="hidden lg:block"
            />
          </article>
        </Container>
      </div>
      <Container size="lg" className="my-6 space-y-12 lg:my-12">
        <article className="grid grid-cols-12 items-center gap-6 lg:gap-12">
          <Image
            src="/logos/amazon.png"
            width={100}
            height={10}
            alt="bol"
            className="col-span-12 mx-auto lg:col-span-2"
          />
          <p className="col-span-12 lg:col-span-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nostrum velit maxime hic alias labore fugit animi ipsa, enim autem
            aliquam debitis porro molestiae aliquid adipisci quia qui magnam
            quidem dolore omnis mollitia. Dolore debitis ex consequuntur! At
            qui, odit a ullam id quo vitae expedita provident ipsa atque,
            commodi ad perferendis minus repellendus quisquam nemo quod laborum
            aperiam repudiandae soluta voluptatum eligendi enim harum eveniet?
            Harum officia aliquid atque aperiam, aut molestias magnam deserunt
            similique itaque quaerat, rem explicabo ad. Fuga necessitatibus
            autem sed cum molestias unde nihil recusandae esse deserunt
            temporibus, dolorem inventore quia ipsa obcaecati dolores? Ullam!
          </p>
        </article>

        <article className="grid grid-cols-12 items-center gap-6 lg:gap-12">
          <Image
            src="/logos/coolblue.svg"
            width={100}
            height={10}
            alt="bol"
            className="col-span-12 mx-auto lg:col-span-2"
          />
          <p className="col-span-12 lg:col-span-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nostrum velit maxime hic alias labore fugit animi ipsa, enim autem
            aliquam debitis porro molestiae aliquid adipisci quia qui magnam
            quidem dolore omnis mollitia. Dolore debitis ex consequuntur! At
            qui, odit a ullam id quo vitae expedita provident ipsa atque,
            commodi ad perferendis minus repellendus quisquam nemo quod laborum
            aperiam repudiandae soluta voluptatum eligendi enim harum eveniet?
            Harum officia aliquid atque aperiam, aut molestias magnam deserunt
            similique itaque quaerat, rem explicabo ad. Fuga necessitatibus
            autem sed cum molestias unde nihil recusandae esse deserunt
            temporibus, dolorem inventore quia ipsa obcaecati dolores? Ullam!
          </p>
        </article>

        <article className="grid grid-cols-12 items-center gap-6 lg:gap-12">
          <Image
            src="/logos/bol.jpeg"
            width={100}
            height={10}
            alt="bol"
            className="col-span-12 mx-auto lg:col-span-2"
          />
          <p className="col-span-12 lg:col-span-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nostrum velit maxime hic alias labore fugit animi ipsa, enim autem
            aliquam debitis porro molestiae aliquid adipisci quia qui magnam
            quidem dolore omnis mollitia. Dolore debitis ex consequuntur! At
            qui, odit a ullam id quo vitae expedita provident ipsa atque,
            commodi ad perferendis minus repellendus quisquam nemo quod laborum
            aperiam repudiandae soluta voluptatum eligendi enim harum eveniet?
            Harum officia aliquid atque aperiam, aut molestias magnam deserunt
            similique itaque quaerat, rem explicabo ad. Fuga necessitatibus
            autem sed cum molestias unde nihil recusandae esse deserunt
            temporibus, dolorem inventore quia ipsa obcaecati dolores? Ullam!
          </p>
        </article>
      </Container>

      <div className="w-full bg-gray-100">
        <Container size="lg" className="py-12">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-wide">
              Laatste console nieuws
            </h2>
            <Link href="/blogs" className="underline">
              Zie alle blogs
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-3 lg:gap-12 lg:py-12">
            <div className="aspect-square rounded-lg bg-gray-200" />
            <div className="aspect-square rounded-lg bg-gray-200" />
            <div className="aspect-square rounded-lg bg-gray-200" />
          </div>
        </Container>
      </div>

      <Footer />
    </>
  )
}
