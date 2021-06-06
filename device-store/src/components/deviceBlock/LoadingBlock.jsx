import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
    <ContentLoader 
    className="device-block"
    speed={2}
    width={280}
    height={560}
    viewBox="0 0 280 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="367" rx="10" ry="10" width="280" height="30" /> 
    <rect x="0" y="0" rx="6" ry="6" width="280" height="350" /> 
    <rect x="0" y="414" rx="6" ry="6" width="280" height="75" /> 
    <rect x="0" y="520" rx="6" ry="6" width="88" height="27" /> 
    <rect x="149" y="510" rx="20" ry="20" width="130" height="45" />
  </ContentLoader>
  )
    
}

export default LoadingBlock;
