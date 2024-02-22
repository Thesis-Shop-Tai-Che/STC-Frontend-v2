import React from "react";
import { useParams } from 'react-router-dom';
import { UserFetch } from "@utils/type/User";
import ViewStatusOrder from "./viewStatusOrder";
import UpdateStatusOrder from "./updateStatusOrder";

interface ValidityOrderProps {
  currentUser: UserFetch
}

const ValidityOrder: React.FC<ValidityOrderProps> = ({
  currentUser,
}) => {
  const { userState } = useParams();

  return (
    <div className="bg-white">
      {userState == 'seller' ? (
        <>
          <UpdateStatusOrder shopId={currentUser.id} />
        </>
      ) : (
        <>
          <ViewStatusOrder userId={currentUser.id} />
        </>
      )}
    </div>
  );
};

export default ValidityOrder;
