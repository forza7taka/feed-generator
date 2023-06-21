export type DatabaseSchema = {
  post: Post
  sub_state: SubState
}

export type Post = {
  uri: string
  cid: string
  replyParent: string | null
  replyRoot: string | null
  indexedAt: string
  author: string
  hashtag: string | null
}

export type SubState = {
  service: string
  cursor: number
}
