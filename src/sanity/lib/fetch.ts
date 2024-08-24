import { QueryParams } from 'sanity'
import { client } from './client'

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  })
}

type ExtractVariables<T> = T extends { variables: object }
  ? T['variables']
  : never

type FetchOptions<T, V = ExtractVariables<T>> = {
  cache?: RequestCache
  headers?: HeadersInit
  query: string
  tags?: string[]
  variables?: V
}

type FetchResult<T> = {
  status: number
  data: T
}

export async function gqlFetch<T, V>({
  headers,
  query,
  variables,
}: FetchOptions<T, V>): Promise<FetchResult<T>> {
  const endpoint = process.env.NEXT_PUBLIC_GQL_ENDPOINT

  if (!endpoint) {
    throw new Error('GRAPHQL_API_ENDPOINT is not defined.')
  }

  try {
    const response = await fetch(endpoint, {
      // @ts-ignore
      next: {
        revalidate: 60,
      },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(`Failed to fetch data from the API: ${errorBody}`)
    }

    const data = await response.json()

    return { status: response.status, data }
  } catch (error) {
    console.error('schapiFetch error:', { error, query, variables })
    throw error
  }
}
