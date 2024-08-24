import { Container } from '@/components/Container'
import { gqlFetch } from '@/sanity/lib/fetch'
import type { Metadata } from 'next'

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
    <div className={`bg-${[data.slug]} min-h-96`}>
      <Container size="lg">
        <h2 className="py-12 text-4xl capitalize tracking-wider text-white">
          Blog
        </h2>
        <p className="tracking-wide text-white">{data.description}</p>
      </Container>
    </div>
  )
}
