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
      <Container size="lg" className="bg-white">
        <article className="p-3 lg:p-6">
          <h2 className="mb-3 text-4xl capitalize tracking-wide">
            {data.title}
          </h2>
          <p className="pb-3 lg:pb-6">{`${data.author.name} - ${data.publishedAt}`}</p>
          {data.mainImage && (
            <Image
              src={data.mainImage.asset.url}
              alt={data.title}
              width={600}
              height={1}
              className="mb-6 w-full lg:mb-12"
            />
          )}
          <p>
            {data.bodyRaw &&
              data.bodyRaw.map((block: any) => (
                <>
                  {block._type === 'image' && (
                    <Image
                      src={urlFor(block.asset._ref).url()}
                      width={100}
                      height={100}
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
