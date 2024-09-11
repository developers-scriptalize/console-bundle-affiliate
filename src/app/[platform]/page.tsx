import { Container } from '@/components/Container'
import { Tabs } from '@/components/Tabs'
import { gqlFetch } from '@/sanity/lib/fetch'
import clsx from 'clsx'
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

  if (!data) return null
  return (
    <div
      className={`min-h-96 bg-gradient-to-br from-${params.platform} to-${params.platform}-light`}
    >
      <Container size="lg">
        <h2 className="py-6 text-4xl capitalize tracking-wider text-white lg:py-12">
          {params.platform} deals
        </h2>
        <p className="tracking-wide text-white">
          {data.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi ut quam natus facere, doloremque dolorum accusamus
          beatae asperiores animi voluptates nobis iusto quod non aliquam
          doloribus ipsa quidem distinctio fugit in deserunt.
        </p>

        <section className="my-6 space-y-6 lg:my-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <Tabs />

            <fieldset>
              <label htmlFor="location" className="leading-6 text-white">
                Sorteren
              </label>
              <select
                id="sort"
                name="sort"
                defaultValue="Prijs"
                className="mt-3 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 md:w-auto"
              >
                <option>Nieuwste</option>
                <option>Prijs</option>
                <option>Beste gewaardeerd</option>
              </select>
            </fieldset>
          </div>

          <div className="h-44 w-full rounded-lg bg-white shadow-md"></div>
          <div className="h-44 w-full rounded-lg bg-white shadow-md"></div>
          <div className="h-44 w-full rounded-lg bg-white shadow-md"></div>
          <div className="h-44 w-full rounded-lg bg-white shadow-md"></div>
        </section>
      </Container>
    </div>
  )
}
