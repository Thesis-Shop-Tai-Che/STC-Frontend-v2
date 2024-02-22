import React from "react";
import { Box, Text } from "zmp-ui";
import { useNavigate } from "react-router-dom";

interface SellerOrderEntryProps {
  statusCount: number;
  statusContent: string;
  routePath?: string;
  routeParam?: string;
}

const SellerOrderEntry: React.FC<SellerOrderEntryProps> = ({
  statusCount,
  statusContent,
  routePath,
  routeParam
}) => {
  const navigate = useNavigate();
  return (
    <Box
      flexDirection='column'
      alignItems='center'
      style={{
        flex: 1,
        padding: '16px 8px 16px 8px',
        marginRight: 6,
        backgroundColor: '#EAEBED',
        borderRadius: 4
      }}
      onClick={() => navigate(`/${routePath}/${routeParam}`)}
    >
      <Text size='large' bold>{statusCount}</Text>
      <Text size='small'>{statusContent}</Text>
    </Box>
  )
}

export default SellerOrderEntry