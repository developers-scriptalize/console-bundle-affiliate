import { Container } from '@/components/Container'
import { gqlFetch } from '@/sanity/lib/fetch'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { platform: string }
}): Promise<Metadata> {
  const { data }: any = await gqlFetch({
    query: GET_PLATFORM(params.platform),
  })
  const platformData = data.data.allPlatform[0]

  return {
    title: `${platformData.name} | Consolebundels.nl`,
    description: `${platformData.description}`,
    alternates: {
      canonical: `https://consolebundels.nl/${platformData.name}`,
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
}

const GET_PLATFORMS = `
  query {
    allPlatform {
      slug
    }
  }
`

const GET_PLATFORM = (slug: string) => `
  query {
    allPlatform(where: {slug: {eq: "${slug}" }}) {
      name
      slug
      description
    }
  }
`

export const generateStaticParams = async () => {
  const { data }: any = await gqlFetch({ query: GET_PLATFORMS })

  return data.data.allPlatform.map((platform: { slug: string }) => ({
    platform: platform.slug,
  }))
}

async function getData(slug: string) {
  const { data } = await gqlFetch({
    query: GET_PLATFORM(slug),
  })

  return data
}

export default async function platformPage({
  params,
}: {
  params: { platform: string }
}) {
  const data: any = await getData(params.platform).then(
    (data: any) => data.data.allPlatform[0],
  )

  return (
    <div className={`bg-${[data.slug]} min-h-96`}>
      <Container size="lg">
        <h2 className="py-12 text-4xl capitalize tracking-wider text-white">
          {params.platform}
        </h2>
        <p className="tracking-wide text-white">{data.description}</p>
      </Container>
    </div>
  )
}
