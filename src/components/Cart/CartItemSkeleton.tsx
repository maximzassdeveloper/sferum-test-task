import ContentLoader from 'react-content-loader'

export const CartItemSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={350}
    height={84}
    viewBox="0 0 350 84"
    backgroundColor="#e6e6e6"
    foregroundColor="#f7f7f7"
  >
    <rect x="15" y="2" rx="5" ry="5" width="60" height="80" /> 
    <rect x="85" y="4" rx="2" ry="2" width="220" height="21" /> 
    <rect x="85" y="34" rx="2" ry="2" width="31" height="15" /> 
    <rect x="85" y="64" rx="2" ry="2" width="73" height="18" />
  </ContentLoader>
)