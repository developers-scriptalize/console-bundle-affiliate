import { Container } from '@/components/Container'
import { gqlFetch } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/lib/image'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { platform } from 'os'

// export async function generateMetadata({
//   params,
// }: {
//   params: { platform: string }
// }): Promise<Metadata> {
//   const { data }: any = await gqlFetch({
//     query: GET_PLATFORM(params.platform),
//   })
//   const platformData = data.data.allPlatform[0]

//   return {
//     title: `${platformData.name} | Consolebundels.nl`,
//     description: `${platformData.description}`,
//     alternates: {
//       canonical: `https://consolebundels.nl/${platformData.name}`,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//       },
//     },
//   }
// }

const GET_POSTS = `
  query {
    allPost {
      slug {
        current
      }
    }
  }
`

const GET_POST = (slug: string) => `
  query {
    allPost(where: {slug: {current: {eq: "${slug}" }}}) {
      title
      mainImage {
        asset {
          url
        }
      }
      author {
        name
      }
      slug {
        current
      }
      bodyRaw
      publishedAt
    }
  }
`

export const generateStaticParams = async () => {
  const { data }: any = await gqlFetch({ query: GET_POSTS })
  return data.data.allPost.map((post: { slug: { current: string } }) => ({
    post: post.slug.current,
  }))
}

async function getData(slug: string) {
  const { data } = await gqlFetch({
    query: GET_POST(slug),
  })
  return data
}

export default async function postPage({
  params,
}: {
  params: { post: string }
}) {
  const data: any = await getData(params.post).then(
    (data: any) => data.data.allPost[0],
  )

  return (
    <div className="bg-gray-100 py-6 lg:py-12">
      <Container size="lg">
        <article className="p-3 lg:p-6">
          {data.mainImage && (
            <Image
              src={data.mainImage.asset.url}
              alt={data.title}
              width={600}
              height={450}
              className="mb-3 max-h-[400px] w-full object-cover object-center lg:mb-6"
            />
          )}
          <h3 className="text-4xl font-semibold">{data.title}</h3>
          <div className="flex items-center space-x-1 pb-6 lg:pb-12">
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
            <p className="text-gray-500">{`${data.author.name}  |  ${data.publishedAt}`}</p>
          </div>

          <p>
            {data.bodyRaw &&
              data.bodyRaw.map((block: any) => (
                <>
                  {block._type === 'image' && (
                    <Image
                      src={urlFor(block.asset._ref).url()}
                      width={250}
                      height={250}
                      alt="ok"
                      className="mb-3 lg:mb-6"
                    />
                  )}
                  {block._type === 'block' &&
                    block.children.map((child: any) => (
                      <>
                        <span key={child._key}>{child.text}</span>
                        <br />
                      </>
                    ))}
                </>
              ))}
          </p>
        </article>
      </Container>
    </div>
  )
}
