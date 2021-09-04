export const Sidebar = ({ posts, setTitle, setContent }) => {
  return (
    <aside className="sidebar">
      {
        <ul>
          {posts.map(({ id, title, content }) => {
            return (
              <li key={id}>
                <span></span>
                <a
                  href="#"
                  onClick={() => {
                    setTitle(title)
                    setContent(content)
                  }}
                >
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      }
    </aside>
  )
}
