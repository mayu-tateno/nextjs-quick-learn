export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Template Header</div>
      {children}
    </>
  )
}
// templateは状態が保持されず、画面遷移するたびにコンポーネントが再レンダリングされる。使い分けは下の記事がわかりやすい
// https://zenn.dev/cybozu_frontend/articles/8caf1decb1e82c