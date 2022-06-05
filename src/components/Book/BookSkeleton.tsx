import ContentLoader from 'react-content-loader'

export const BookSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={192}
    height={330}
    viewBox="0 0 192 330"
    backgroundColor="#ffffff"
    foregroundColor="#f7f7f7"
  >
    <rect x="0" y="205" rx="7" ry="7" width="175" height="20" /> 
    <rect x="0" y="235" rx="7" ry="7" width="83" height="20" /> 
    <rect x="0" y="298" rx="7" ry="7" width="192" height="32" /> 
    <rect x="0" y="0" rx="5" ry="5" width="192" height="190" />
  </ContentLoader>
)