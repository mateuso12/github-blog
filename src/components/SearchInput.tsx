import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })
  const handleSubmitSearchPosts = async (data: SearchFormInput) => {
    await getPosts(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitSearchPosts)}>
      <div className="flex justify-between  ">
        <h1 className="font-bold text-[18px] text-base-title mb-[14px]">
          Publicações
        </h1>
        <span className="text-base-span text-[14px]">
          {postsLength} {postsLength === 1 ? 'Publicação' : 'Publicações'}
        </span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="w-[864px] h-12 flex items-center px-4 py-3 rounded-md bg-base-input border-base-border border-solid border-2 text-base-text placeholder:text-base-label"
        {...register('query')}
      />
    </form>
  )
}
