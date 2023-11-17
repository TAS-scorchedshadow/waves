import React, { useContext, useEffect, useState } from "react";
import { trpc } from "../../../utils/trpc";
import TideProfile from "./TideProfile";
import { InvitationContext, TInvited } from "../../../pages/meeting_arrangement/Arrange";


const TideSearch: React.FC<{searchQuery: string}> = ({ searchQuery }) => {
  const invited = useContext(InvitationContext)[0]

  const [res, setRes] = useState<TInvited[]>([]);

  const retrieveEndpoint = trpc.search.searchFriends.useQuery(undefined, {
    staleTime: Infinity
  })
  
  useEffect(() => {
    if (retrieveEndpoint.isSuccess) {
      console.log(retrieveEndpoint.data)
      setRes(retrieveEndpoint.data.map(d => {
        return {uId: d.id, email: d.email, name: d.name, profile: d.profileImg} as TInvited
      }))
    }
  }, [retrieveEndpoint.isFetched])

  return (
    <div className="grid grid-cols-2">
      {
        res.length === 0 ? 
          <div>No matches exist.</div> :
          res.filter(r => !invited.map(i => i.uId).includes(r.uId) && (searchQuery === '' || r.name.includes(searchQuery))).map(r => {
            return (
              <TideProfile key={r.uId} person={r} added={false} />
            )
          })
      }
    </div>
  )
}


export default TideSearch