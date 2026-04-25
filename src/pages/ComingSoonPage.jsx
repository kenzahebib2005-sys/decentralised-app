import { Link } from 'react-router-dom'

export function ComingSoonPage({ title: titleProp }) {
  const title = titleProp ?? 'This page'

  return (
    <div className="st-coming">
      <h1>{title}</h1>
      <p>This area is coming soon. You can manage ratings and reviews from the dedicated section.</p>
      <p style={{ marginTop: '1rem' }}>
        <Link to="/ratings" className="st-link">
          ← Back to ratings and reviews
        </Link>
      </p>
    </div>
  )
}
