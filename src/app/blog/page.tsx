import { Container } from '@/components/Container'
import { gqlFetch } from '@/sanity/lib/fetch'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const metadata: Metadata = {
  title: `Blog | Consolebundels.nl`,
  description: `Blog pagina consolebundels.nl`,
  alternates: {
    canonical: `https://consolebundels.nl/blog`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const GET_POST = `
  query {
    allPost {
      title
      slug {
        current
      }
      author {
        name
      }
      mainImage {
        asset {
          url
        }
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

export default async function blogPage() {
  const data: any = await getData()

  return (
    <div className={`bg-${[data.slug]} min-h-96 bg-gray-100`}>
      <Container size="lg">
        <section className="my-12">
          {data.data.allPost.map((post: any) => (
            <Link
              key={post.title}
              className="group mt-6 flex max-h-[450px] flex-col overflow-hidden rounded-lg bg-white shadow-md first:mt-0 sm:flex-row"
              href={'/blog/' + post.slug.current}
            >
              {post.mainImage && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={350}
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
        </section>
      </Container>
    </div>
  )
}
