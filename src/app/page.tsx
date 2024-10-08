import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import authorImage from '@/images/avatars/author.png'
import Link from 'next/link'
import { Gloss } from '@/components/Gloss'
import { gqlFetch } from '@/sanity/lib/fetch'

const GET_POST = `
  query {
    allPost (sort: {publishedAt: DESC}, limit: 3) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      author {
        name
      }
      publishedAt
      _createdAt
    }
  }
`

async function getData() {
  const { data } = await gqlFetch({
    query: GET_POST,
  })

  return data
}

export default async function Home() {
  const data: any = await getData()
  const newestPost = data.data.allPost

  return (
    <>
      <Container size="lg" className="w-full space-y-12 py-6 lg:py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          <Link
            href="/xbox"
            className="to-xbox-light group relative flex h-44 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-xbox"
          >
            <Image src="/logos/xbox.svg" width={75} height={33} alt="Xbox" />
            <Gloss />
          </Link>
          <Link
            href="/playstation"
            className="to-playstation-light group relative flex h-44 items-center justify-center rounded-lg bg-gradient-to-br from-playstation"
          >
            <Image
              src="/logos/playstation.svg"
              width={75}
              height={33}
              alt="Ps"
            />
            <Gloss />
          </Link>
          <Link
            href="/nintendo"
            className="to-nintendo-light group relative flex h-44 items-center justify-center rounded-lg bg-gradient-to-br from-nintendo"
          >
            <Image
              src="/logos/nintendo.svg"
              width={150}
              height={33}
              alt="Nintendo"
            />
            <Gloss />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="h-80 rounded-lg bg-[url('/images/abstract-background.png')] bg-cover bg-top" />
          <div className="h-80 rounded-lg bg-[url('/images/abstract-background.png')] bg-cover bg-bottom" />
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
              Laatste nieuws
            </h2>
            <Link
              href="/blog"
              className="group inline-flex items-center space-x-1"
            >
              <span className="group-hover:font-semibold">Bekijken</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 group-hover:stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-3">
            {newestPost.map((post: any) => (
              <Link
                key={post.title}
                className="group mt-6 flex max-h-[450px] flex-col overflow-hidden rounded-lg bg-white shadow-md"
                href={'/blog/' + post.slug.current}
              >
                {post.mainImage && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={450}
                    height={450}
                  />
                )}
                <div className="p-3">
                  <h3 className="text-2xl font-semibold">{post.title}</h3>
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 stroke-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    <p className="text-gray-500">{`${post.author.name}  |  ${post.publishedAt}`}</p>
                  </div>
                </div>
                <div className="flex grow items-end justify-end">
                  <div className="flex items-center space-x-1 p-3">
                    <span>Bekijk</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 opacity-0 transition-all duration-500 group-hover:opacity-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}
