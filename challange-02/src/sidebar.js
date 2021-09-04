export const Sidebar = ({ posts }) => {
  return (
    <aside className="sidebar">
      {
        <ul>
          {
            posts.map(({ id, title }) => {
              return (
                <li key={id}>
                  <a href="#">{title}</a>
                </li>
              )
            })
          }
        </ul>
      }
    </aside>
  )
}